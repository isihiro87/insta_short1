#!/bin/bash
set -e

TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain/en" "$TEMP_DIR/audio/explain/ja"

cp datas/english/grade2/unit_06/quiz/words/audios/en/26-words.wav "$TEMP_DIR/audio/explain/en/"
cp datas/english/grade2/unit_06/quiz/words/audios/en/27-words.wav "$TEMP_DIR/audio/explain/en/"
cp datas/english/grade2/unit_06/quiz/words/audios/en/28-words.wav "$TEMP_DIR/audio/explain/en/"
cp datas/english/grade2/unit_06/quiz/words/audios/en/29-words.wav "$TEMP_DIR/audio/explain/en/"
cp datas/english/grade2/unit_06/quiz/words/audios/en/30-words.wav "$TEMP_DIR/audio/explain/en/"

cp datas/english/grade2/unit_06/quiz/words/audios/ja/26-words.wav "$TEMP_DIR/audio/explain/ja/"
cp datas/english/grade2/unit_06/quiz/words/audios/ja/27-words.wav "$TEMP_DIR/audio/explain/ja/"
cp datas/english/grade2/unit_06/quiz/words/audios/ja/28-words.wav "$TEMP_DIR/audio/explain/ja/"
cp datas/english/grade2/unit_06/quiz/words/audios/ja/29-words.wav "$TEMP_DIR/audio/explain/ja/"
cp datas/english/grade2/unit_06/quiz/words/audios/ja/30-words.wav "$TEMP_DIR/audio/explain/ja/"

cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"

cp datas/english/grade2/unit_06/quiz/words/04-IchimonIttoData.tsx src/IchimonIttoData.tsx

echo "=== Grade2 レンダリング開始 ==="
PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts IchimonIttoShorts \
  datas/english/grade2/unit_06/quiz/words/04-output.mp4 \
  --public-dir "$TEMP_DIR" \
  --browser-executable /workspaces/insta-short1/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell \
  --props '{"subject":"english"}' \
  --disable-chrome-sandbox

echo "=== Grade2 完了 ==="
rm -rf "$TEMP_DIR"
