---
name: create-quiz-content
description: 一問一答クイズコンテンツを作成するためのスキル
allowed-tools: Read, Write, Edit
---

# クイズコンテンツ作成スキル

中学生向け一問一答クイズの問題を作成するスキルです。

## スキルの目的

- 学習効果の高いクイズ問題の作成
- IchimonIttoScene形式でのデータ構造化
- 音声ファイル作成のためのテキスト準備

## 問題作成ガイドライン

### 1. 問題数

- 1動画あたり5〜9問が適切
- 10問以上は複数動画に分割を推奨

### 2. 問題文の書き方

**良い例**:
```
15世紀以降、
欧米が世界進出した時代は？
```

**ポイント**:
- 2行以内に収める
- 改行で区切って読みやすく
- 「〜は？」「〜を何という？」で終わる

### 3. 答えの書き方

**良い例**:
```
大航海時代
```

**ポイント**:
- 短く簡潔に（1〜5語程度）
- カタカナ、漢字は適切に使い分け
- 括弧書きで補足可（例: `マゼラン(の船隊)`）

### 4. 補足説明（description）

**良い例**:
```
香辛料や布教を目的に海へ乗り出した。
```

**ポイント**:
- 1文で簡潔に
- 答えの理由や背景を説明
- 暗記のヒントになる情報

## データ構造

```typescript
interface IchimonIttoScene {
  id: string;           // ユニークID（例: 'q1', 'q2'）
  question: string;     // 問題文（改行可）
  answer: string;       // 答え
  description?: string; // 補足説明
  questionAudio: string;    // 質問音声パス
  questionDuration: number; // フレーム数（秒×30）
  answerAudio: string;      // 回答音声パス
  answerDuration: number;   // フレーム数
}
```

## 教科別テーマ

| 教科 | SubjectTheme | 適した問題形式 |
|-----|--------------|--------------|
| 歴史 | `history` | 年号、人物、出来事 |
| 理科 | `science` | 用語、法則、公式 |
| 英語 | `english` | 単語、文法、表現 |
| 数学 | `math` | 公式、定理、用語 |

## 音声ファイル命名規則

```
[番号]-[quiz-id].wav

00-[quiz-id].wav - Q1（問題1）
01-[quiz-id].wav - A1（答え1）
02-[quiz-id].wav - Q2（問題2）
03-[quiz-id].wav - A2（答え2）
...
```

## 出力テンプレート

### 問題リスト形式

```markdown
## クイズ: [テーマ名]

### Q1
**問題**: [問題文]
**答え**: [答え]
**補足**: [補足説明]

### Q2
...
```

### IchimonIttoData形式

```typescript
export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '[問題文]',
        answer: '[答え]',
        description: '[補足説明]',
        questionAudio: 'audio/explain/00-[quiz-id].wav',
        questionDuration: 0, // 音声ファイル準備後に設定
        answerAudio: 'audio/explain/01-[quiz-id].wav',
        answerDuration: 0,
    },
    // ...
];
```

## チェックリスト

問題作成時:
- [ ] 問題文は2行以内か？
- [ ] 答えは簡潔か？
- [ ] 補足説明は1文か？
- [ ] 中学生に適切な難易度か？

データ構造化時:
- [ ] IDはユニークか？
- [ ] 音声パスは正しいか？
- [ ] フレーム数は設定されているか？
