# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

中学生向け一問一答ショート動画を生成するRemotionプロジェクト。縦型動画（1080x1920、Instagram Reels向け）を出力する。

## 技術スタック

- 開発環境: devcontainer
- Node.js v24.x
- TypeScript 5.x
- パッケージマネージャー: npm
- フレームワーク: Remotion 4.0.x + React 19 + Tailwind CSS 4.0

## Commands

```bash
# 開発サーバー（Remotion Studio）起動
npm run dev

# 動画をレンダリング
npx remotion render src/index.ts IchimonIttoShorts out/video.mp4

# Lint（ESLint + TypeScript型チェック）
npm run lint

# Remotionアップグレード
npm run upgrade
```

## スラッシュコマンド

### Quiz用（q-）

| コマンド | 説明 |
|---------|------|
| `/q-make-quiz [quizフォルダ]` | クイズ動画作成ワークフロー（全体ガイド） |
| `/q-review [quizフォルダ]` | qas.mdの問題チェック・レビュー |
| `/q-prepare [quizフォルダ]` | qa.md生成、音声ファイルリスト作成 |
| `/q-render [quizフォルダ]` | 動画レンダリング、紹介文生成 |

### Story用（s-）

| コマンド | 説明 |
|---------|------|
| `/s-research-theme [テーマ]` | テーマを中学生向けにリサーチ（脚本作成の事前準備） |
| `/s-review-story [storyフォルダ]` | 脚本を添削し改善案を出す |
| `/s-make-prompts [storyフォルダ]` | 脚本から画像生成用プロンプトを作成 |

### 共通

| コマンド | 説明 |
|---------|------|
| `/add-feature [機能名]` | 新機能を追加（ステアリングファイル作成→実装→検証） |

**使用例**:
```bash
# クイズ動画作成
/q-prepare datas/history/grade2/4-1/3nanban_trade/quiz
# → 音声ファイルを配置
/q-render datas/history/grade2/4-1/3nanban_trade/quiz

# ストーリー作成
/s-research-theme 桶狭間の戦い
/s-review-story datas/history/grade2/4-1/4nobunaga_hideyoshi/story/6_honnoji
/s-make-prompts datas/history/grade2/4-1/4nobunaga_hideyoshi/story/story1
```

## スキル

| スキル | 説明 |
|-------|------|
| `steering` | 作業計画・タスクリスト管理・進捗追跡 |
| `create-quiz-content` | 一問一答クイズコンテンツ作成 |

---

## ドキュメント管理の原則

### 永続的ドキュメント（`docs/`）

プロジェクト全体の「何を作るか」「どう作るか」を定義:

- 基本設計を記述
- 頻繁に更新されない
- プロジェクト全体の「北極星」

### 作業単位のドキュメント（`.steering/`）

特定の開発作業における「今回何をするか」を定義:

- `requirements.md`: 今回の作業の要求内容
- `design.md`: 変更内容の設計
- `tasklist.md`: タスクリスト（進捗管理）

**命名規則**: `.steering/[YYYYMMDD]-[タスク名]/`

例: `.steering/20250106-add-new-quiz/`

---

## 開発フロー

### 基本フロー

1. **ドキュメント作成**: 永続ドキュメント(`docs/`)で「何を作るか」を定義
2. **作業計画**: ステアリングファイル(`.steering/`)で「今回何をするか」を計画
3. **実装**: tasklist.mdに従って実装し、進捗を随時更新
4. **検証**: プレビューと動作確認
5. **更新**: 必要に応じてドキュメント更新

### 実装前の確認ルール

新しい実装を始める前に、必ず以下を確認:

1. **CLAUDE.mdを読む** - このファイルでプロジェクト概要を把握
2. **関連ドキュメントを読む** - `docs/`内の設計ドキュメント
3. **既存実装を検索** - Grepで類似パターンを探す
4. **既存パターンを理解してから実装開始**

---

## ディレクトリ構造

### ソースコード

- `src/` - Remotionコンポーネント
- `public/audio/` - 音声ファイル（BGM、問題音声）
- `public/images/` - 画像リソース

### ドキュメント

- `docs/` - 永続的ドキュメント（プロジェクト全体の設計）
- `.steering/` - 作業単位のドキュメント（特定タスクの計画・進捗）
- `.claude/` - Claude Code設定（コマンド、スキル）

### データ保管

