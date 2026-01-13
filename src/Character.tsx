import React from 'react';
import { Img, useCurrentFrame } from 'remotion';
import openOpenImg from './assets/char/open_open.png';
import openCloseImg from './assets/char/open_close.png';
import halfOpenImg from './assets/char/half_open.png';
import halfCloseImg from './assets/char/half_close.png';
import closeOpenImg from './assets/char/close_open.png';
import closeCloseImg from './assets/char/close_close.png';

type EyeState = 'open' | 'half' | 'close';
type MouthState = 'open' | 'close';

const CHAR_IMAGES: Record<string, string> = {
  'open_open': openOpenImg,
  'open_close': openCloseImg,
  'half_open': halfOpenImg,
  'half_close': halfCloseImg,
  'close_open': closeOpenImg,
  'close_close': closeCloseImg,
};

export const Character: React.FC<{
  isTalking?: boolean
}> = ({ isTalking = true }) => {
  const frame = useCurrentFrame();

  // --- まばたきの処理（修正版：half状態を削除） ---
  const blinkCycle = 120;
  const blinkFrame = frame % blinkCycle;

  let eyeState: EyeState = 'open';

  // 110～115フレームの間（5フレーム）を目を閉じる状態にする
  if (blinkFrame > 110 && blinkFrame < 116) {
    eyeState = 'close';
  }

  // --- 口パクの処理 ---
  let mouthState: MouthState = 'close';

  if (isTalking) {
    const baseWave = Math.sin(frame * 0.8);
    const noiseWave = Math.sin(frame * 0.3);
    mouthState = (baseWave + noiseWave) > 0 ? 'open' : 'close';
  }

  // --- 画像の決定 ---
  const imageKey = `${eyeState}_${mouthState}`;

  const imageSrc = CHAR_IMAGES[imageKey] || openCloseImg;

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    }}>
      <Img
        src={imageSrc}
        style={{
          width: '85%',
          height: '85%',
          objectFit: 'contain',
          transform: 'scaleX(-1)',
          filter: 'drop-shadow(5px 5px 15px rgba(0,0,0,0.2))'
        }}
      />
    </div>
  );
};