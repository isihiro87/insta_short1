---
description: 英単語IchimonIttoData.tsx生成、レンダリング用シェルスクリプト作成、紹介文生成
---

# 英単語クイズ動画レンダリング

音声ファイルから IchimonIttoData.tsx を生成し、レンダリング用シェルスクリプトを作成して紹介文を作成します。

## 引数

- `$ARGUMENTS`: wordsフォルダパス（例: `datas/english/grade2/unit_06/quiz/words`）

---

## 前提条件

以下が完了していること:
- qa.md が存在する
- audios/en/ に英語音声ファイルが配置済み（自動生成）
- audios/ja/ に日本語音声ファイルが配置済み（ユーザー作成）

---

## ステップ1: ファイル確認

### 1.1 qa.mdの確認

```bash
cat [フォルダパス]/qa.md | head -20
```

### 1.2 音声ファイルの確認

```bash
ls [フォルダパス]/audios/en/*.wav
ls [フォルダパス]/audios/ja/*.wav
```

### 1.3 ファイル数の一致確認

英語と日本語の音声ファイル数が一致していることを確認。

---

## ステップ2: データ生成

### 2.1 音声長さの取得

WAVファイルのサイズから長さを計算する。

**前提条件**: 音声ファイルは 48000Hz, 16bit, モノラル形式

```bash
for f in [フォルダパス]/audios/en/*.wav [フォルダパス]/audios/ja/*.wav; do
  size=$(stat -c%s "$f")
  data_size=$((size - 44))
  duration_ms=$((data_size * 1000 / 96000))
  frames=$((duration_ms * 30 / 1000))
  echo "$(basename "$f"): ${duration_ms}ms = ${frames}frames"
done
```

### 2.2 IchimonIttoData.tsx の生成

**英単語クイズの特徴**:
- question: 英単語（改行不要）
- answer: 日本語訳（改行不要）
- description: 補足説明（語源・覚え方・関連語等）
- questionAudio: audio/explain/en/XX-words.wav
- answerAudio: audio/explain/ja/XX-words.wav

```typescript
// 保存用ファイル - [ファイル名]
// フォルダ: [フォルダパス]
// 生成日: [日付]

// タイトル情報（学年・教科）
export const titleData = '中2　英語';

export interface IchimonIttoScene {
    id: string;
    question: string;
    answer: string;
    description?: string;
    questionAudio: string;
    questionDuration: number;
    answerAudio: string;
    answerDuration: number;
}

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: 'topic',
        answer: '話題、トピック',
        description: 'top(頂上)+ic、話の中心となるもの',
        questionAudio: 'audio/explain/en/00-words.wav',
        questionDuration: [フレーム数],
        answerAudio: 'audio/explain/ja/00-words.wav',
        answerDuration: [フレーム数],
    },
    {
        id: 'q2',
        question: 'slide',
        answer: 'スライド',
        description: '動詞で「滑る」の意味も',
        questionAudio: 'audio/explain/en/01-words.wav',
        questionDuration: [フレーム数],
        answerAudio: 'audio/explain/ja/01-words.wav',
        answerDuration: [フレーム数],
    },
    // ...
];
```

保存先: `[フォルダパス]/[ID]-IchimonIttoData.tsx`

**ID命名規則**:
- words_01.md → `01-IchimonIttoData.tsx`
- words_04.md → `04-IchimonIttoData.tsx`

### 2.3 ユーザー確認（レンダリング前）

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## IchimonIttoData.tsx を生成しました

ファイルを確認してください:
- [フォルダパス]/[ID]-IchimonIttoData.tsx

修正が必要な場合は編集後、「OK」と入力してください。
レンダリング用スクリプトを作成します。
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**重要**: ユーザーが「OK」と応答するまでレンダリングスクリプト作成に進まない。

---

## ステップ3: レンダリング用シェルスクリプトの作成

### 3.1 スクリプト作成方針

**レンダリングはClaudeが実行しない。シェルスクリプトを作成し、ユーザーが手動で実行する。**

### 3.2 シェルスクリプトのテンプレート

