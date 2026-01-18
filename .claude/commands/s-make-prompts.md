---
description: 脚本から画像作成用のプロンプトを生成する
---

# 画像プロンプト作成

脚本（kyakuhon.txt）から各背景画像のプロンプトを生成し、prompts/フォルダに保存します。

## 引数

- `$ARGUMENTS`: storyフォルダパス（例: `datas/history/grade2/4-1/4nobunaga_hideyoshi/story/story1`）

---

## フェーズ1: 脚本の読み込み

### 1.1 ファイルの確認

```bash
ls -la [フォルダパス]/kyakuhon.txt
```

### 1.2 脚本の読み込み

kyakuhon.txtを読み込み、以下を抽出:
- 各行のナレーション/説明文
- 背景画像名（「背景画像：[画像名]」の形式）

### 1.3 ユニークな背景画像の一覧

重複を除いた背景画像名をリストアップ:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
検出された背景画像:

1. [画像名1] - [関連する行の内容要約]
2. [画像名2] - [関連する行の内容要約]
...

合計: [N]枚
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## フェーズ2: ナレーション・説明文の分離

### 2.1 nar.txtの生成

`N1：`、`N2:`などで始まる行から、番号部分を除いた読み上げテキストのみを抽出:

```
# 入力例
N1：織田信長が尾張の小さな戦国大名だったころ
N2:序盤は当然苦戦したが、今川軍の油断と激しい雨が降った隙を逃さず、

# 出力（nar.txt）
織田信長が尾張の小さな戦国大名だったころ
序盤は当然苦戦したが、今川軍の油断と激しい雨が降った隙を逃さず、
```

**ルール**:
- `N数字：` または `N数字:` で始まる行を対象
- 番号部分（N1：、N2:など）を除去
- 読み上げ文のみを抽出（空行なしで改行区切り）

### 2.2 expl.txtの生成

`Nnumber:` で始まらない行のみを抽出:

```
# 入力例
約2万5千の大軍を率いる今川義元に対し
信長の兵は3千〜5千人ほどしかいなかった。

# 出力（expl.txt）
約2万5千の大軍を率いる今川義元に対し
信長の兵は3千〜5千人ほどしかいなかった。
```

**ルール**:
- `N数字：` または `N数字:` で始まらない行を対象
- 空行は除外
- 読み上げ文のみを抽出（空行なしで改行区切り）

### 2.3 ファイル保存

`nar.txt` と `expl.txt` を kyakuhon.txt と同じフォルダに保存。

---

## フェーズ3: スタイル選択

### 3.1 内容からスタイルを推奨

脚本の内容を分析し、以下の基準で推奨スタイルを判定:

| 内容の特徴 | 推奨スタイル | 理由 |
|-----------|-------------|------|
| 戦国時代・合戦シーン | 劇画風 or 浮世絵風 | 迫力と時代感を表現 |
| 江戸時代・文化系 | 浮世絵風アニメ | 時代の雰囲気に最適 |
| 平安〜鎌倉時代・貴族文化 | 絵巻物風 | 当時の絵画様式を再現 |
| 古代〜中世・神話系 | 水墨画風 | 幽玄な雰囲気 |
| 西洋史・ルネサンス〜近代 | 油絵風 | 西洋絵画の重厚さ |
| 近現代史・社会系 | デジタルアート風 | モダンで分かりやすい |
| 日常・学習系・穏やかな内容 | やわらか水彩アニメ | 親しみやすい表現 |
| 偉人伝・ドラマチックな人物紹介 | 劇画風 or 浮世絵風 | 人物の魅力を強調 |
| ノスタルジック・感動系 | セル画アニメ風 | 90年代アニメの温かみ |

### 3.2 スタイルパターンの提示（推奨付き）

分析結果に基づいて推奨を表示し、選択してもらう:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 画像スタイルを選択してください

内容: [脚本の概要を1行で要約]
推奨: 【[推奨番号]】[推奨スタイル名] - [推奨理由]

同じ動画内では統一されたスタイルを使用します。

【1】浮世絵風アニメ
Japanese anime style, high-quality digital illustration, bold ink outlines like Ukiyo-e, vibrant colors, dramatic lighting, cinematic composition, 9:16 aspect ratio.

【2】水墨画風
Japanese ink wash painting style (sumi-e), minimalist brush strokes, black and gray tones with subtle color accents, ethereal atmosphere, traditional aesthetic, 9:16 aspect ratio.

【3】やわらか水彩アニメ
Soft watercolor anime style, gentle pastel backgrounds, warm natural lighting, detailed hand-drawn look, gentle color palette, nostalgic atmosphere, 9:16 aspect ratio.

【4】劇画風
Gekiga manga style, high contrast black and white with bold colors, intense dramatic shadows, gritty realistic proportions, dynamic action poses, 9:16 aspect ratio.

【5】デジタルアート風
Modern digital art style, clean vector-like illustration, bold flat colors, minimalist design, stylized characters, contemporary Japanese aesthetic, 9:16 aspect ratio.

【6】絵巻物風
Traditional Japanese emakimono scroll painting style, flat perspective with no vanishing point, gold leaf accents, delicate line work, Heian period aesthetic, narrative composition flowing left to right, 9:16 aspect ratio.

【7】油絵風（西洋絵画）
Classical Western oil painting style, rich textured brushstrokes, chiaroscuro lighting, Renaissance or Baroque influence, realistic proportions, dramatic atmosphere, museum quality artwork, 9:16 aspect ratio.

