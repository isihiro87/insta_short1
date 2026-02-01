#!/bin/bash
set -e

# レンダリングスクリプト: qas.md
# 生成日: 2026-02-01

TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/audio/explain"

# 音声ファイルをコピー（00-09）
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/audios/00-5tanuma_kansei.wav "$TEMP_DIR/audio/explain/"
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/audios/01-5tanuma_kansei.wav "$TEMP_DIR/audio/explain/"
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/audios/02-5tanuma_kansei.wav "$TEMP_DIR/audio/explain/"
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/audios/03-5tanuma_kansei.wav "$TEMP_DIR/audio/explain/"
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/audios/04-5tanuma_kansei.wav "$TEMP_DIR/audio/explain/"
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/audios/05-5tanuma_kansei.wav "$TEMP_DIR/audio/explain/"
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/audios/06-5tanuma_kansei.wav "$TEMP_DIR/audio/explain/"
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/audios/07-5tanuma_kansei.wav "$TEMP_DIR/audio/explain/"
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/audios/08-5tanuma_kansei.wav "$TEMP_DIR/audio/explain/"
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/audios/09-5tanuma_kansei.wav "$TEMP_DIR/audio/explain/"

cp public/audio/bgm.mp3 "$TEMP_DIR/audio/"

# データファイルをsrcにコピー
cp /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/IchimonIttoData.tsx src/IchimonIttoData.tsx

echo "=== レンダリング開始 ==="
PUPPETEER_HEADLESS_MODE=new npx remotion render src/index.ts IchimonIttoShorts \
  /workspaces/insta-short1/datas/history/grade2/4-3/5tanuma_kansei/quiz/output.mp4 \
  --public-dir "$TEMP_DIR" \
  --browser-executable /workspaces/insta-short1/chrome-headless-shell/linux-143.0.7499.192/chrome-headless-shell-linux64/chrome-headless-shell \
  --props '{"subject":"history"}' \
  --disable-chrome-sandbox \
  --concurrency 4 \
  --gl swiftshader

echo "=== 完了 ==="
rm -rf "$TEMP_DIR"
