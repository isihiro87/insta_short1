# タスクリスト: 教科別カラーテーマ

## タスク

- [x] themeColorsの更新（math: 青系、english: ピンク系）
- [x] タイトル背景色をテーマから取得するよう修正
- [x] タイトル文字色をテーマから取得するよう修正
- [x] Lintチェック
- [x] 動作確認

## 振り返り

### 完了した変更
1. `themeColors`の更新
   - math: 紫系→青系（`#E3F2FD`, `#2196F3`）
   - english: 青系→ピンク系（`#FCE4EC`, `#E91E63`）
   - history, science: 変更なし

2. タイトル部分のハードコード解消
   - 背景色: `#FF9800` → `theme.accent`
   - 文字色: `#FFF8E1` → `theme.bg`

### 変更ファイル
- `src/components/rhythm/IchimonIttoBoard.tsx`

### 備考
- 既存のLintエラー（132件）は今回の変更に起因するものではない
- 今後、他のコンポーネントでも同様のテーマ対応が必要な場合はthemeColorsをインポートして使用可能
