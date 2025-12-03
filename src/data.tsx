import React from 'react';
import { staticFile, Img } from 'remotion';




export type Scene = {
  id: string;
  durationInFrames: number;
  audioSrc: string;
  boardContent: () => React.ReactElement;
  overlayText?: string;
  characterComment?: string;
  characterCommentColor?: string;
  characterCommentImportant?: boolean;
  characterCommentContinuous?: boolean;
  overlayTextContinuous?: boolean;
  overlayStrokeColor?: string;
  overlayYOffset?: number;
  role?: 'maintitle' | 'subtitle' | 'answer' | 'explanation' | 'transition' | 'question' | 'rhythm';
  roleGroup?: string;
  pauseAfter?: number;
};

export const GLOBAL_TITLE = '二等辺三角形の性質';

const ImageBoard = ({ src }: { src: string }) => {
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
  // --- Problem 06 ---
  // 00: 角をもとめよう！
  {
    id: 'scene0',
    durationInFrames: 60,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_06.png')} />,
    overlayText: '角を求めよう！',
    characterComment: '動画を止めて計算してみてね',
    role: 'transition',
  },
  // 01: まずは、一番大きな直角三角形ABCに注目！
  {
    id: 'scene1',
    durationInFrames: 90,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_06_step1.png')} />,
    overlayText: '',
    characterComment: '直角三角形ABCに注目！',
    role: 'explanation',
  },
  // 02: 角Cは35度、角Bは直角マークがついているから90度だね。
  {
    id: 'scene2',
    durationInFrames: 120,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_06_step1.png')} />,
    overlayText: '',
    characterComment: '∠C=35°, ∠B=90°',
    role: 'explanation',
  },
  // 03: 三角形の内角の和は180度だから、
  {
    id: 'scene3',
    durationInFrames: 90,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_06_step1.png')} />,
    overlayText: '',
    characterComment: '内角の和 = 180°',
    role: 'explanation',
  },
  // 04: 角Aの大きさは、180度から90度と35度を引いて、55度になるよ。
  {
    id: 'scene4',
    durationInFrames: 150,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_06_step2.png')} />,
    overlayText: '',
    characterComment: '180° - (90° + 35°) = 55°',
    role: 'explanation',
  },
  // 05: 次は、左側にある三角形ABDに注目して。
  {
    id: 'scene5',
    durationInFrames: 90,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_06_step3.png')} />,
    overlayText: '',
    characterComment: '三角形ABDに注目！',
    role: 'explanation',
  },
  // 06: 辺ABと辺ADに、長さが同じという印がついているね。つまり、この三角形は二等辺三角形なんだ。
  {
    id: 'scene6',
    durationInFrames: 150,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_06_step3.png')} />,
    overlayText: '',
    characterComment: 'AB = AD (二等辺三角形)',
    role: 'explanation',
  },
  // 07: 二等辺三角形の底角、つまり下の2つの角の大きさは同じになるよ。
  {
    id: 'scene7',
    durationInFrames: 120,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_06_step4.png')} />,
    overlayText: '',
    characterComment: '底角は等しい',
    role: 'explanation',
  },
  // 08: 頂点の角Aは55度だから、残りの角度は、180度から55度を引いて125度。
  {
    id: 'scene8',
    durationInFrames: 150,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_06_step4.png')} />,
    overlayText: '',
    characterComment: '180° - 55° = 125°',
    role: 'explanation',
  },
  // 09: これを半分こすればいいから、125割る2で、62.5。角xの大きさは、62.5度だね。
  {
    id: 'scene9',
    durationInFrames: 180,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_06_step5.png')} />,
    overlayText: '',
    characterComment: '125° ÷ 2 = 62.5°',
    characterCommentImportant: true,
    role: 'answer',
  },

  // --- Problem 07 ---
  // 10: 続いて、第7問の解説。
  {
    id: 'scene10',
    durationInFrames: 60,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07.png')} />,
    overlayText: '第7問！',
    characterComment: '続いて第7問',
    role: 'transition',
  },
  // 11: こっちは、ACとBCの長さが等しい二等辺三角形だね。
  {
    id: 'scene11',
    durationInFrames: 90,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step1.png')} />,
    overlayText: '',
    characterComment: 'AC = BC (二等辺三角形)',
    role: 'explanation',
  },
  // 12: まずは、下の2つの角、底角の大きさを出してみよう。
  {
    id: 'scene12',
    durationInFrames: 90,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step1.png')} />,
    overlayText: '',
    characterComment: '底角を求めよう',
    role: 'explanation',
  },
  // 13: てっぺんの角が40度だから、180度から40度を引くと140度。
  {
    id: 'scene13',
    durationInFrames: 120,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step1.png')} />,
    overlayText: '',
    characterComment: '180° - 40° = 140°',
    role: 'explanation',
  },
  // 14: これを左右で同じように分けるから、140割る2で、70度。つまり、左の角Aも、右の角B全体も、どっちも70度ってこと。
  {
    id: 'scene14',
    durationInFrames: 180,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step2.png')} />,
    overlayText: '',
    characterComment: '140° ÷ 2 = 70°',
    role: 'explanation',
  },
  // 15: 次に、右下の角Bについている、黒い丸ポチを見て。これは、角を半分にしているよ、っていう合図なんだ。
  {
    id: 'scene15',
    durationInFrames: 150,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step3.png')} />,
    overlayText: '',
    characterComment: '角の二等分線',
    role: 'explanation',
  },
  // 16: 角B全体はさっき70度とわかったから、その半分の35度が、細い角の大きさになるね。
  {
    id: 'scene16',
    durationInFrames: 150,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step3.png')} />,
    overlayText: '',
    characterComment: '70° ÷ 2 = 35°',
    role: 'explanation',
  },
  // 17: 今度は、三角形ABDを見てみよう。
  {
    id: 'scene17',
    durationInFrames: 90,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step4.png')} />,
    overlayText: '',
    characterComment: '三角形ABDに注目！',
    role: 'explanation',
  },
  // 18: 左の角Aは70度、右の角Bの一部は35度だったよね。三角形の残りのひとつの角がx。
  {
    id: 'scene18',
    durationInFrames: 150,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step4.png')} />,
    overlayText: '',
    characterComment: '∠A=70°, ∠B(一部)=35°',
    role: 'explanation',
  },
  // 19: 180度から、70度と35度を引いてみて。残りは75度になるね。これが角xの答え。
  {
    id: 'scene19',
    durationInFrames: 180,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step5.png')} />,
    overlayText: '',
    characterComment: '180° - (70°+35°) = 75°',
    characterCommentImportant: true,
    role: 'answer',
  },
  // 20: ちなみに、もうひとつ解き方があるよ。「スリッパの法則」や「外角の定理」って聞いたことあるかな？
  {
    id: 'scene20',
    durationInFrames: 150,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step6.png')} />,
    overlayText: '別解：スリッパの法則',
    characterComment: '外角の定理',
    role: 'explanation',
  },
  // 21: 右側の三角形で、40度と35度を足すと、その隣の外側の角xになる、っていう性質を使うと、足し算だけで一瞬で75度と出すこともできるよ。
  {
    id: 'scene21',
    durationInFrames: 180,
    audioSrc: '', // Dummy
    boardContent: () => <ImageBoard src={staticFile('math_problems_centered/problem_07_step6.png')} />,
    overlayText: '',
    characterComment: '40° + 35° = 75°',
    characterCommentImportant: true,
    role: 'answer',
  },
];
