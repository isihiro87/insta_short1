---
name: steering
description: 作業計画、タスクリスト管理、進捗追跡のためのスキル
allowed-tools: Read, Write, Edit
---

# Steering スキル

ステアリングファイル（`.steering/`）に基づいた作業管理を支援するスキルです。

## スキルの目的

- ステアリングファイル（requirements.md, design.md, tasklist.md）の作成支援
- tasklist.mdに基づいた段階的な実装管理
- 進捗の追跡とtasklist.md更新
- 実装完了後の振り返り記録

## 使用タイミング

1. **作業計画時**: ステアリングファイルを作成する時
2. **実装時**: tasklist.mdに従って実装する時
3. **検証時**: 実装完了後の振り返りを記録する時

---

## モード1: ステアリングファイル作成

### 目的
新しい機能や変更のためのステアリングファイルを作成します。

### 手順

1. **ステアリングディレクトリの作成**
   ```
   .steering/[YYYYMMDD]-[機能名]/
   ```

2. **テンプレートからファイル作成**
   - `.claude/skills/steering/templates/requirements.md` → requirements.md
   - `.claude/skills/steering/templates/design.md` → design.md
   - `.claude/skills/steering/templates/tasklist.md` → tasklist.md

3. **tasklist.mdの詳細化**
   - 各タスクを具体的に記述
   - サブタスクも明確に
   - 実装の順序を明記

---

## モード2: 実装

### 重要な原則

**MUST（必須）**:
- tasklist.mdを常に参照しながら実装
- タスク完了時にEditツールで`[ ]`→`[x]`に更新
- 全タスクが完了するまで作業を継続

**NEVER（禁止）**:
- tasklist.mdを見ずに実装を進める
- 複数タスクをまとめて更新する
- 未完了タスクを残したまま作業を終了する

### 実装フロー

1. **tasklist.mdを読み込む**
2. **次の未完了タスク（`[ ]`）を特定**
3. **タスクを実装**
4. **完了したタスクを`[x]`に更新**
5. **次のタスクへ（全完了まで繰り返し）**

---

## モード3: 振り返り

### 目的
実装完了後、tasklist.mdに振り返りを記録します。

### 記録内容

- 実装完了日
- 計画と実績の差分
- 学んだこと
- 次回への改善提案

---

## チェックリスト

実装前:
- [ ] tasklist.mdを読み込んだか？
- [ ] 次のタスクを特定したか？

実装後:
- [ ] タスク完了時にEditツールで更新したか？
- [ ] tasklist.mdの進捗を確認したか？
