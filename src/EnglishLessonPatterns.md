# EnglishLessonData.tsx 作成ガイド

このドキュメントでは、`EnglishLessonData.tsx` を作成するためのデータ構造、各パターンの配置、および必要なプロパティについて説明します。

## データ構造 (Scene型)

各シーンは `Scene` 型のオブジェクトとして定義され、`englishLessonData` 配列に追加されます。

```typescript
interface Scene {
    id: string;             // シーンの一意なID (例: 'pattern-01')
    durationInFrames: number; // シーンの長さ (フレーム数, 30fps基準)
    audioSrc: string;       // 音声ファイルのパス (staticFileを使用)
    boardContent: () => React.ReactNode; // EnglishLessonBoardコンポーネントを返す関数
    pauseAfter?: number;    // シーン後のポーズ時間 (フレーム数)
}
```

## EnglishLessonBoard 共通プロパティ

すべてのパターンで共通して使用できるプロパティです。

| プロパティ名 | 型 | 説明 | 必須 |
| :--- | :--- | :--- | :--- |
| `layout` | string | レイアウトの種類を指定 (後述のパターン参照) | **必須** |
| `speechBubble` | string | 画面下部の吹き出しテキスト | 推奨 |
| `imageSrc` | string | メイン画像のパス (一部レイアウトで使用) | 任意 |

---

## レイアウト使い分けガイド

基本的には **`standard`** レイアウトを使用してください。
その他のレイアウトは、特定の情報を強調したい場合や、視覚的な比較が必要な場合に使用します。

| レイアウト | 推奨される使用シーン |
| :--- | :--- |
| **`standard`** | **原則としてこれを使用します。**<br>・通常の例文表示<br>・穴埋め問題<br>・シンプルな解説テキスト |
| **`horizontal-split`** | **左右の対比**を見せたい場合。<br>・「変化前」と「変化後」 (例: tall → taller)<br>・「肯定文」と「否定文」の比較<br>・2つの異なる概念の対比 |
| **`vertical-split`** | **上下の対比**や、**ルールと具体例**をセットで見せたい場合。<br>・上段に「文法ルール」、下段に「その例文」<br>・上段に「NG例」、下段に「OK例」 |
| **`vertical-list`** | **複数のポイント**を整理して見せたい場合。<br>・「ポイント3つ」のまとめ<br>・単語のリスト表示 (例: 長い単語の例)<br>・手順のステップ表示 |
| **`quiz-choices`** | **選択式のクイズ**を出題する場合。<br>・3択または4択問題 |
| **`table`** | **多数のデータ**を規則的に見せたい場合。<br>・動詞の活用表 (原形-過去形-過去分詞形)<br>・比較級・最上級の変化表 |
| **`dialogue`** | **会話の流れ**を見せたい場合。<br>・AさんとBさんの対話形式 |

---

## レイアウトパターン一覧

### 1. Basic Fill-in (Standard)
基本的な穴埋め問題や例文表示に使用します。

*   **Layout ID**: `standard`
*   **用途**: 例文、穴埋め問題、シンプルなテキスト表示
*   **必須プロパティ**:
    *   `japaneseText` (日本語訳) または `textLines`
    *   `englishText` (英文) または `textLines`
*   **オプション**:
    *   `imageSrc`: イラストを表示する場合
    *   `themeText`: 「問題！」などのタイトルボックスを表示する場合 (textLinesと併用推奨)
    *   `textLines`: 複数行のテキストを表示する場合 (`{ text: string, isEnglish: boolean }[]`)

**使用例 (基本):**
```tsx
<EnglishLessonBoard
    layout="standard"
    imageSrc={staticFile('images/quiz_intro.png')}
    japaneseText="このバッグはあのバッグより古いです。"
    englishText={<>This bag is (　) than that bag.</>}
    speechBubble="解けるかな？"
/>
```

**使用例 (タイトル + 複数行):**
```tsx
<EnglishLessonBoard
    layout="standard"
    themeText={<>問題！<br />interesting + er？</>}
    textLines={[
        { text: "このバッグはあのバッグより古いです。", isEnglish: false },
        { text: "This bag is (　) than that bag.", isEnglish: true },
    ]}
    speechBubble="基本の形だよ"
/>
```

### 2. Before/After (Horizontal Split)
変化前と変化後を左右に並べて比較する場合に使用します。

*   **Layout ID**: `horizontal-split`
*   **用途**: 原級と比較級の対比など
*   **必須プロパティ**:
    *   `leftContent`: 左側のコンテンツ (ReactNode)
    *   `rightContent`: 右側のコンテンツ (ReactNode)
*   **オプション**:
    *   `leftImageSrc`: 左側の画像
    *   `rightImageSrc`: 右側の画像
    *   `centerSymbol`: 中央の記号 (デフォルトは `⇔`)

