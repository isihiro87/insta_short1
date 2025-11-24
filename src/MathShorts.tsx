import { AbsoluteFill, Audio, Img, Series, staticFile } from 'remotion';
import React from 'react';
import { mathLessonData, Scene } from './data';
import { SceneCard } from './components/SceneCard';

export const MathShortsVideo: React.FC<{ scenes?: Scene[]; showSubtitles?: boolean }> = ({ scenes = mathLessonData, showSubtitles = true }) => {
  return (
    <AbsoluteFill style={{
      backgroundColor: '#E0F7FA',
      overflow: 'hidden'
    }}>
      {/* バックグラウンドミュージック */}
      <Audio src={staticFile("audio/bgm.mp3")} volume={0.05} loop />

      {/* 背景画像 */}
      <Img
        src={staticFile("bg_grid.jpg")}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.15,
          mixBlendMode: 'multiply'
        }}
      />

      {/* 装飾 */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', fontSize: '80px', opacity: 0.2, color: '#4DD0E1', transform: 'rotate(-15deg)' }}>✖</div>
      <div style={{ position: 'absolute', top: '40%', right: '5%', fontSize: '60px', opacity: 0.2, color: '#81C784', transform: 'rotate(10deg)' }}>▲</div>

      <Series>
        {scenes.map((scene, index) => {
          // 前のシーンの情報を取得
          const prevScene = index > 0 ? scenes[index - 1] : null;
          
          // characterCommentContinuousの場合、前のシーンのcharacterCommentを使用
          let displayComment = scene.characterComment;
          let displayCommentColor = scene.characterCommentColor;
          let displayCommentImportant = scene.characterCommentImportant;
          let isCommentContinuous = false;
          
          if (scene.characterCommentContinuous && prevScene) {
            displayComment = prevScene.characterComment;
            displayCommentColor = prevScene.characterCommentColor;
            displayCommentImportant = prevScene.characterCommentImportant;
            isCommentContinuous = true;
          }
          
          // overlayTextContinuousの場合、前のシーンのoverlayTextを使用
          // 連続する場合は最初にoverlayTextが設定されているシーンまで遡る
          let displayOverlayText = scene.overlayText;
          let isOverlayContinuous = false;
          if (scene.overlayTextContinuous && prevScene) {
            // 前のシーンから遡って最初にoverlayTextが設定されているシーンを探す
            let searchIndex = index - 1;
            while (searchIndex >= 0 && scenes[searchIndex].overlayTextContinuous) {
              searchIndex--;
            }
            if (searchIndex >= 0 && scenes[searchIndex].overlayText) {
              displayOverlayText = scenes[searchIndex].overlayText;
            } else if (prevScene.overlayText) {
              displayOverlayText = prevScene.overlayText;
            }
            isOverlayContinuous = true;
          }

          // 役割に応じた間を計算
          let pauseBefore = 0; // シーンの前の間
          let pauseAfter = 0; // シーンの後の間
          
          if (scene.role === 'answer') {
            // 答えの後、切り替え前に間を取る
            pauseAfter = 15; // 15フレーム（0.5秒）の間
          } else if (scene.role === 'question') {
            // 問題を読み終わった後、2秒ほど止まる
            pauseAfter = 60; // 60フレーム（2秒）の間
          } else if (scene.role === 'subtitle' && scene.roleGroup) {
            // 同じグループのsubtitleはoverlayTextを継続表示
            // 間は通常通り
          } else if (scene.role === 'transition') {
            // 切り替え時は少し間を取る
            pauseBefore = 5; // 5フレーム（約0.17秒）の間
          } else if (scene.role === 'explanation') {
            // 説明中は通常通り
          }

          // シーンの前の間を追加（前のシーンの内容を表示し続ける、音声なし）
          if (pauseBefore > 0 && prevScene) {
            const prevDisplayComment = prevScene.characterComment;
            const prevDisplayCommentColor = prevScene.characterCommentColor;
            const prevDisplayCommentImportant = prevScene.characterCommentImportant;
            const prevDisplayOverlayText = prevScene.overlayText;
            
            // 間のフレーム用のシーン（音声なし）
            const pauseScene: Scene = {
              ...prevScene,
              audioSrc: '', // 音声を流さない
            };
            
            return (
              <React.Fragment key={scene.id}>
                <Series.Sequence durationInFrames={pauseBefore}>
                  <SceneCard
                    scene={pauseScene}
                    isFirstScene={false}
                    showSubtitles={showSubtitles}
                    displayComment={prevDisplayComment}
                    displayCommentColor={prevDisplayCommentColor}
                    displayCommentImportant={prevDisplayCommentImportant}
                    displayOverlayText={prevDisplayOverlayText}
                    isCommentContinuous={true}
                    isOverlayContinuous={true}
                  />
                </Series.Sequence>
                <Series.Sequence durationInFrames={scene.durationInFrames}>
                  <SceneCard
                    scene={scene}
                    isFirstScene={index === 0}
                    showSubtitles={showSubtitles}
                    displayComment={displayComment}
                    displayCommentColor={displayCommentColor}
                    displayCommentImportant={displayCommentImportant}
                    displayOverlayText={displayOverlayText}
                    isCommentContinuous={isCommentContinuous}
                    isOverlayContinuous={isOverlayContinuous}
                  />
                </Series.Sequence>
                {pauseAfter > 0 && (
                  <Series.Sequence durationInFrames={pauseAfter}>
                    {/* 間のフレーム用のシーン（音声なし） */}
                    <SceneCard
                      scene={{ ...scene, audioSrc: '' }}
                      isFirstScene={false}
                      showSubtitles={showSubtitles}
                      displayComment={displayComment}
                      displayCommentColor={displayCommentColor}
                      displayCommentImportant={displayCommentImportant}
                      displayOverlayText={displayOverlayText}
                      isCommentContinuous={true}
                      isOverlayContinuous={true}
                    />
                  </Series.Sequence>
                )}
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={scene.id}>
              <Series.Sequence durationInFrames={scene.durationInFrames}>
                <SceneCard
                  scene={scene}
                  isFirstScene={index === 0}
                  showSubtitles={showSubtitles}
                  displayComment={displayComment}
                  displayCommentColor={displayCommentColor}
                  displayCommentImportant={displayCommentImportant}
                  displayOverlayText={displayOverlayText}
                  isCommentContinuous={isCommentContinuous}
                  isOverlayContinuous={isOverlayContinuous}
                />
              </Series.Sequence>
              {pauseAfter > 0 && (
                <Series.Sequence durationInFrames={pauseAfter}>
                  {/* 間のフレーム用のシーン（音声なし） */}
                  <SceneCard
                    scene={{ ...scene, audioSrc: '' }}
                    isFirstScene={false}
                    showSubtitles={showSubtitles}
                    displayComment={displayComment}
                    displayCommentColor={displayCommentColor}
                    displayCommentImportant={displayCommentImportant}
                    displayOverlayText={displayOverlayText}
                    isCommentContinuous={true}
                    isOverlayContinuous={true}
                  />
                </Series.Sequence>
              )}
            </React.Fragment>
          );
        })}
      </Series>
    </AbsoluteFill>
  );
};