import React from 'react';
import { Composition } from 'remotion';
import { MathShortsVideo } from './MathShorts';
import { EnglishShortsVideo } from './EnglishShorts';
import { mathLessonData, Scene } from './data';
import { englishLessonData } from './EnglishLessonData';
import './style.css';

export const RemotionRoot: React.FC = () => {
  // シーンのdurationInFramesの合計に加えて、役割に応じた間も計算
  const calculateTotalFrames = (scenes: Scene[]) => {
    return scenes.reduce((acc: number, scene: Scene, index: number) => {
      let pauseBefore = 0;
      let pauseAfter = 0;

      // 役割に応じた間を計算（EnglishShorts.tsxと同じロジック）
      if (scene.role === 'answer') {
        pauseAfter = 30; // 1秒
      } else if (scene.role === 'question') {
        pauseAfter = 60; // 2秒
      } else if (scene.role === 'explanation') {
        pauseAfter = 15; // 0.5秒
      } else if (scene.role === 'rhythm') {
        pauseAfter = 10; // 0.33秒
      } else if (scene.role === 'transition') {
        pauseBefore = 5; // 5フレーム
      }

      // 個別の設定があれば優先
      if (scene.pauseAfter !== undefined) {
        pauseAfter = scene.pauseAfter;
      }

      return acc + scene.durationInFrames + pauseBefore + pauseAfter;
    }, 0);
  };

  const mathTotalFrames = calculateTotalFrames(mathLessonData);
  const englishTotalFrames = calculateTotalFrames(englishLessonData);

  return (
    <>
      {/* 
        ===========================================================================
        【教科の切り替え】
        表示したい教科の Composition のコメントアウトを外して（有効にして）ください。
        使わない教科はコメントアウトしておくと、プレビューが軽くなる可能性があります。
        ===========================================================================
      */}

      {/* ▼▼▼ 数学 (Math) ▼▼▼ */}
      {/* <Composition
        id="MathShorts"
        component={MathShortsVideo}
        durationInFrames={mathTotalFrames}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          // scenes: mathLessonData, // 関数を含むため、コンポーネント内で直接インポート
          // showSubtitles: false,
        }}
      /> */}

      {/* ▼▼▼ 英語 (English) ▼▼▼ */}

      <Composition
        id="EnglishShorts"
        component={EnglishShortsVideo}
        durationInFrames={englishTotalFrames}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      />

    </>
  );
};