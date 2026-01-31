#!/bin/bash
set -e

TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain/en" "$TEMP_DIR/audio/explain/ja"

cp datas/english/grade3/unit_06/quiz/words/audios/en/21-words.wav "$TEMP_DIR/audio/explain/en/"
cp datas/english/grade3/unit_06/quiz/words/audios/en/22-words.wav "$TEMP_DIR/audio/explain/en/"
cp datas/english/grade3/unit_06/quiz/words/audios/en/23-words.wav "$TEMP_DIR/audio/explain/en/"
cp datas/english/grade3/unit_06/quiz/words/audios/en/24-words.wav "$TEMP_DIR/audio/explain/en/"
cp datas/english/grade3/unit_06/quiz/words/audios/en/26-words.wav "$TEMP_DIR/audio/explain/en/"
cp datas/english/grade3/unit_06/quiz/words/audios/en/27-words.wav "$TEMP_DIR/audio/explain/en/"

cp datas/english/grade3/unit_06/quiz/words/audios/ja/21-words.wav "$TEMP_DIR/audio/explain/ja/"
cp datas/english/grade3/unit_06/quiz/words/audios/ja/22-words.wav "$TEMP_DIR/audio/explain/ja/"
cp datas/english/grade3/unit_06/quiz/words/audios/ja/23-words.wav "$TEMP_DIR/audio/explain/ja/"
cp datas/english/grade3/unit_06/quiz/words/audios/ja/24-words.wav "$TEMP_DIR/audio/explain/ja/"
cp datas/english/grade3/unit_06/quiz/words/audios/ja/26-words.wav "$TEMP_DIR/audio/explain/ja/"
cp datas/english/grade3/unit_06/quiz/words/audios/ja/27-words.wav "$TEMP_DIR/audio/explain/ja/"

cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"

cp datas/english/grade3/unit_06/quiz/words/words_04-IchimonIttoData.tsx src/IchimonIttoData.tsx

echo "=== Grade3 レンダリング開始 ==="
PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts IchimonIttoShorts \
  datas/english/grade3/unit_06/quiz/words/words_04-output.mp4 \
  --public-dir "$TEMP_DIR" \
  --browser-executable /workspaces/insta-short1/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell \
  --props '{"subject":"english"}' \
  --disable-chrome-sandbox

echo "=== Grade3 完了 ==="
rm -rf "$TEMP_DIR"
