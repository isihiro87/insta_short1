---
description: IchimonIttoData.tsx生成、レンダリング用シェルスクリプト作成、紹介文生成
---

# クイズ動画レンダリング

音声ファイルから IchimonIttoData.tsx を生成し、レンダリング用シェルスクリプトを作成して紹介文を作成します。

## 引数

- `$ARGUMENTS`: quizフォルダパス（例: `datas/history/grade2/4-1/3nanban_trade/quiz`）

---

## 前提条件

以下が完了していること:
- qas.md が存在する
- audios/ フォルダに音声ファイルが配置済み

---

## ステップ1: ファイル確認

### 1.1 qas.mdファイルの検索

```bash
ls [フォルダパス]/*qas*.md
```

### 1.2 音声ファイルの確認

```bash
ls [フォルダパス]/audios/*.wav
```

---

## ステップ2: 各ファイルのデータ生成（並行可能）

以下を各 *qas*.md ファイルに対して繰り返す:

### 2.1 音声ファイル範囲の決定

各qas.mdファイルは、qa.md内の連番に対応する音声ファイルを使用:
- 1番目のqas.md（N問）: 音声 00 〜 (N×2-1)
- 2番目のqas.md（M問）: 音声 (N×2) 〜 (N×2+M×2-1)

### 2.2 音声長さの取得

WAVファイルのサイズから長さを計算する（ffprobe/bc不要）。

**前提条件**: 音声ファイルは 48000Hz, 16bit, モノラル形式

```bash
# WAVファイルのサイズから長さを計算
for f in [フォルダパス]/audios/[対象ファイル].wav; do
  size=$(stat -c%s "$f")
  data_size=$((size - 44))  # WAVヘッダー44バイトを除く
  duration_ms=$((data_size * 1000 / 96000))  # 48000Hz * 2bytes = 96000 bytes/sec
  frames=$((duration_ms * 30 / 1000))  # 30fps
  echo "$(basename "$f"): ${duration_ms}ms = ${frames}frames"
done
```

**計算式の説明**:
- WAVヘッダー: 44バイト（固定）
- データサイズ: ファイルサイズ - 44
- 秒数: データサイズ / (サンプルレート × バイト数) = データサイズ / 96000
- フレーム数: 秒数 × 30fps

### 2.3 IchimonIttoData.tsx の生成

**🚨 改行ルール（最重要）**:
- **`\n`は1問につき最大1つ**（2つ以上は禁止）
- `\n`の**直前の文字数**が**11文字以下**でなければならない
- **12文字目以降**に`\n`を入れるのは**絶対禁止**
- 迷ったら**改行を入れない**（自動折り返しに任せる）

**判断フロー**:
1. 最初の句読点・助詞の位置を確認
2. その位置が**11文字以下** → `\n`を1つだけ入れてOK
3. その位置が**12文字以上** → `\n`を入れない（全体を1行で書く）

**例**:
- ✅ `関ヶ原の戦いで\n勝ったのは誰？` → 8文字で1回改行 → OK
- ✅ `大名が領地と江戸を\n1年おきに往復する制度は？` → 9文字で1回改行 → OK
- ❌ `大名が領地と江戸を\n1年おきに往復する\n制度は？` → 2回改行 → NG
- ❌ `大河のほとりで発達した、\n都市や...` → 12文字 → NG
- ✅ `大河のほとりで発達した、都市や文字を持つ社会を何という？` → 改行なし → OK

**文字数の数え方**:
- 句読点（、。）、括弧（「」『』（））も**1文字**としてカウント
- 数字・ローマ字は2文字で1文字分としてカウント
- 例: 「1549年に」= 1(0.5)+5(0.5)+4(0.5)+9(0.5)+年(1)+に(1) = 4文字

```typescript
// 保存用ファイル - [ID]-qas.md
// フォルダ: [フォルダパス]
// 生成日: [日付]

// タイトル情報（学年・教科）
export const titleData = '中2　歴史';

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
        question: '[問題1]',
        answer: '[答え1]',
        description: '[補足1]',
        questionAudio: 'audio/explain/[開始番号]-[トピックID].wav',
        questionDuration: [フレーム数],
        answerAudio: 'audio/explain/[開始番号+1]-[トピックID].wav',
        answerDuration: [フレーム数],
    },
    // ...
];
```

保存先: `[フォルダパス]/[ID]-IchimonIttoData.tsx`

### 2.4 改行ルールのチェック

生成したIchimonIttoData.tsxの各questionフィールドを検査し、改行ルールに違反していないかチェック。

**文字数カウント方法**:
- 日本語（ひらがな、カタカナ、漢字）: 1文字 = 1
- 句読点（、。）、括弧（「」『』（））: 1文字 = 1
- 半角英数字: 2文字 = 1（例: 1549 = 2文字分）

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 改行ルールチェック結果

