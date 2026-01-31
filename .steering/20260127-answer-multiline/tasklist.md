# タスクリスト: 回答の複数行対応

## タスク

- [x] IchimonIttoBoard.tsxのAnswer Sectionを修正
  - answerに`\n`が含まれる場合を検出
  - 複数行の場合は文字サイズを85px → 68px（約20%縮小）に変更
  - `whiteSpace: 'pre-wrap'`で改行を有効化
- [x] Lintチェック
- [ ] 動作確認（ユーザー確認待ち）

## 完了条件

- `\n`を含む回答が改行表示される
- 文字サイズが約20%小さくなる
- 枠内にキレイに収まる

## 振り返り

- 変更箇所: `src/components/rhythm/IchimonIttoBoard.tsx` 183-191行
- 実装内容:
  - `answer.includes('\n')` で改行の有無を判定
  - 改行あり: 68px、なし: 85px（約20%縮小）
  - `whiteSpace: 'pre-wrap'` を追加して改行を有効化
