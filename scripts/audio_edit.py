#!/usr/bin/env python3
"""
音声ファイル編集スクリプト

機能:
- cut: 指定時間でカット（トリミング）
- merge: 複数ファイルを結合
- split: 1つのファイルを複数に分割
- autosplit: 無音検出で自動分割（単語ごとに分割）

使用例:
  # カット（0:05〜0:10を切り出し）
  python audio_edit.py cut input.wav output.wav --start 5000 --end 10000

  # 結合
  python audio_edit.py merge file1.wav file2.wav -o output.wav

  # 分割（タイムスタンプ指定）
  python audio_edit.py split input.wav -t 5000,10000,15000 -o output_dir/

  # 無音検出で自動分割
  python audio_edit.py autosplit input.wav -o output_dir/
"""

import argparse
import os
import sys
from pathlib import Path

from pydub import AudioSegment
from pydub.silence import detect_silence, split_on_silence


def parse_time(time_str: str) -> int:
    """
    時間文字列をミリ秒に変換

    対応形式:
    - "5000" → 5000ms
    - "5.5" → 5500ms（秒として解釈）
    - "1:30" → 90000ms（分:秒）
    - "1:30.5" → 90500ms（分:秒.ミリ秒）
    """
    time_str = time_str.strip()

    # 分:秒 形式
    if ":" in time_str:
        parts = time_str.split(":")
        if len(parts) == 2:
            minutes = int(parts[0])
            # 秒部分に小数点がある場合
            if "." in parts[1]:
                sec_parts = parts[1].split(".")
                seconds = int(sec_parts[0])
                ms = int(sec_parts[1].ljust(3, "0")[:3])  # 3桁に正規化
            else:
                seconds = int(parts[1])
                ms = 0
            return (minutes * 60 + seconds) * 1000 + ms

    # 小数点がある場合は秒として解釈
    if "." in time_str:
        return int(float(time_str) * 1000)

    # それ以外はミリ秒
    return int(time_str)


def format_time(ms: int) -> str:
    """ミリ秒を読みやすい形式に変換"""
    total_seconds = ms // 1000
    remaining_ms = ms % 1000
    minutes = total_seconds // 60
    seconds = total_seconds % 60

    if minutes > 0:
        return f"{minutes}:{seconds:02d}.{remaining_ms:03d}"
    return f"{seconds}.{remaining_ms:03d}s"


def cut_audio(
    input_path: str, output_path: str, start_ms: int | None, end_ms: int | None
) -> None:
    """音声ファイルをカット"""
    audio = AudioSegment.from_file(input_path)
    duration = len(audio)

    start = start_ms if start_ms is not None else 0
    end = end_ms if end_ms is not None else duration

    if start < 0:
        start = 0
    if end > duration:
        end = duration
    if start >= end:
        raise ValueError(f"開始時間({start}ms)が終了時間({end}ms)以上です")

    print(f"入力: {input_path} (長さ: {format_time(duration)})")
    print(f"カット範囲: {format_time(start)} 〜 {format_time(end)}")

    cut_audio_segment = audio[start:end]
    cut_audio_segment.export(output_path, format=Path(output_path).suffix[1:])

    print(f"出力: {output_path} (長さ: {format_time(len(cut_audio_segment))})")


def merge_audio(input_paths: list[str], output_path: str, gap_ms: int = 0) -> None:
    """複数の音声ファイルを結合"""
    if len(input_paths) < 2:
        raise ValueError("結合には2つ以上のファイルが必要です")

    combined = AudioSegment.empty()
    gap = AudioSegment.silent(duration=gap_ms) if gap_ms > 0 else None

    print("結合するファイル:")
    for i, path in enumerate(input_paths):
        audio = AudioSegment.from_file(path)
        print(f"  {i + 1}. {path} (長さ: {format_time(len(audio))})")

        if len(combined) > 0 and gap:
            combined += gap
        combined += audio

    combined.export(output_path, format=Path(output_path).suffix[1:])
    print(f"\n出力: {output_path} (合計: {format_time(len(combined))})")


def split_audio(
    input_path: str, timestamps: list[int], output_dir: str, prefix: str = ""
) -> None:
    """音声ファイルを指定タイムスタンプで分割"""
    audio = AudioSegment.from_file(input_path)
    duration = len(audio)

    # タイムスタンプをソート
    timestamps = sorted(timestamps)

    # 0と終端を追加
    if timestamps[0] != 0:
        timestamps = [0] + timestamps
    if timestamps[-1] != duration:
        timestamps = timestamps + [duration]

    print(f"入力: {input_path} (長さ: {format_time(duration)})")
    print(f"分割ポイント: {', '.join(format_time(t) for t in timestamps[1:-1])}")

    # 出力ディレクトリ作成
    os.makedirs(output_dir, exist_ok=True)

    # プレフィックス決定
    if not prefix:
        prefix = Path(input_path).stem

    print("\n出力ファイル:")
    for i in range(len(timestamps) - 1):
        start = timestamps[i]
        end = timestamps[i + 1]
        segment = audio[start:end]

        output_name = f"{prefix}_{i:02d}{Path(input_path).suffix}"
        output_path = os.path.join(output_dir, output_name)
        segment.export(output_path, format=Path(input_path).suffix[1:])

        print(
            f"  {i + 1}. {output_name} ({format_time(start)} 〜 {format_time(end)}, "
            f"長さ: {format_time(len(segment))})"
        )