✅ Q1: OK（改行なし）
✅ Q2: OK（10文字 + 9文字）
❌ Q3: NG（12文字 + 8文字）
  現在: 「ロシア革命を妨害するため\n日本などが...」
  1行目: 12文字 ← 11文字超過
  → 修正案: 「ロシア革命妨害のため\n日本などが送った軍は？」
...
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**エラーがある場合**: 修正後、次のステップへ進む

### 2.5 ユーザー確認（レンダリング前）

全てのIchimonIttoData.tsxを生成後、**レンダリング前にユーザーの確認を待つ**。

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## IchimonIttoData.tsx を生成しました

ファイルを確認してください:
- [フォルダパス]/[ID1]-IchimonIttoData.tsx
- [フォルダパス]/[ID2]-IchimonIttoData.tsx
...

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

各qas.mdファイルに対してスクリプトを作成:

```bash
#!/bin/bash
set -e

# レンダリングスクリプト: [ID]-qas.md
# 生成日: [日付]

TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain"

# 音声ファイルをコピー（必要なファイルのみ）
cp [フォルダパス]/audios/[開始番号]-[トピックID].wav "$TEMP_DIR/audio/explain/"
cp [フォルダパス]/audios/[開始番号+1]-[トピックID].wav "$TEMP_DIR/audio/explain/"
# ... 必要な音声ファイルをすべて列挙

cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"

# データファイルをsrcにコピー
cp [フォルダパス]/[ID]-IchimonIttoData.tsx src/IchimonIttoData.tsx

echo "=== [ID] レンダリング開始 ==="
PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts IchimonIttoShorts \
  [フォルダパス]/[ID]-output.mp4 \
  --public-dir "$TEMP_DIR" \
  --browser-executable /workspaces/insta-short1/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell \
  --props '{"subject":"history"}' \
  --disable-chrome-sandbox

echo "=== [ID] 完了 ==="
rm -rf "$TEMP_DIR"
```

保存先: `scripts/render-[識別名].sh`

**識別名の例**: `grade2-nanban-qas`, `grade3-meiji-qas2`

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

レンダリング完了後（ユーザーがスクリプト実行完了を報告後）、各ファイルに対して紹介文を生成。

**post_youtube.txt**:
```
【タイトル】
[問題数]問全問正解できる？[単元名]｜[学年][教科]一問一答

【説明文】
全問即答できる？

[学年][教科]「[単元名]」の重要ポイントを[問題数]問でチェック！
定期テスト前の確認にぴったりです。

詰まった問題があれば→復習のチャンス
全問スラスラ答えられたら→テスト準備OK

答えは動画で確認 → 一時停止しながらでOK！

【タグ】
中学生,[学年],[教科],一問一答,定期テスト対策,テスト勉強,暗記,ショート動画,受験勉強,[単元キーワード]
```

**post_instagram.txt**:
```
全問即答できる？

[学年][教科]「[単元名]」[問題数]問

[キーワード1]、[キーワード2]、[キーワード3]…
パッと答えられる？

詰まった問題は保存して復習しよう
今のうちに覚えれば本番で自信がつく

#中学生 #[教科] #一問一答 #定期テスト対策 #勉強垢
```

※ Instagramのハッシュタグは5つ以内に制限

保存先:
- `[フォルダパス]/[ID]-post_youtube.txt`
- `[フォルダパス]/[ID]-post_instagram.txt`

---

## ステップ5: 完了報告

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 完了

### 処理したファイル: [N]件

【[ID1]】
- [ID1]-IchimonIttoData.tsx
- scripts/render-[識別名1].sh
- [ID1]-post_youtube.txt
- [ID1]-post_instagram.txt

【[ID2]】
- [ID2]-IchimonIttoData.tsx
- scripts/render-[識別名2].sh
- [ID2]-post_youtube.txt
- [ID2]-post_instagram.txt

...

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
├── qas.md                    # 元データ
├── qa.md                     # 音声作成用
├── audios/                   # 音声ファイル
│   ├── 00-[トピック].wav
│   └── ...
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
4. **--props で subject を指定** - Root.tsx を変更せずにテーマを切り替え
5. **音声ファイルは個別にcp** - ブレース展開を使わない（コピペ時の改行問題回避）
6. **PUPPETEER_HEADLESS_MODE=new を必ず設定** - ブラウザ接続タイムアウト防止
7. **chrome-headless-shell を使用** - `--browser-executable` オプションで指定
8. **IDをファイル名のプレフィックスに使用** - 例: `03-qas.md` → `03-`
9. **改行は11文字以内** - 12文字以上での改行は禁止
10. **紹介文のフォーマットは統一** - テンプレート通りに作成
