---
description: 音声ファイルの編集（カット/結合/分割）
---

# 音声編集

音声ファイルのカット、結合、分割を行います。

## 引数

- `$ARGUMENTS`: 操作内容（下記参照）

---

## 操作一覧

### 1. 情報表示: `info [ファイル]`

```bash
python scripts/audio_edit.py info "[ファイル]"
```

### 2. カット: `cut [入力] [出力] [開始] [終了]`

指定時間範囲を切り出し。

```bash
python scripts/audio_edit.py cut "[入力]" "[出力]" --start [開始] --end [終了]
```

- `--start` 省略時: 先頭から
- `--end` 省略時: 末尾まで

### 3. 結合: `merge [ファイル1] [ファイル2] ... -o [出力]`

複数ファイルを1つに結合。

```bash
python scripts/audio_edit.py merge "[ファイル1]" "[ファイル2]" -o "[出力]"
```

- `--gap [時間]`: ファイル間に無音を挿入

### 4. 分割: `split [入力] -t [タイムスタンプ] -o [出力先]`

1つのファイルを複数に分割（手動指定）。

```bash
python scripts/audio_edit.py split "[入力]" -t "[タイムスタンプ]" -o "[出力先]"
```

### 5. 無音検出: `detect [ファイル]`

無音区間を検出して表示（分割はしない）。

```bash
python scripts/audio_edit.py detect "[ファイル]" --thresh -40 --min-len 300
```

- `--thresh`: 無音判定の閾値（dB、デフォルト: -40）
- `--min-len`: 無音と判定する最小長さ（ms、デフォルト: 300）

### 6. 自動分割: `autosplit [入力] -o [出力先]`

無音を検出して単語ごとに自動分割。

```bash
python scripts/audio_edit.py autosplit "[入力]" -o "[出力先]" -p "[プレフィックス]"
```

オプション:
- `--thresh`: 無音判定の閾値（dB、デフォルト: -40）
- `--min-len`: 無音と判定する最小長さ（ms、デフォルト: 300）
- `--keep`: 各セグメントに残す無音の長さ（ms、デフォルト: 100）
- `--min-segment`: 出力する最小セグメント長（ms、デフォルト: 100）
- `-p`: 出力ファイル名のプレフィックス

---

## 時間指定の形式

以下の形式に対応:

| 形式 | 例 | 意味 |
|------|-----|------|
| ミリ秒 | `5000` | 5000ms（5秒） |
| 秒（小数可） | `5.5` | 5.5秒 |
| 分:秒 | `1:30` | 1分30秒 |
| 分:秒.ミリ秒 | `1:30.500` | 1分30秒500ミリ秒 |

---

## 使用例

### 無音検出で単語ごとに自動分割

```
/a-edit autosplit input.wav -o output_dir/ -p words
```

### 無音区間を確認（分割前のプレビュー）

```
/a-edit detect input.wav
```

### 閾値を調整して検出（音が小さい場合）

```
/a-edit detect input.wav --thresh -35 --min-len 200
```

### 5秒〜10秒を切り出し

```
/a-edit cut input.wav output.wav --start 5 --end 10
```

### 複数ファイルを結合

```
/a-edit merge file1.wav file2.wav file3.wav -o combined.wav
```

---

## 実行手順

1. ユーザーの指定に基づき、適切な `python scripts/audio_edit.py` コマンドを構築
2. 実行前に確認表示
3. bashでコマンドを実行
4. 結果を報告

---

## 対話的な使い方

引数が不完全な場合:

1. まず `detect` で無音区間を確認
2. 必要に応じて閾値を調整
3. `autosplit` で自動分割を実行

### 例: 「ダウンロード (83).wav を単語ごとに分割」

```bash
# 1. 無音検出を確認
python scripts/audio_edit.py detect "input.wav"

# 2. 自動分割を実行
python scripts/audio_edit.py autosplit "input.wav" -o "output_dir/" -p "word"
```
