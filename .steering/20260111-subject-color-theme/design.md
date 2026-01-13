# 設計: 教科別カラーテーマ

## 変更対象ファイル
- `src/components/rhythm/IchimonIttoBoard.tsx`

## 変更内容

### 1. themeColors定数の更新

```typescript
export const themeColors: Record<SubjectTheme, { bg: string; accent: string; text: string }> = {
    history: { bg: '#FFF8E1', accent: '#FF9800', text: '#333' }, // 変更なし
    science: { bg: '#E8F5E9', accent: '#4CAF50', text: '#333' }, // 変更なし（緑系）
    english: { bg: '#FCE4EC', accent: '#E91E63', text: '#333' }, // ピンク系に変更
    math: { bg: '#E3F2FD', accent: '#2196F3', text: '#333' },    // 青系に変更
};
```

### 2. タイトル部分のスタイル修正

現在ハードコードされている箇所：
- 78行目: `backgroundColor: '#FF9800'` → `backgroundColor: theme.accent`
- 90行目: `color: '#FFF8E1'` → `color: theme.bg`
- 100行目: `color: '#FFF8E1'` → `color: theme.bg`

## カラー選定理由
- 英語ピンク: `#FCE4EC`（背景）、`#E91E63`（アクセント）- Material Design Pink
- 数学青: `#E3F2FD`（背景）、`#2196F3`（アクセント）- Material Design Blue