def autosplit_audio(
    input_path: str,
    output_dir: str,
    prefix: str = "",
    min_silence_len: int = 300,
    silence_thresh: int = -40,
    keep_silence: int = 100,
    min_length: int = 100,
) -> None:
    """無音を検出して自動的に分割（単語ごとに分割）"""
    audio = AudioSegment.from_file(input_path)
    duration = len(audio)

    print(f"入力: {input_path} (長さ: {format_time(duration)})")
    print(f"設定: 無音判定={silence_thresh}dB, 最小無音長={min_silence_len}ms, 保持={keep_silence}ms")

    # 無音区間を検出
    silence_ranges = detect_silence(
        audio,
        min_silence_len=min_silence_len,
        silence_thresh=silence_thresh,
    )

    if not silence_ranges:
        print("無音区間が検出されませんでした。閾値を調整してください。")
        return

    print(f"\n検出された無音区間: {len(silence_ranges)}箇所")
    for i, (start, end) in enumerate(silence_ranges):
        print(f"  {i + 1}. {format_time(start)} 〜 {format_time(end)} (長さ: {format_time(end - start)})")

    # split_on_silenceで分割
    chunks = split_on_silence(
        audio,
        min_silence_len=min_silence_len,
        silence_thresh=silence_thresh,
        keep_silence=keep_silence,
    )

    # 短すぎるチャンクをフィルタリング
    chunks = [c for c in chunks if len(c) >= min_length]

    if not chunks:
        print("分割後のセグメントがありません。")
        return

    # 出力ディレクトリ作成
    os.makedirs(output_dir, exist_ok=True)

    # プレフィックス決定
    if not prefix:
        prefix = Path(input_path).stem

    print(f"\n出力ファイル: {len(chunks)}個")
    for i, chunk in enumerate(chunks):
        output_name = f"{i:02d}-{prefix}{Path(input_path).suffix}"
        output_path = os.path.join(output_dir, output_name)
        chunk.export(output_path, format=Path(input_path).suffix[1:])
        print(f"  {i + 1}. {output_name} (長さ: {format_time(len(chunk))})")


def detect_silence_info(
    input_path: str,
    min_silence_len: int = 300,
    silence_thresh: int = -40,
) -> None:
    """無音区間を検出して表示（分割せずに確認のみ）"""
    audio = AudioSegment.from_file(input_path)
    duration = len(audio)

    print(f"入力: {input_path} (長さ: {format_time(duration)})")
    print(f"設定: 無音判定={silence_thresh}dB, 最小無音長={min_silence_len}ms")

    # 無音区間を検出
    silence_ranges = detect_silence(
        audio,
        min_silence_len=min_silence_len,
        silence_thresh=silence_thresh,
    )

    if not silence_ranges:
        print("\n無音区間が検出されませんでした。")
        print("ヒント: --thresh を大きく（例: -35）するか、--min-len を小さく（例: 200）してみてください。")
        return

    print(f"\n検出された無音区間: {len(silence_ranges)}箇所")
    print("-" * 60)

    # 音声区間も計算
    sound_ranges = []
    prev_end = 0
    for start, end in silence_ranges:
        if start > prev_end:
            sound_ranges.append((prev_end, start))
        prev_end = end
    if prev_end < duration:
        sound_ranges.append((prev_end, duration))

    print(f"\n音声区間（分割後のセグメント）: {len(sound_ranges)}個")
    for i, (start, end) in enumerate(sound_ranges):
        print(f"  {i + 1}. {format_time(start)} 〜 {format_time(end)} (長さ: {format_time(end - start)})")


def info_audio(input_path: str) -> None:
    """音声ファイルの情報を表示"""
    audio = AudioSegment.from_file(input_path)

    print(f"ファイル: {input_path}")
    print(f"  長さ: {format_time(len(audio))} ({len(audio)}ms)")
    print(f"  チャンネル: {audio.channels}")
    print(f"  サンプルレート: {audio.frame_rate}Hz")
    print(f"  サンプル幅: {audio.sample_width * 8}bit")