```bash
#!/bin/bash
set -e

# レンダリングスクリプト: [ファイル名]
# 生成日: [日付]

TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain/en" "$TEMP_DIR/audio/explain/ja"

# 音声ファイルをコピー（必要なファイルのみ、1行ずつ記述）
cp [フォルダパス]/audios/en/[番号]-words.wav "$TEMP_DIR/audio/explain/en/"
cp [フォルダパス]/audios/en/[番号]-words.wav "$TEMP_DIR/audio/explain/en/"
# ... 必要な英語音声ファイルをすべて列挙

cp [フォルダパス]/audios/ja/[番号]-words.wav "$TEMP_DIR/audio/explain/ja/"
cp [フォルダパス]/audios/ja/[番号]-words.wav "$TEMP_DIR/audio/explain/ja/"
# ... 必要な日本語音声ファイルをすべて列挙

cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"

# データファイルをsrcにコピー
cp [フォルダパス]/[ID]-IchimonIttoData.tsx src/IchimonIttoData.tsx

echo "=== [ID] レンダリング開始 ==="
PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts IchimonIttoShorts \
  [フォルダパス]/[ID]-output.mp4 \
  --public-dir "$TEMP_DIR" \
  --browser-executable /workspaces/insta-short1/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell \
  --props '{"subject":"english"}' \
  --disable-chrome-sandbox

echo "=== [ID] 完了 ==="
rm -rf "$TEMP_DIR"
```

保存先: `scripts/render-[識別名].sh`

**識別名の例**: `grade2-unit06-words04`, `grade3-unit06-words04`

### 3.3 スクリプトに実行権限を付与

```bash
chmod +x scripts/render-[識別名].sh
```

### 3.4 ユーザーへの実行指示

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## レンダリング用スクリプトを作成しました

以下のコマンドで実行してください:

./scripts/render-[識別名].sh

複数ファイルがある場合は順番に実行してください:
1. ./scripts/render-[識別名1].sh
2. ./scripts/render-[識別名2].sh
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ステップ4: 紹介文の生成

**注意**: unit名（Unit 6等）は含めない。「定期テスト対策」を【】で囲んで目立たせる。

**post_youtube.txt**:
```
【タイトル】
【定期テスト対策】[単語数]語全問正解できる？[単元名]｜[学年]英語一問一答

【説明文】
全問即答できる？

[学年]英語「[単元名]」の英単語を[単語数]語でチェック！
定期テスト前の確認にぴったりです。

スペルを見て意味がパッと出てくる？
出てこなかった単語は→復習のチャンス
全問スラスラ答えられたら→テスト準備OK

【タグ】
中学生,[学年],英語,英単語,一問一答,定期テスト対策,テスト勉強,暗記,ショート動画,受験勉強
```

**post_instagram.txt**:
```
全問即答できる？

【定期テスト対策】[学年]英語「[単元名]」英単語[単語数]語

スペルを見て意味がパッと出てくる？
出てこなかった単語は保存して復習しよう

#中学生 #英語 #英単語 #定期テスト対策 #勉強垢
```

保存先:
- `[フォルダパス]/[ID]-post_youtube.txt`
- `[フォルダパス]/[ID]-post_instagram.txt`

---

## ステップ5: 完了報告

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 完了

### 生成したファイル
- [ID]-IchimonIttoData.tsx
- scripts/render-[識別名].sh
- [ID]-post_youtube.txt
- [ID]-post_instagram.txt

### 次のステップ
1. スクリプトを実行してレンダリング
2. output.mp4を確認
3. 紹介文を確認・編集
4. アップロード
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## ファイル構造（最終形）

```
[フォルダパス]/
├── words.md              # 概要
├── words_01.md           # 単語リスト
├── qa.md                 # 音声作成用
├── audios/
│   ├── en/               # 英語音声（自動生成）
│   │   ├── 00-words.wav
│   │   ├── 01-words.wav
│   │   └── ...
│   └── ja/               # 日本語音声（ユーザー作成）
│       ├── 00-words.wav
│       ├── 01-words.wav
│       └── ...
├── [ID]-IchimonIttoData.tsx  # データファイル
├── [ID]-output.mp4           # 出力動画（スクリプト実行後）
├── [ID]-post_youtube.txt     # YouTube紹介文
└── [ID]-post_instagram.txt   # Instagram紹介文

scripts/
└── render-[識別名].sh        # レンダリング用スクリプト
```

---

## 重要なルール

1. **レンダリングはClaudeが実行しない** - シェルスクリプトを作成し、ユーザーが手動実行
2. **--timeout オプションは使用しない** - タイムアウトなしで実行
3. **--disable-chrome-sandbox を必ず指定** - サンドボックスエラー防止
4. **--props '{"subject":"english"}' で英語テーマを指定** - Root.tsx を変更しない
5. **音声ファイルは個別にcp** - ブレース展開を使わない（コピペ時の改行問題回避）
6. **PUPPETEER_HEADLESS_MODE=new を必ず設定** - ブラウザ接続タイムアウト防止
7. **chrome-headless-shell を使用** - `--browser-executable` オプションで指定
8. **英単語は改行不要** - 短いため自動折り返しで十分
9. **subject は "english"** - テーマカラーは薄青背景 + 青アクセント
10. **音声パスはen/とja/で分離** - 同じ番号がペア
11. **Q○表記なし** - 英語ではタイトル下に「2/7」形式で問題番号を表示（歴史等はQ○のまま）