**使用例:**
```tsx
<EnglishLessonBoard
    layout="horizontal-split"
    leftImageSrc={staticFile('images/before.png')}
    rightImageSrc={staticFile('images/after.png')}
    leftContent={<><LessonLabel>元の形</LessonLabel><LessonText>tall</LessonText></>}
    rightContent={<><LessonLabel>比較級</LessonLabel><LessonText>taller</LessonText></>}
    speechBubble="形が変わるよ"
/>
```

### 3. Fill-in + Choices (Quiz Choices)
穴埋め問題と選択肢を表示する場合に使用します。

*   **Layout ID**: `quiz-choices`
*   **用途**: 3〜4択のクイズ
*   **必須プロパティ**:
    *   `japaneseText`: 日本語訳
    *   `englishText`: 英文 (穴埋め部分は `( )` など)
    *   `choices`: 選択肢の配列 (`string[]`)
*   **オプション**:
    *   `imageSrc`: イラスト

**使用例:**
```tsx
<EnglishLessonBoard
    layout="quiz-choices"
    imageSrc={staticFile('images/quiz.png')}
    japaneseText="彼はサッカーをします。"
    englishText={<>He (　　　 ) soccer.</>}
    choices={['play', 'plays', 'playing']}
    speechBubble="どれかな？"
/>
```

### 4. 3 Points (Vertical List)
箇条書きでポイントをまとめる場合に使用します。

*   **Layout ID**: `vertical-list`
*   **用途**: 文法ルールのまとめ、ポイント解説
*   **必須プロパティ**:
    *   `items`: 箇条書き項目の配列 (`string[]` または `ReactNode[]`)
*   **オプション**:
    *   `mainTitle`: リストの上のタイトル (例: "まとめ")

**使用例:**
```tsx
<EnglishLessonBoard
    layout="vertical-list"
    mainTitle="まとめ"
    items={[
        '① “He” のとき動詞に s',
        '② play → plays',
        '③ 否定・疑問は do/does に注意'
    ]}
    speechBubble="ポイントは3つ！"
/>
```

### 5. 2 Split Top/Bottom (Vertical Split)
上下に分割して情報を表示する場合に使用します。

*   **Layout ID**: `vertical-split`
*   **用途**: ルールと例文の対比、上段画像・下段テキストなど
*   **必須プロパティ**:
    *   `topContent`: 上段のコンテンツ
    *   `bottomContent`: 下段のコンテンツ
*   **オプション**:
    *   `topImageSrc`: 上段の画像
    *   `bottomImageSrc`: 下段の画像

**使用例:**
```tsx
<EnglishLessonBoard
    layout="vertical-split"
    topContent={<LessonText>比較級は “〜er＋than”</LessonText>}
    bottomContent={<LessonText>This is bigger than that.</LessonText>}
    speechBubble="ルールと例文"
/>
```

### 6. Table (Table)
表形式でデータを表示する場合に使用します。

*   **Layout ID**: `table`
*   **用途**: 活用表、単語リスト
*   **必須プロパティ**:
    *   `tableData`: 文字列の2次元配列 (`string[][]`)。1行目はヘッダーとして扱われます。

**使用例:**
```tsx
<EnglishLessonBoard
    layout="table"
    tableData={[
        ['原級', '比較級', '最上級'],
        ['old', 'older', 'oldest'],
        ['big', 'bigger', 'biggest'],
    ]}
    speechBubble="変化を表で整理"
/>
```

### 7. Timeline (Timeline)
時系列や手順を表示する場合に使用します (現在未使用ですが利用可能)。

*   **Layout ID**: `timeline`
*   **必須プロパティ**:
    *   `timelineEvents`: イベントの配列 (`{ label: string, text: string }[]`)

### 8. 2-Panel Story (Dialogue)
会話形式でストーリーを表示する場合に使用します。

*   **Layout ID**: `dialogue`
*   **用途**: 会話文、対話形式の例
*   **必須プロパティ**:
    *   `dialogueLines`: 会話行の配列
        *   `speaker`: 話者名 (A, Bなど)
        *   `text`: セリフ
        *   `side`: 表示位置 ('left' | 'right')
        *   `iconSrc`: アイコン画像のパス (staticFile使用)

**使用例:**
```tsx
<EnglishLessonBoard
    layout="dialogue"
    dialogueLines={[
        { speaker: 'A', text: 'I lost my bag.', side: 'left', iconSrc: staticFile('images/student.png') },
        { speaker: 'B', text: "I'll help you.", side: 'right', iconSrc: staticFile('images/teacher.png') },
    ]}
    speechBubble="会話の流れ"
/>
```

### 9. Symmetrical (Symmetrical)
左右対称にテキストを配置します (Horizontal Splitと類似)。

*   **Layout ID**: `symmetrical`
*   **必須プロパティ**:
    *   `leftContent` または `englishText`
    *   `rightContent` または `japaneseText`
*   **オプション**:
    *   `centerSymbol`: 中央の記号