def main():
    parser = argparse.ArgumentParser(
        description="音声ファイル編集ツール",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
時間指定の形式:
  - ミリ秒: 5000
  - 秒（小数可）: 5.5
  - 分:秒: 1:30
  - 分:秒.ミリ秒: 1:30.500

使用例:
  # ファイル情報を表示
  python audio_edit.py info input.wav

  # 5秒〜10秒を切り出し
  python audio_edit.py cut input.wav output.wav --start 5 --end 10

  # 最初の10秒を切り出し
  python audio_edit.py cut input.wav output.wav --end 10

  # 複数ファイルを結合（500msの間隔を挿入）
  python audio_edit.py merge file1.wav file2.wav file3.wav -o output.wav --gap 500

  # 5秒、10秒、15秒のポイントで分割
  python audio_edit.py split input.wav -t 5,10,15 -o output_dir/

  # 無音区間を検出（確認のみ）
  python audio_edit.py detect input.wav

  # 無音検出で自動分割
  python audio_edit.py autosplit input.wav -o output_dir/
        """,
    )

    subparsers = parser.add_subparsers(dest="command", help="コマンド")

    # info コマンド
    info_parser = subparsers.add_parser("info", help="音声ファイルの情報を表示")
    info_parser.add_argument("input", help="入力ファイル")

    # cut コマンド
    cut_parser = subparsers.add_parser("cut", help="音声ファイルをカット")
    cut_parser.add_argument("input", help="入力ファイル")
    cut_parser.add_argument("output", help="出力ファイル")
    cut_parser.add_argument(
        "--start", "-s", type=str, default=None, help="開始時間（省略時: 先頭から）"
    )
    cut_parser.add_argument(
        "--end", "-e", type=str, default=None, help="終了時間（省略時: 末尾まで）"
    )

    # merge コマンド
    merge_parser = subparsers.add_parser("merge", help="複数ファイルを結合")
    merge_parser.add_argument("inputs", nargs="+", help="入力ファイル（複数）")
    merge_parser.add_argument("--output", "-o", required=True, help="出力ファイル")
    merge_parser.add_argument(
        "--gap", "-g", type=str, default="0", help="ファイル間の無音時間"
    )

    # split コマンド
    split_parser = subparsers.add_parser("split", help="ファイルを分割")
    split_parser.add_argument("input", help="入力ファイル")
    split_parser.add_argument(
        "--timestamps",
        "-t",
        required=True,
        help="分割ポイント（カンマ区切り、例: 5,10,15）",
    )
    split_parser.add_argument(
        "--output", "-o", required=True, help="出力ディレクトリ"
    )
    split_parser.add_argument(
        "--prefix", "-p", default="", help="出力ファイル名のプレフィックス"
    )

    # detect コマンド（無音検出・確認のみ）
    detect_parser = subparsers.add_parser("detect", help="無音区間を検出して表示")
    detect_parser.add_argument("input", help="入力ファイル")
    detect_parser.add_argument(
        "--min-len", type=int, default=300, help="無音と判定する最小長さ（ms、デフォルト: 300）"
    )
    detect_parser.add_argument(
        "--thresh", type=int, default=-40, help="無音と判定する閾値（dB、デフォルト: -40）"
    )

    # autosplit コマンド（無音検出で自動分割）
    autosplit_parser = subparsers.add_parser("autosplit", help="無音検出で自動分割")
    autosplit_parser.add_argument("input", help="入力ファイル")
    autosplit_parser.add_argument("--output", "-o", required=True, help="出力ディレクトリ")
    autosplit_parser.add_argument(
        "--prefix", "-p", default="", help="出力ファイル名のプレフィックス"
    )
    autosplit_parser.add_argument(
        "--min-len", type=int, default=300, help="無音と判定する最小長さ（ms、デフォルト: 300）"
    )
    autosplit_parser.add_argument(
        "--thresh", type=int, default=-40, help="無音と判定する閾値（dB、デフォルト: -40）"
    )
    autosplit_parser.add_argument(
        "--keep", type=int, default=100, help="各セグメントに残す無音の長さ（ms、デフォルト: 100）"
    )
    autosplit_parser.add_argument(
        "--min-segment", type=int, default=100, help="出力する最小セグメント長（ms、デフォルト: 100）"
    )

    args = parser.parse_args()

    if args.command is None:
        parser.print_help()
        sys.exit(1)

    try:
        if args.command == "info":
            info_audio(args.input)

        elif args.command == "cut":
            start = parse_time(args.start) if args.start else None
            end = parse_time(args.end) if args.end else None
            cut_audio(args.input, args.output, start, end)

        elif args.command == "merge":
            gap = parse_time(args.gap) if args.gap else 0
            merge_audio(args.inputs, args.output, gap)

        elif args.command == "split":
            timestamps = [parse_time(t) for t in args.timestamps.split(",")]
            split_audio(args.input, timestamps, args.output, args.prefix)

        elif args.command == "detect":
            detect_silence_info(
                args.input,
                min_silence_len=getattr(args, "min_len", 300),
                silence_thresh=args.thresh,
            )

        elif args.command == "autosplit":
            autosplit_audio(
                args.input,
                args.output,
                prefix=args.prefix,
                min_silence_len=getattr(args, "min_len", 300),
                silence_thresh=args.thresh,
                keep_silence=args.keep,
                min_length=getattr(args, "min_segment", 100),
            )

    except FileNotFoundError as e:
        print(f"エラー: ファイルが見つかりません - {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"エラー: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