- `datas/` - 教材データ保管（学年/教科/章/トピックで整理）
  - 各トピックフォルダ内は `quiz/`（一問一答）と `story/`（脚本・画像）で分離

---

## Architecture

### 動画生成フロー

```
Root.tsx (Composition登録)
  └─ IchimonIttoShortsVideo (メインコンポーネント)
       ├─ Series で順序制御
       │   ├─ QuestionPhase (質問表示 + 音声 + カウントダウン)
       │   └─ AnswerPhase (回答表示 + 音声 + 終了カード)
       └─ BGM (ループ再生)
```

### 主要コンポーネント

| ファイル | 役割 |
|---------|------|
| `src/Root.tsx` | Composition登録。教科切り替えはここでコメントアウト |
| `src/IchimonIttoShorts.tsx` | 一問一答動画のメインロジック |
| `src/IchimonIttoData.tsx` | 問題データ（IchimonIttoScene型） |
| `src/components/rhythm/IchimonIttoBoard.tsx` | UI表示（テーマカラー、レイアウト） |

### データ型

```typescript
// 一問一答シーン
interface IchimonIttoScene {
  id: string;
  question: string;           // 問題文
  answer: string;             // 答え
  description?: string;       // 補足説明
  questionAudio: string;      // 質問音声パス（public/からの相対）
  questionDuration: number;   // 質問再生時間（フレーム、30fps）
  answerAudio: string;        // 回答音声パス
  answerDuration: number;     // 回答再生時間（フレーム）
}

// 教科テーマ
type SubjectTheme = 'history' | 'science' | 'english' | 'math';
```

### 教科別テーマカラー（themeColors）

- history: クリーム背景 + オレンジアクセント
- science: 薄緑背景 + 緑アクセント
- english: 薄青背景 + 青アクセント
- math: 薄紫背景 + 紫アクセント

### タイミング定数（IchimonIttoShorts.tsx内）

- `COUNTDOWN_DURATION`: 45フレーム（1.5秒）- 質問後の考える時間
- `ANSWER_BUFFER`: 45フレーム（1.5秒）- 回答後の間
- `END_CARD_DURATION`: 90フレーム（3秒）- 終了カード表示

### 非アクティブなComposition（Root.tsxでコメントアウト済み）

- MathShorts - 数学動画
- EnglishShorts - 英語動画
- CommonShorts - 理科・社会動画
- Trivia系 - トリビア形式動画

---

## クイズ動画作成ワークフロー

### データフォルダ構造

```
datas/[教科]/[学年]/[章]/[番号][トピック名]/
├── quiz/                   # 一問一答関連
│   ├── qas.md              # 問題・答え・補足（元データ）
│   ├── qa.md               # 問題・答えのみ（音声作成用）
│   ├── audios/             # 音声ファイル
│   │   ├── 00-[トピック].wav  # Q1
│   │   ├── 01-[トピック].wav  # A1
│   │   └── ...
│   ├── IchimonIttoData.tsx # 保存用データ
│   ├── output.mp4          # 出力動画
│   ├── post_youtube.txt    # YouTube用紹介文
│   └── post_instagram.txt  # Instagram用紹介文
└── story/                  # 脚本・画像（解説動画用）
    ├── script.md           # 脚本
    └── images/             # 画像素材
```

### qas.md の形式

```
問題1
答え1
補足1

問題2
答え2
補足2
```

### 作成フロー

```bash
# 1. 問題チェック（任意）
/q-review datas/history/grade2/4-1/3nanban_trade/quiz

# 2. 音声準備
/q-prepare datas/history/grade2/4-1/3nanban_trade/quiz
# → qa.md生成、音声ファイルリスト表示
# → 音声ファイルを audios/ に配置

# 3. レンダリング
/q-render datas/history/grade2/4-1/3nanban_trade/quiz
# → IchimonIttoData.tsx生成、動画レンダリング、紹介文生成
```

**各コマンドの詳細は `/q-make-quiz` で確認できます。**

### ファイル構造（複数qas.mdの場合）

```
[フォルダ]/
├── 03-qas.md, 03-qa.md, 03-output.mp4, 03-post_*.txt
├── 04-qas.md, 04-qa.md, 04-output.mp4, 04-post_*.txt
└── audios/
    ├── 03/  # 03-qas.md用の音声
    └── 04/  # 04-qas.md用の音声
```
