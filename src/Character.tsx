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

  // --- まばたきの処理（既存のまま） ---
  const blinkCycle = 150; 
  const blinkFrame = frame % blinkCycle;
  
  let eyeState: EyeState = 'open';
  
  if (blinkFrame > 140) {
    if (blinkFrame < 142) eyeState = 'half';
    else if (blinkFrame < 145) eyeState = 'close';
    else if (blinkFrame < 147) eyeState = 'half';
    else eyeState = 'open';
  }

  // --- 口パクの処理（修正箇所） ---
  let mouthState: MouthState = 'close';
  
  if (isTalking) {
    // 以前のロジック: (frame % 8) < 4  -> 完全に一定のリズム
    
    // 新しいロジック: 合成波を使ってランダムなタイミングを作る
    // 0.8: 基本スピード（約8フレーム周期に対応）
    // 0.3: ゆらぎを与えるための低周波
    // これらを足し合わせることで、平均速度は保ちつつリズムを崩す
    const baseWave = Math.sin(frame * 0.8);
    const noiseWave = Math.sin(frame * 0.3);
    
    // 2つの波の合計が正なら口を開ける
    mouthState = (baseWave + noiseWave) > 0 ? 'open' : 'close';
  }

  // --- 画像の決定 ---
  // isTalkingがfalseの場合は、強制的に '_close' を使用する
  const imageKey = isTalking 
    ? `${eyeState}_${mouthState}` 
    : `${eyeState}_close`; 
    
  const imageSrc = CHAR_IMAGES[imageKey] || openCloseImg;

  return (
    <div style={{
      width: '400px',
      height: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    }}>
      <Img 
        src={imageSrc} 
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          transform: 'scaleX(-1)', 
          filter: 'drop-shadow(5px 5px 15px rgba(0,0,0,0.2))'
        }}
      />
    </div>
  );
};