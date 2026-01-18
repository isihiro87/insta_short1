---
description: クイズ動画を作成（レビュー→準備→音声待ち→レンダリング）
---

# クイズ動画作成ワークフロー

qas.md から動画を作成する全体フローです。各ステップは独立したコマンドで実行できます。

## 引数

- `$ARGUMENTS`: quizフォルダパス（例: `datas/history/grade2/4-1/3nanban_trade/quiz`）

---

## ワークフロー

```
┌─────────────────────────────────────────────────────┐
│ 1. /q-review   問題チェック（任意）                  │
│    └─ qas.md の品質確認、修正案提示                 │
├─────────────────────────────────────────────────────┤
│ 2. /q-prepare  音声準備                             │
│    └─ qa.md 生成、音声ファイルリスト作成            │
│                                                     │
│    ⏸️ ここで停止: 音声ファイルを配置                │
├─────────────────────────────────────────────────────┤
│ 3. /q-render   動画レンダリング                     │
│    └─ IchimonIttoData.tsx生成、レンダリング、紹介文 │
└─────────────────────────────────────────────────────┘
```

---

## 各コマンドの詳細

### `/q-review [quizフォルダパス]`

qas.md の問題をチェックし、修正案を提示。

**チェック項目**:
- 答えが一意に定まるか
- 中学生の学習範囲に適切か
- 文章表現が適切か
- 補足が答えのヒントになっていないか

**出力**: `review.md`（問題がある場合のみ）

---

### `/q-prepare [quizフォルダパス]`

qa.md を生成し、音声ファイルリストを出力。

**出力**:
- `qa.md` - 音声作成用（問題・答えのみ）
- `audios/` - 音声ファイル保存先フォルダ
- 音声ファイル一覧表

**次のステップ**: 音声ファイルを `audios/` に配置

---

### `/q-render [quizフォルダパス]`

音声ファイルから動画をレンダリングし、紹介文を生成。

**前提**: `audios/` に音声ファイルが配置済み

**出力**:
- `[ID]-IchimonIttoData.tsx` - データファイル
- `[ID]-output.mp4` - 出力動画
- `[ID]-post_youtube.txt` - YouTube用紹介文
- `[ID]-post_instagram.txt` - Instagram用紹介文

---

## クイック実行

問題チェックをスキップして一気に進める場合:

```
1. /q-prepare [パス]  ← qa.md 生成、音声リスト表示
   ↓ 音声ファイルを配置
2. /q-render [パス]   ← レンダリング、紹介文生成
```

---

## ファイル構造

```
[quizフォルダパス]/
├── qas.md                    # 元データ（問題・答え・補足）
├── qa.md                     # 音声作成用（問題・答えのみ）
├── review.md                 # 問題チェック結果（任意）
├── audios/                   # 音声ファイル
│   ├── 00-[トピック].wav
│   └── ...
├── [ID]-IchimonIttoData.tsx  # データファイル
├── [ID]-output.mp4           # 出力動画
├── [ID]-post_youtube.txt     # YouTube紹介文
└── [ID]-post_instagram.txt   # Instagram紹介文
```

---

## 使用例

```bash
# 問題チェックから始める場合
/q-review datas/history/grade2/4-1/3nanban_trade/quiz
# → review.md を確認、必要に応じて qas.md を修正

/q-prepare datas/history/grade2/4-1/3nanban_trade/quiz
# → qa.md 生成、音声リスト表示
# → 音声ファイルを audios/ に配置

/q-render datas/history/grade2/4-1/3nanban_trade/quiz
# → 動画レンダリング、紹介文生成
```
