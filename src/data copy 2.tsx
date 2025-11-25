import React from 'react';
import { staticFile, Img } from 'remotion';

export type Scene = {
  id: string;
  durationInFrames: number;
  audioSrc: string;
  boardContent: () => React.ReactElement;
  overlayText?: string;
  characterComment: string;
  characterCommentColor?: string;
  characterCommentImportant?: boolean;
  characterCommentContinuous?: boolean;
  overlayTextContinuous?: boolean;
  overlayStrokeColor?: string;
  overlayYOffset?: number;
  role?: 'maintitle' | 'subtitle' | 'answer' | 'explanation' | 'transition' | 'question';
  roleGroup?: string;
};

export const GLOBAL_TITLE = '二等辺三角形の性質';

const ImageBoard = ({ src }: { src: string }) => {
  console.log('ImageBoard rendering with src:', src);
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Img
        src={src}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export const mathLessonData: Scene[] = [
  // 00: 中2数学
  {
    id: 'scene0',
    durationInFrames: 44, // 1.464s * 30fps = 43.92
    audioSrc: staticFile('audio/iso_triangle/00-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_04_combined.png')} />,
    overlayText: '',
    characterComment: '',
    role: 'maintitle',
  },
  // 01: 二等辺三角形の基本問題2選！
  {
    id: 'scene1',
    durationInFrames: 87, // 2.914s * 30fps = 87.42
    audioSrc: staticFile('audio/iso_triangle/01-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_04_combined.png')} />,
    overlayText: '',
    characterComment: '',
    role: 'maintitle',
  },
  // 02: 第いち問！
  {
    id: 'scene2',
    durationInFrames: 50, // 1.16s * 30fps = 34.8
    audioSrc: staticFile('audio/iso_triangle/02-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_original.png')} />,
    overlayText: '',
    characterComment: '第1問！',
    characterCommentImportant: true,
    role: 'subtitle',
    roleGroup: '3-1',
  },
  // 03: xの角度は？
  {
    id: 'scene3',
    durationInFrames: 49, // 1.624s * 30fps = 48.72
    audioSrc: staticFile('audio/iso_triangle/03-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_original.png')} />,
    characterComment: '$x$の角度は？',
    role: 'question',
    roleGroup: '3-1',
  },
  // 04: まず、一直線の角度は180度だよね。
  {
    id: 'scene4',
    durationInFrames: 111, // 3.709s * 30fps = 111.27
    audioSrc: staticFile('audio/iso_triangle/04-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_original.png')} />,
    overlayText: '',
    characterComment: '一直線 ⇒180°',
    role: 'explanation',
  },
  // 05: だから、
  {
    id: 'scene5',
    durationInFrames: 27, // 0.893s * 30fps = 26.79
    audioSrc: staticFile('audio/iso_triangle/05-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_original.png')} />,
    overlayText: '',
    characterComment: '',
    role: 'explanation',
  },
  // 06: 180度から110度を引いて、
  {
    id: 'scene6',
    durationInFrames: 81, // 2.698s * 30fps = 80.94
    audioSrc: staticFile('audio/iso_triangle/06-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_step_1.png')} />,
    overlayText: '',
    characterComment: '180° - 110°\n= 70°',
    role: 'explanation',
  },
  // 07: 反対側のここも70度だね。
  {
    id: 'scene7',
    durationInFrames: 63, // 2.093s * 30fps = 62.79
    audioSrc: staticFile('audio/iso_triangle/07-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_step_2.png')} />,
    overlayText: '',
    characterComment: '',
    role: 'explanation',
  },
  // 08: 二等辺三角形の底角は等しいから、
  {
    id: 'scene8',
    durationInFrames: 90, // 3.008s * 30fps = 90.24
    audioSrc: staticFile('audio/iso_triangle/08-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_step_2.png')} />,
    overlayText: '',
    characterComment: '底角は等しい',
    role: 'explanation',
  },
  // 09: こっち側は70度だね。
  {
    id: 'scene9',
    durationInFrames: 84, // 2.813s * 30fps = 84.39
    audioSrc: staticFile('audio/iso_triangle/09-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_step_3.png')} />,
    overlayText: '',
    characterComment: 'ここも70°',
    role: 'explanation',
  },
  // 10: 三角形の内角の和は180度だから、
  {
    id: 'scene10',
    durationInFrames: 101, // 3.378s * 30fps = 101.34
    audioSrc: staticFile('audio/iso_triangle/10-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_step_3.png')} />,
    overlayText: '',
    characterComment: '内角の和 = 180°',
    role: 'explanation',
  },
  // 11: 180度から70度を2つ引いて、
  {
    id: 'scene11',
    durationInFrames: 90, // 3.002s * 30fps = 90.06
    audioSrc: staticFile('audio/iso_triangle/11-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_step_3.png')} />,
    overlayText: '',
    characterComment: '180° - (70°+70°)',
    role: 'explanation',
  },
  // 12: 答えは 40度！
  {
    id: 'scene12',
    durationInFrames: 48, // 1.584s * 30fps = 47.52
    audioSrc: staticFile('audio/iso_triangle/12-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_step_3.png')} />,
    overlayText: '',
    characterComment: '$x$ = 40°',
    characterCommentImportant: true,
    role: 'answer',
  },
  // 13: 第に問！
  {
    id: 'scene13',
    durationInFrames: 50, // 1.16s * 30fps = 34.8
    audioSrc: staticFile('audio/iso_triangle/13-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_original.png')} />,
    overlayText: '',
    characterComment: '第2問！',
    characterCommentImportant: true,
    role: 'subtitle',
    roleGroup: '4-1',
  },
  // 14: xの角度は？
  {
    id: 'scene14',
    durationInFrames: 49, // 1.624s * 30fps = 48.72
    audioSrc: staticFile('audio/iso_triangle/14-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_original.png')} />,
    characterComment: 'xの角度は？',
    role: 'question',
    roleGroup: '4-1',
  },
  // 15: 頂角の外角は130度だね。
  {
    id: 'scene15',
    durationInFrames: 84, // 2.784s * 30fps = 83.52
    audioSrc: staticFile('audio/iso_triangle/15-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_red.png')} />,
    overlayText: '',
    characterComment: '外角 = 130°',
    role: 'explanation',
  },
  // 16: ここで「スリッパの法則」を使おう！
  {
    id: 'scene16',
    durationInFrames: 89, // 2.962s * 30fps = 88.86
    audioSrc: staticFile('audio/iso_triangle/16-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_red.png')} />,
    overlayText: 'スリッパの法則',
    characterComment: '',
    role: 'explanation',
  },
  // 17: 2つの内角を足すと、向かい側の外角になるんだ。
  {
    id: 'scene17',
    durationInFrames: 121, // 4.048s * 30fps = 121.44
    audioSrc: staticFile('audio/iso_triangle/17-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_step_2.png')} />,
    overlayText: '',
    characterComment: '内角+内角=外角',
    role: 'explanation',
  },
  // 18: 二等辺三角形だから、
  {
    id: 'scene18',
    durationInFrames: 62, // 2.053s * 30fps = 61.59
    audioSrc: staticFile('audio/iso_triangle/18-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_step_1.png')} />,
    overlayText: '',
    characterComment: '二等辺三角形',
    role: 'explanation',
  },
  // 19: 底角はどっちもx！
  {
    id: 'scene19',
    durationInFrames: 60, // 2.0s * 30fps = 60
    audioSrc: staticFile('audio/iso_triangle/19-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_step_1.png')} />,
    overlayText: '',
    characterComment: '底角は同じx',
    role: 'explanation',
  },
  // 20: つまり、底角xとxを足すと、
  {
    id: 'scene20',
    durationInFrames: 100, // 3.32s * 30fps = 99.6
    audioSrc: staticFile('audio/iso_triangle/20-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_step_2.png')} />,
    overlayText: '',
    characterComment: 'x + x = 130°',
    role: 'explanation',
  },
  // 21: 外角の130度になるんだ。
  {
    id: 'scene21',
    durationInFrames: 72, // 2.4s * 30fps = 72
    audioSrc: staticFile('audio/iso_triangle/21-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_step_2.png')} />,
    overlayText: '',
    characterComment: '',
    characterCommentContinuous: true,
    role: 'explanation',
  },
  // 22: 130度を半分こして、
  {
    id: 'scene22',
    durationInFrames: 65, // 2.173s * 30fps = 65.19
    audioSrc: staticFile('audio/iso_triangle/22-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_step_2.png')} />,
    overlayText: '',
    characterComment: '130° ÷ 2',
    role: 'explanation',
  },
  // 23: 答えは 65度！
  {
    id: 'scene23',
    durationInFrames: 52, // 1.738s * 30fps = 52.14
    audioSrc: staticFile('audio/iso_triangle/23-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_04_step_2.png')} />,
    overlayText: '',
    characterComment: 'x = 65°',
    characterCommentImportant: true,
    role: 'answer',
  },
  // 24: これで完璧！
  {
    id: 'scene24',
    durationInFrames: 41, // 1.368s * 30fps = 41.04
    audioSrc: staticFile('audio/iso_triangle/24-iso_03_04.wav'),
    boardContent: () => <ImageBoard src={staticFile('images/iso_triangle/problem_03_04_combined.png')} />,
    overlayText: '完璧！',
    characterComment: '',
    role: 'transition',
  },
];