【8】セル画アニメ風（90年代）
1990s Japanese cel animation style, hand-painted backgrounds, soft airbrushed shading, nostalgic color palette, detailed character designs, cinematic framing like classic anime films, 9:16 aspect ratio.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**AskUserQuestionの選択肢では、推奨スタイルを最初に配置し「(推奨)」を付ける。**

### 3.3 スタイルの確定

選択されたスタイルを記録。

---

## フェーズ4: プロンプト生成

### 4.1 promptsフォルダの作成

```bash
mkdir -p [フォルダパス]/prompts
```

### 4.2 各背景画像のプロンプト生成

**重要なルール**:
- 1行目: 選択されたスタイル（全ファイル共通）
- 2行目: シーンの具体的な説明（英語）
- 3行目: 区切り線「---」
- 4行目: 日本語訳（確認・修正用）
- ファイル名: 連番.txt（1.txt, 2.txt, ...）

**シーン説明の生成ガイドライン**:
1. 脚本の該当行から視覚的要素を抽出
2. 歴史的な正確性を保つ（時代、衣装、道具など）
3. 画像生成AIに適した英語で記述
4. 具体的な構図、キャラクター、背景を含める
5. 動画の縦型フォーマット（9:16）を意識
6. **文字・テキストを含めない** - セリフ、看板、タイトル等の文字要素は一切入れない（`no text, no letters, no words, no speech bubbles`を末尾に追加）

**プロンプト構造**:
```
[スタイル行]
[シーン説明（英語）]: [主要な被写体], [具体的な描写], [背景・環境], [雰囲気・ライティング]. No text, no letters, no words, no speech bubbles.
---
[日本語訳]: [上記英語プロンプトの日本語訳]
```

### 4.3 ファイルへの保存

各プロンプトを個別のファイルとして保存:
- `[フォルダパス]/prompts/1.txt`
- `[フォルダパス]/prompts/2.txt`
- ...

---

## フェーズ5: 確認とプレビュー

### 5.1 生成されたプロンプトの一覧

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 生成完了

スタイル: [選択されたスタイル名]
ファイル数: [N]枚

【1.txt】[画像名]
→ [シーン説明の要約]

【2.txt】[画像名]
→ [シーン説明の要約]

...

保存先: [フォルダパス]/prompts/
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### 5.2 修正の確認

```
修正が必要なプロンプトはありますか？
→ 番号を入力（複数可: 1,3,5）、または「完了」と入力
```

修正が必要な場合は、該当ファイルを再生成。

---

## フェーズ6: 完了報告

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 完了

保存先: [フォルダパス]/prompts/
ファイル数: [N]枚
スタイル: [スタイル名]

### 次のステップ
1. 各プロンプトを画像生成AIにコピー
2. 生成された画像を images/ フォルダに保存
3. 画像ファイル名を脚本の背景画像名に合わせる
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 出力ファイル構造

```
[フォルダパス]/
├── kyakuhon.txt          # 脚本（入力）
├── nar.txt               # ナレーション行のみ（N番号なし）
├── expl.txt              # 説明行のみ
├── prompts/              # プロンプト（出力）
│   ├── 1.txt
│   ├── 2.txt
│   └── ...
└── images/               # 画像（後で配置）
```

---

## スタイル定義一覧

| ID | 名前 | スタイル文 |
|----|------|-----------|
| 1 | 浮世絵風アニメ | Japanese anime style, high-quality digital illustration, bold ink outlines like Ukiyo-e, vibrant colors, dramatic lighting, cinematic composition, 9:16 aspect ratio. |
| 2 | 水墨画風 | Japanese ink wash painting style (sumi-e), minimalist brush strokes, black and gray tones with subtle color accents, ethereal atmosphere, traditional aesthetic, 9:16 aspect ratio. |
| 3 | やわらか水彩アニメ | Soft watercolor anime style, gentle pastel backgrounds, warm natural lighting, detailed hand-drawn look, gentle color palette, nostalgic atmosphere, 9:16 aspect ratio. |
| 4 | 劇画風 | Gekiga manga style, high contrast black and white with bold colors, intense dramatic shadows, gritty realistic proportions, dynamic action poses, 9:16 aspect ratio. |
| 5 | デジタルアート風 | Modern digital art style, clean vector-like illustration, bold flat colors, minimalist design, stylized characters, contemporary Japanese aesthetic, 9:16 aspect ratio. |
| 6 | 絵巻物風 | Traditional Japanese emakimono scroll painting style, flat perspective with no vanishing point, gold leaf accents, delicate line work, Heian period aesthetic, narrative composition flowing left to right, 9:16 aspect ratio. |
| 7 | 油絵風（西洋絵画） | Classical Western oil painting style, rich textured brushstrokes, chiaroscuro lighting, Renaissance or Baroque influence, realistic proportions, dramatic atmosphere, museum quality artwork, 9:16 aspect ratio. |
| 8 | セル画アニメ風（90年代） | 1990s Japanese cel animation style, hand-painted backgrounds, soft airbrushed shading, nostalgic color palette, detailed character designs, cinematic framing like classic anime films, 9:16 aspect ratio. |

※ 新しいスタイルを追加する場合は、このテーブルに追記してください。

---

## 重要なルール

1. **スタイルは動画内で統一** - 同じ動画の全画像に同じスタイルを適用
2. **シーン説明は具体的に** - 曖昧な表現を避け、視覚的に明確な指示
3. **歴史的正確性** - 時代考証を意識した描写
4. **英語で記述** - 画像生成AIの精度向上のため
5. **縦型構図を意識** - 9:16のアスペクト比に適した配置
6. **最低5枚以上生成** - 脚本の内容を細かくシーン分けし、最低でも5枚以上のプロンプトを生成する。短い脚本でも適切にシーンを分割して視覚的に多様な画像を用意する
