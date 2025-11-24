# 角度図形ファイル

## ファイル
- `angle_diagram.svg`: SVG形式の角度図形

## 図形の説明
この図形は、点Oから2本の光線（OMとON）が出ており、以下の特徴があります：

- **点O**: 原点
- **光線OM**: 上方向に少し右に傾いた光線
- **光線ON**: 右方向の水平光線
- **点A**: OM上、Oに近い位置
- **点C**: OM上、Aより遠い位置
- **点B**: ON上、Oに近い位置
- **点D**: ON上、Bより遠い位置

### 等しい長さのマーク
- **OA = AB**: 1本のマーク（OAとABにそれぞれ1本ずつ）
- **BC = CD**: 2本のマーク（BCとCDにそれぞれ2本ずつ）

### 角度
- **∠O = x**: 未知角（光線OMとONの間の角）
- **∠MCD = 84°**: 外角（点Cでの外角）

## PNGへの変換方法

### 方法1: オンラインツールを使用
1. https://svgtopng.com/ などのオンラインツールにアクセス
2. `angle_diagram.svg`をアップロード
3. PNGとしてダウンロード

### 方法2: ブラウザでスクリーンショット
1. ブラウザで`angle_diagram.svg`を開く
2. スクリーンショットを撮影
3. 画像編集ソフトでトリミング

### 方法3: Node.jsスクリプトを使用（sharpライブラリが必要）
```bash
npm install sharp
node datas/2nd_math/convert-svg-to-png.js
```

### 方法4: ImageMagickを使用（インストール済みの場合）
```bash
magick datas/2nd_math/angle_diagram.svg datas/2nd_math/angle_diagram.png
```





