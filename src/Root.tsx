import React from 'react';
import { Composition } from 'remotion';
import { MathShortsVideo } from './MathShorts';
import { EnglishShortsVideo } from './EnglishShorts';
import { mathLessonData, Scene } from './data';
import { englishLessonData } from './EnglishLessonData';
import { CommonShortsVideo } from './CommonShorts';
import { commonLessonData, CommonScene } from './CommonLessonData';
import { IchimonIttoShortsVideo } from './IchimonIttoShorts';
import { ichimonIttoData, titleData } from './IchimonIttoData';
import { TriviaVideo } from './TriviaVideo';
import { RefactoredTriviaVideo } from './RefactoredTriviaVideo';
import { industryRevScenario } from './scenarios/IndustryRev';
import { Trivia3Video } from './Trivia3Video';
import { trivia3Scenario } from './scenarios/trivia3';
import './style.css';

// Calculate duration for Industry Revolution video
const industryRevTotalFrames = industryRevScenario.scenes.reduce((acc, scene) => acc + scene.durationInFrames, 0);
const trivia3TotalFrames = trivia3Scenario.scenes.reduce((acc, scene) => acc + scene.durationInFrames, 0);

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

  // CommonShorts用の計算ロジック
  const calculateCommonTotalFrames = (scenes: CommonScene[]) => {
    return scenes.reduce((acc: number, scene: CommonScene, index: number) => {
      let pauseBefore = 0;
      let pauseAfter = 0;

      // CommonShorts.tsxと同じロジック
      if (scene.customPauseAfter !== undefined) {
        pauseAfter = scene.customPauseAfter;
      } else if (scene.role === 'answer') {
        pauseAfter = 10;
      } else if (scene.role === 'question') {
        pauseAfter = 45;
      } else if (scene.role === 'explanation') {
        pauseAfter = 10;
      } else if (scene.role === 'transition') {
        pauseBefore = 5;
      }

      return acc + scene.durationInFrames + pauseBefore + pauseAfter;
    }, 0);
  };

  const mathTotalFrames = calculateTotalFrames(mathLessonData);
  const englishTotalFrames = calculateTotalFrames(englishLessonData);
  const commonTotalFrames = calculateCommonTotalFrames(commonLessonData);
  const ichimonIttoTotalFrames = ichimonIttoData.reduce((acc, scene) => {
    return acc + scene.questionDuration + 50 + scene.answerDuration + 30; // 50=Countdown, 30=AnswerBuffer
  }, 0);

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

      {/* <Composition
        id="EnglishShorts"
        component={EnglishShortsVideo}
        durationInFrames={englishTotalFrames}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      /> */}

      {/* ▼▼▼ 理科・社会 (Common) ▼▼▼ */}
      {/* <Composition
        id="CommonShorts"
        component={CommonShortsVideo}
        durationInFrames={commonTotalFrames}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      /> */}

      {/* ▼▼▼ 一問一答 (Ichimon-Itto) ▼▼▼ */}
      <Composition
        id="IchimonIttoShorts"
        component={IchimonIttoShortsVideo}
        durationInFrames={ichimonIttoTotalFrames}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{
          subject: 'history',
        }}
      />

      {/* ▼▼▼ トリビア (Trivia) ▼▼▼ */}
      {/* <Composition
        id="Trivia"
        component={TriviaVideo}
        durationInFrames={1511} // Precise duration calculated (Audio length exactly)
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      /> */}

      {/* <Composition
        id="Trivia2"
        component={RefactoredTriviaVideo}
        durationInFrames={industryRevTotalFrames}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      /> */}
      {/* <Composition
        id="Trivia3"
        component={Trivia3Video}
        durationInFrames={trivia3TotalFrames}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{}}
      /> */}
    </>
  );
};