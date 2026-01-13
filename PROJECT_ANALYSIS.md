# プロジェクト分析レポート

## 概要

Remotionを使用した**中学生向け一問一答ショート動画**生成プロジェクトです。

- **フレームワーク**: Remotion 4.0.377 + React 19 + Tailwind CSS 4.0
- **解像度**: 1080x1920 (縦型/Instagram Reels向け)
- **FPS**: 30fps
- **出力形式**: JPEG → MP4/WebM

---

## 現在アクティブなコンポーネント

### 一問一答動画システム（メイン）

| ファイル | 役割 |
|---------|------|
| `src/IchimonIttoShorts.tsx` | メイン動画コンポーネント |
| `src/IchimonIttoData.tsx` | 問題データ定義 |
| `src/components/rhythm/IchimonIttoBoard.tsx` | UI表示コンポーネント |
| `src/Root.tsx` | Composition登録 |

### データ型定義

```typescript
// 一問一答シーン型
export interface IchimonIttoScene {
  id: string;
  question: string;          // 問題文
  answer: string;            // 答え
  description?: string;      // 補足説明
  questionAudio: string;     // 質問音声パス
  questionDuration: number;  // 質問再生時間（フレーム）
  answerAudio: string;       // 回答音声パス
  answerDuration: number;    // 回答再生時間（フレーム）
}

// 教科テーマ
export type SubjectTheme = 'history' | 'science' | 'english' | 'math';
```

---

## ディレクトリ構造

### src/ - ソースコード

```
src/
├── index.ts                 # エントリーポイント
├── Root.tsx                 # Composition登録
├── style.css, index.css     # スタイルシート
│
├── IchimonIttoShorts.tsx    # 一問一答動画【現在使用中】
├── IchimonIttoData.tsx      # 一問一答データ【現在使用中】
│
├── MathShorts.tsx           # 数学動画（非アクティブ）
├── EnglishShorts.tsx        # 英語動画（非アクティブ）
├── CommonShorts.tsx         # 理科・社会動画（非アクティブ）
├── TriviaVideo.tsx          # トリビア動画（非アクティブ）
│
├── components/
│   ├── rhythm/
│   │   └── IchimonIttoBoard.tsx  # 一問一答UI【重要】
│   ├── english/                   # 英語用コンポーネント
│   ├── common/                    # 理科・社会用コンポーネント
│   └── animations/                # アニメーション
│
├── types/                   # 型定義
├── utils/                   # ユーティリティ
└── scenarios/               # シナリオファイル
```

### datas/ - 教材データ

```
datas/
├── english/
│   ├── grade1/              # 中1英語（unit_01〜10）
│   ├── grade2/              # 中2英語（unit_01〜07, lr_03）
│   ├── grade3/              # 中3英語（unit_01〜06, lr_03）
│   └── images/              # 英語用画像
│
├── history/
│   ├── 4-1/                 # 中3世界史前期（ヨーロッパの変化・拡大）
│   ├── 5-1/                 # 中3世界史後期（啓蒙〜産業革命）
│   ├── 5-2/                 # 中3日本史（開国〜幕末）
│   ├── 5-3/                 # 中3日本史（明治維新）
│   └── 5-4/                 # 中3日本史（条約改正〜文化）
│
├── science/
│   ├── grade2/electrocity/  # 中2理科・電気
│   └── grade3/ion/          # 中3理科・イオン
│
├── 2nd_english/             # 中2英語（比較級）
└── 2nd_math/                # 中2数学（二等辺三角形、平行四辺形）
```

### public/ - 静的リソース

```
public/
├── audio/
│   ├── bgm.mp3              # BGM
│   └── explain/             # 一問一答音声ファイル
└── images/                  # 背景画像等
```

---

## 動画生成フロー

```
1. データ読み込み（IchimonIttoData.tsx）
   └─ 問題・回答・音声パスを配列で定義

2. Question Phase（各問題）
   ├─ 質問音声再生
   ├─ 問題文表示
   └─ 45フレーム（1.5秒）のカウントダウン

3. Answer Phase（各問題）
   ├─ 回答音声再生
   ├─ 答えと説明表示
   └─ 次の問題へ

4. 終了カード表示
```

---

## 教科別テーマカラー

| 教科 | 背景色 | アクセント色 |
|-----|--------|-------------|
| 歴史 | #FFF8E1（クリーム） | #FF9800（オレンジ） |
| 理科 | #E8F5E9（薄緑） | #4CAF50（緑） |
| 英語 | #E3F2FD（薄青） | #2196F3（青） |
| 数学 | #F3E5F5（薄紫） | #9C27B0（紫） |

---

## コマンド

```bash
# 開発サーバー起動
npm run dev

# プレビュー
npx remotion studio

# 動画出力
npx remotion render src/index.ts IchimonIttoShorts out/video.mp4
```

---

## 非アクティブだが保持されているコンポーネント

以下は現在Root.tsxでコメントアウトされていますが、将来使用可能です：

- **EnglishShorts** - 英語レッスン動画
- **MathShorts** - 数学問題動画
- **CommonShorts** - 理科・社会統合動画
- **TriviaVideo** - トリビア形式動画
