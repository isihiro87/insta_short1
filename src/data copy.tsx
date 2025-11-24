import React from 'react';
import { staticFile, Img } from 'remotion';

export type Scene = {
  id: string;
  durationInFrames: number;
  audioSrc: string;
  boardContent: () => React.ReactElement;
  overlayText?: string;
  characterComment: string;
  characterCommentImportant?: boolean;
};

export const GLOBAL_TITLE = '平行四辺形の性質';

const ImageBoard = ({ src }: { src: string }) => (
  <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Img src={src} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
  </div>
);

export const mathLessonData: Scene[] = [
  {
    id: 'scene0',
    durationInFrames: 43, // 1.41866... * 30 = 42.56 -> 43
    audioSrc: staticFile('audio/parallelogram/00-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_0_base.png')} />,
    overlayText: '中2数学！平行四辺形の超基本問題3選！',
    characterComment: '平行四辺形\n超基本3選',
  },
  {
    id: 'scene1',
    durationInFrames: 102, // 3.4 * 30 = 102
    audioSrc: staticFile('audio/parallelogram/01-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_0_base.png')} />,
    overlayText: 'これだけは絶対覚えておこう！',
    characterComment: '平行四辺形\n超基本3選',
  },
  {
    id: 'scene2',
    durationInFrames: 74, // 2.45866... * 30 = 73.76 -> 74
    audioSrc: staticFile('audio/parallelogram/02-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_0_base.png')} />,
    overlayText: '第1問！',
    characterComment: 'Q1. x, yの長さは？',
  },
  {
    id: 'scene3',
    durationInFrames: 39, // 1.288 * 30 = 38.64 -> 39
    audioSrc: staticFile('audio/parallelogram/03-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_0_base.png')} />,
    overlayText: 'xとyの長さを求めよ。',
    characterComment: 'Q1. x, yの長さは？',
  },
  {
    id: 'scene4',
    durationInFrames: 76, // 2.504 * 30 = 75.12 -> 76
    audioSrc: staticFile('audio/parallelogram/04-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_1_highlight_AB_CD.png')} />,
    overlayText: '平行四辺形の性質その1！',
    characterComment: '向かい合う辺は等しい\nx = 4.5',
  },
  {
    id: 'scene5',
    durationInFrames: 86, // 2.85866... * 30 = 85.76 -> 86
    audioSrc: staticFile('audio/parallelogram/05-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_1_highlight_AB_CD.png')} />,
    overlayText: '向かい合う辺の長さは等しい！',
    characterComment: '向かい合う辺は等しい\nx = 4.5',
  },
  {
    id: 'scene6',
    durationInFrames: 76, // 2.5333... * 30 = 76
    audioSrc: staticFile('audio/parallelogram/06-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_1_highlight_AB_CD.png')} />,
    overlayText: 'だから、',
    characterComment: '向かい合う辺は等しい\nx = 4.5',
  },
  {
    id: 'scene7',
    durationInFrames: 28, // 0.92 * 30 = 27.6 -> 28
    audioSrc: staticFile('audio/parallelogram/07-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_1_highlight_AB_CD.png')} />,
    overlayText: 'xは4.5cm！',
    characterComment: '向かい合う辺は等しい\nx = 4.5',
  },
  {
    id: 'scene8',
    durationInFrames: 79, // 2.624 * 30 = 78.72 -> 79
    audioSrc: staticFile('audio/parallelogram/08-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_2_highlight_BC_DA.png')} />,
    overlayText: '同じように、',
    characterComment: 'y = 6',
  },
  {
    id: 'scene9',
    durationInFrames: 37, // 1.2133... * 30 = 36.4 -> 37
    audioSrc: staticFile('audio/parallelogram/09-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_2_highlight_BC_DA.png')} />,
    overlayText: 'yは6cm！',
    characterComment: 'y = 6',
  },
  {
    id: 'scene10',
    durationInFrames: 59, // 1.95466... * 30 = 58.64 -> 59
    audioSrc: staticFile('audio/parallelogram/10-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_2_highlight_BC_DA.png')} />,
    overlayText: '楽勝だね！',
    characterComment: 'y = 6',
  },
  {
    id: 'scene11',
    durationInFrames: 40, // 1.32266... * 30 = 39.68 -> 40
    audioSrc: staticFile('audio/parallelogram/11-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_2_0_base.png')} />,
    overlayText: '第2問！',
    characterComment: 'Q2. x, yの角度は？',
  },
  {
    id: 'scene12',
    durationInFrames: 35, // 1.13866... * 30 = 34.16 -> 35
    audioSrc: staticFile('audio/parallelogram/12-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_2_0_base.png')} />,
    overlayText: 'xとyの角度を求めよ。',
    characterComment: 'Q2. x, yの角度は？',
  },
  {
    id: 'scene13',
    durationInFrames: 76, // 2.52266... * 30 = 75.68 -> 76
    audioSrc: staticFile('audio/parallelogram/13-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_2_1_highlight_A_C.png')} />,
    overlayText: '性質その2！',
    characterComment: '向かい合う角は等しい\nx = 100°',
  },
  {
    id: 'scene14',
    durationInFrames: 46, // 1.504 * 30 = 45.12 -> 46
    audioSrc: staticFile('audio/parallelogram/14-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_2_1_highlight_A_C.png')} />,
    overlayText: '向かい合う角の大きさは等しい！',
    characterComment: '向かい合う角は等しい\nx = 100°',
  },
  {
    id: 'scene15',
    durationInFrames: 80, // 2.65866... * 30 = 79.76 -> 80
    audioSrc: staticFile('audio/parallelogram/15-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_2_1_highlight_A_C.png')} />,
    overlayText: 'だから',
    characterComment: '向かい合う角は等しい\nx = 100°',
  },
  {
    id: 'scene16',
    durationInFrames: 30, // 0.98933... * 30 = 29.68 -> 30
    audioSrc: staticFile('audio/parallelogram/16-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_2_1_highlight_A_C.png')} />,
    overlayText: 'xは100度！',
    characterComment: '向かい合う角は等しい\nx = 100°',
  },
  {
    id: 'scene17',
    durationInFrames: 45, // 1.488 * 30 = 44.64 -> 45
    audioSrc: staticFile('audio/parallelogram/17-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_2_2_highlight_A_B.png')} />,
    overlayText: 'そして、隣り合う角を足すと180度になるんだ。',
    characterComment: '隣り合う角の和 = 180°\ny = 180 - 100 = 80°',
  },
  {
    id: 'scene18',
    durationInFrames: 136, // 4.504 * 30 = 135.12 -> 136
    audioSrc: staticFile('audio/parallelogram/18-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_2_2_highlight_A_B.png')} />,
    overlayText: 'だからyは180引く100で、',
    characterComment: '隣り合う角の和 = 180°\ny = 180 - 100 = 80°',
  },
  {
    id: 'scene19',
    durationInFrames: 86, // 2.85866... * 30 = 85.76 -> 86
    audioSrc: staticFile('audio/parallelogram/19-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_2_2_highlight_A_B.png')} />,
    overlayText: '80度！',
    characterComment: '隣り合う角の和 = 180°\ny = 180 - 100 = 80°',
  },
  {
    id: 'scene20',
    durationInFrames: 37, // 1.2133... * 30 = 36.4 -> 37
    audioSrc: staticFile('audio/parallelogram/20-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_0_base.png')} />,
    overlayText: 'ラスト第3問！',
    characterComment: 'Q3. x, yの値は？',
  },
  {
    id: 'scene21',
    durationInFrames: 49, // 1.608 * 30 = 48.24 -> 49
    audioSrc: staticFile('audio/parallelogram/21-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_0_base.png')} />,
    overlayText: 'xとyの値を求めよ。',
    characterComment: 'Q3. x, yの値は？',
  },
  {
    id: 'scene22',
    durationInFrames: 75, // 2.47466... * 30 = 74.24 -> 75
    audioSrc: staticFile('audio/parallelogram/22-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_1_highlight_AC.png')} />,
    overlayText: '性質その3！',
    characterComment: '対角線は中点で交わる',
  },
  {
    id: 'scene23',
    durationInFrames: 48, // 1.57866... * 30 = 47.36 -> 48
    audioSrc: staticFile('audio/parallelogram/23-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_1_highlight_AC.png')} />,
    overlayText: '対角線は、それぞれの中点で交わる！',
    characterComment: '対角線は中点で交わる',
  },
  {
    id: 'scene24',
    durationInFrames: 114, // 3.79466... * 30 = 113.84 -> 114
    audioSrc: staticFile('audio/parallelogram/24-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_1_highlight_AC.png')} />,
    overlayText: 'つまり半分こ！',
    characterComment: '対角線は中点で交わる',
  },
  {
    id: 'scene25',
    durationInFrames: 49, // 1.61866... * 30 = 48.56 -> 49
    audioSrc: staticFile('audio/parallelogram/25-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_3_highlight_halves_AC.png')} />,
    overlayText: 'ACは10cmだから、yはその半分。',
    characterComment: 'y = 10 ÷ 2 = 5',
  },
  {
    id: 'scene26',
    durationInFrames: 124, // 4.10933... * 30 = 123.28 -> 124
    audioSrc: staticFile('audio/parallelogram/26-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_3_highlight_halves_AC.png')} />,
    overlayText: 'つまり',
    characterComment: 'y = 10 ÷ 2 = 5',
  },
  {
    id: 'scene27',
    durationInFrames: 31, // 1.02933... * 30 = 30.88 -> 31
    audioSrc: staticFile('audio/parallelogram/27-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_3_highlight_halves_AC.png')} />,
    overlayText: '5cm！',
    characterComment: 'y = 10 ÷ 2 = 5',
  },
  {
    id: 'scene28',
    durationInFrames: 46, // 1.504 * 30 = 45.12 -> 46
    audioSrc: staticFile('audio/parallelogram/28-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_4_highlight_halves_BD.png')} />,
    overlayText: 'BDの方も同じ！',
    characterComment: 'x = 4',
  },
  {
    id: 'scene29',
    durationInFrames: 58, // 1.91466... * 30 = 57.44 -> 58
    audioSrc: staticFile('audio/parallelogram/29-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_4_highlight_halves_BD.png')} />,
    overlayText: '片方が4cmなら、',
    characterComment: 'x = 4',
  },
  {
    id: 'scene30',
    durationInFrames: 72, // 2.38933... * 30 = 71.68 -> 72
    audioSrc: staticFile('audio/parallelogram/30-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_4_highlight_halves_BD.png')} />,
    overlayText: 'もう片方の',
    characterComment: 'x = 4',
  },
  {
    id: 'scene31',
    durationInFrames: 46, // 1.51466... * 30 = 45.44 -> 46
    audioSrc: staticFile('audio/parallelogram/31-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_3_4_highlight_halves_BD.png')} />,
    overlayText: 'xも4cmだね！',
    characterComment: 'x = 4',
  },
  {
    id: 'scene32',
    durationInFrames: 71, // 2.36266... * 30 = 70.88 -> 71
    audioSrc: staticFile('audio/parallelogram/32-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_0_base.png')} />,
    overlayText: '平行四辺形の3つの性質、',
    characterComment: 'まとめ\n1. 向かい合う辺は等しい\n2. 向かい合う角は等しい\n3. 対角線は中点で交わる',
  },
  {
    id: 'scene33',
    durationInFrames: 84, // 2.784 * 30 = 83.52 -> 84
    audioSrc: staticFile('audio/parallelogram/33-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_0_base.png')} />,
    overlayText: '完璧にマスターしよう！',
    characterComment: 'まとめ\n1. 向かい合う辺は等しい\n2. 向かい合う角は等しい\n3. 対角線は中点で交わる',
  },
  {
    id: 'scene34',
    durationInFrames: 61, // 2.01866... * 30 = 60.56 -> 61
    audioSrc: staticFile('audio/parallelogram/34-parallelogram.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/parallelogram/figure_1_0_base.png')} />,
    overlayText: '',
    characterComment: 'まとめ\n1. 向かい合う辺は等しい\n2. 向かい合う角は等しい\n3. 対角線は中点で交わる',
  },
];