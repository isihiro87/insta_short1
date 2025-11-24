import React from 'react';
import { Composition } from 'remotion';
import { MathShortsVideo } from './MathShorts';
import { mathLessonData, Scene } from './data';
import './style.css';

export const RemotionRoot: React.FC = () => {
  // シーンのdurationInFramesの合計に加えて、役割に応じた間も計算
  const totalFrames = mathLessonData.reduce((acc: number, scene: Scene, index: number) => {
    let pauseBefore = 0;
    let pauseAfter = 0;
    
    // 役割に応じた間を計算（MathShorts.tsxと同じロジック）
    if (scene.role === 'answer') {
      pauseAfter = 15; // 15フレーム（0.5秒）の間
    } else if (scene.role === 'question') {
      pauseAfter = 60; // 60フレーム（2秒）の間
    } else if (scene.role === 'transition') {
      pauseBefore = 5; // 5フレーム（約0.17秒）の間
    }
    
    return acc + scene.durationInFrames + pauseBefore + pauseAfter;
  }, 0);

  return (
    <Composition
      id="MathShorts"
      component={MathShortsVideo}
      durationInFrames={totalFrames}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{
        // scenes: mathLessonData, // 関数を含むため、コンポーネント内で直接インポート
        // showSubtitles: false,
      }}
    />
  );
};