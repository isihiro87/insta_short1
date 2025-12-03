import os
import wave
import struct
import math
import shutil

def get_rms(samples):
    if not samples:
        return 0
    sum_squares = sum(s**2 for s in samples)
    return math.sqrt(sum_squares / len(samples))

def split_audio_by_silence_wave(file_path, min_silence_len=0.3, silence_thresh_db=-40, keep_silence=0.1, output_dir=None):
    """
    標準ライブラリのみでWAVファイルを無音区間で分割する
    
    Args:
        file_path (str): 入力WAVファイル
        min_silence_len (float): 無音とみなす最小秒数
        silence_thresh_db (float): 無音閾値 (dB)
        keep_silence (float): 前後に残す無音秒数
        output_dir (str): 出力先ディレクトリ (Noneの場合はファイル名_parts)
    """
    
    filename_base, ext = os.path.splitext(os.path.basename(file_path))
    if ext.lower() != '.wav':
        print("エラー: このスクリプトはWAVファイル専用です。")
        return

    # 出力ディレクトリの作成
    if output_dir is None:
        output_dir = "explanation_parts"
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"ディレクトリを作成しました: {output_dir}")
    else:
        print(f"ディレクトリを使用します: {output_dir}")

    try:
        print(f"ファイルを読み込んでいます: {file_path} ...")
        with wave.open(file_path, 'rb') as wav_in:
            params = wav_in.getparams()
            nchannels, sampwidth, framerate, nframes, comptype, compname = params
            
            if sampwidth != 2:
                print("エラー: 16bit WAVファイルのみ対応しています。")
                return
            
            frames = wav_in.readframes(nframes)
            
            fmt = f"<{len(frames)//2}h"
            samples = struct.unpack(fmt, frames)
            
            window_size_sec = 0.01
            window_size_samples = int(framerate * window_size_sec * nchannels)
            
            max_amp = 32768
            thresh_amp = max_amp * (10 ** (silence_thresh_db / 20))
            print(f"無音閾値振幅: {thresh_amp:.2f}")
            
            is_silence = []
            
            for i in range(0, len(samples), window_size_samples):
                chunk = samples[i:i+window_size_samples]
                rms = get_rms(chunk)
                is_silence.append(rms < thresh_amp)
            
            min_silence_windows = int(min_silence_len / window_size_sec)
            
            sound_windows = []
            for i, silent in enumerate(is_silence):
                if not silent:
                    sound_windows.append(i)
            
            if not sound_windows:
                print("音声区間が見つかりませんでした（全体が無音？）")
                return

            grouped_ranges = []
            if sound_windows:
                current_start = sound_windows[0]
                current_end = sound_windows[0]
                
                for w_idx in sound_windows[1:]:
                    gap = w_idx - current_end - 1
                    if gap < min_silence_windows:
                        current_end = w_idx
                    else:
                        grouped_ranges.append((current_start, current_end))
                        current_start = w_idx
                        current_end = w_idx
                grouped_ranges.append((current_start, current_end))
            
            print(f"検出された音声区間数: {len(grouped_ranges)}")
            
            keep_silence_samples = int(keep_silence * framerate * nchannels)
            
            for i, (start_w, end_w) in enumerate(grouped_ranges):
                start_sample = start_w * window_size_samples
                end_sample = (end_w + 1) * window_size_samples
                
                start_sample = max(0, start_sample - keep_silence_samples)
                end_sample = min(len(samples), end_sample + keep_silence_samples)
                
                chunk_samples = samples[start_sample:end_sample]
                chunk_data = struct.pack(f"<{len(chunk_samples)}h", *chunk_samples)
                
                output_filename = os.path.join(output_dir, f"{filename_base}_part{i+1:03d}{ext}")
                print(f"保存中 ({i+1}/{len(grouped_ranges)}): {output_filename}")
                
                with wave.open(output_filename, 'wb') as wav_out:
                    wav_out.setparams(params)
                    wav_out.setnframes(len(chunk_samples) // nchannels)
                    wav_out.writeframes(chunk_data)

        print(f"すべての分割が完了しました！ 保存先: {output_dir}")

    except Exception as e:
        print(f"エラーが発生しました: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    target_file = "part14.wav" 
    
    if os.path.exists(target_file):
        # 0.3秒の無音で分割、フォルダに出力
        split_audio_by_silence_wave(target_file, min_silence_len=0.3, silence_thresh_db=-40)
    else:
        print(f"ファイル '{target_file}' が見つかりません。パスを確認してください。")