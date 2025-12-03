---
description: slide_contentからEnglishLessonData.tsxを作成・更新する
---

# English Lesson Data Creation Workflow

slide_content markdownファイルから `EnglishLessonData.tsx` を作成するフローです。

## 手順

1.  **Pythonスクリプトによるベース作成**
    `convert_slide_to_data.py` を実行して、マークダウンから基本的なTSXファイルを生成します。
    
    ```bash
    # 例: slide_content3.md から EnglishLessonData.tsx を作成
    # --input_file: 入力ファイルパス
    # --output_dir: 出力先ディレクトリ (src)
    # --topic: レッスンのトピック名
    # --output_file: 出力ファイル名 (EnglishLessonData.tsx)
    
    python convert_slide_to_data.py --input_file datas/english/grade2/unit_06/01_比較級・最上級/slide_content3.md --output_dir src --topic "比較級・最上級" --output_file EnglishLessonData.tsx
    ```

2.  **AIによる内容の洗練 (Refinement)**
    生成された `EnglishLessonData.tsx` をAIが確認し、以下の点を修正します。
    
    *   **数式の整形**: `FormulaContainer` が正しく使われているか確認し、必要なら修正します。
    *   **強調表示**: `RedText` や `CrossedText` などのスタイルが正しく適用されているか確認します。
    *   **クイズ形式**: `QuizBoard` の `japaneseText`, `englishText` が適切か確認します。
    *   **画像パス**: `imageSrc` が適切なプレースホルダーまたは実際の画像パスになっているか確認します。
    *   **音声ファイル**: `audioSrc` のパスが正しいか確認します。

3.  **ビルド確認**
    修正後、エラーがないか確認します。
    
    ```bash
    npm run build -- --dry-run
    ```
