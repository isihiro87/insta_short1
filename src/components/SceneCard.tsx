import React from 'react';
import { AbsoluteFill, Audio } from 'remotion';
import Latex from 'react-latex-next';
import { Scene } from '../data';
import { PopText } from './PopText';
import { Whiteboard } from './Whiteboard';
import { Character } from '../Character';

// 文字数に応じてフォントサイズを計算するヘルパー関数
const getDynamicFontSize = (text: string) => {
  const len = text.length;
  // 文字サイズを大幅にアップ
  if (len <= 10) return 95;  // 短い文は特大
  if (len <= 20) return 80;  // 通常の文
  return 65;                 // 長文でも読みやすく
};

export const SceneCard: React.FC<{
  scene: Scene;
  isFirstScene?: boolean;
  showSubtitles?: boolean;
  displayComment?: string;
  displayCommentColor?: string;
  displayCommentImportant?: boolean;
  displayOverlayText?: string;
  isCommentContinuous?: boolean;
  isOverlayContinuous?: boolean;
}> = ({ scene, isFirstScene = false, showSubtitles = true, displayComment, displayCommentColor, displayCommentImportant, displayOverlayText, isCommentContinuous = false, isOverlayContinuous = false }) => {

  const finalComment = displayComment !== undefined ? displayComment : scene.characterComment;
  const finalCommentColor = displayCommentColor !== undefined ? displayCommentColor : scene.characterCommentColor;
  const finalCommentImportant = displayCommentImportant !== undefined ? displayCommentImportant : scene.characterCommentImportant;
  const finalOverlayText = displayOverlayText !== undefined ? displayOverlayText : scene.overlayText;

  // Calculate font size based on the FULL accumulated text
  // This ensures all lines use the same font size and layout stays consistent
  const unifiedFontSize = getDynamicFontSize(finalComment);

  return (
    <AbsoluteFill>
      {/* 音声 */}
      {scene.audioSrc && <Audio src={scene.audioSrc} />}

      {/* 1. 上部タイトルエリア */}
      <div style={{
        position: 'absolute',
        top: '5%',
        width: '100%',
        zIndex: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0px',
      }}>
        {/* 1行目: 中2数学 */}
        <PopText
          color="#E65100"
          strokeColor="#FFFFFF"
          fontSize={95}
          rotate={0}
          noAnimation={!isFirstScene}
          shadow={false}
        >
          中2数学
        </PopText>

        {/* 2行目: 二等辺三角形の超基本！ */}
        <div style={{ marginTop: '5px' }}>
          <PopText
            color="#E65100"
            strokeColor="#FFFFFF"
            fontSize={85}
            rotate={0}
            delay={5}
            noAnimation={!isFirstScene}
            shadow={false}
          >
            二等辺三角形の基本！
          </PopText>
        </div>
      </div>

      {/* 2. ホワイトボード（メインコンテンツ） */}
      <div style={{
        position: 'absolute',
        top: '20%',
        bottom: '24%',
        left: '0',
        right: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
      }}>
        <Whiteboard>
          <div style={{ width: '100%', height: '100%' }}>
            {(() => {
              if (scene.boardContent) {
                const content = typeof scene.boardContent === 'function' ? scene.boardContent() : scene.boardContent;
                return content;
              } else {
                console.error('boardContent is missing for scene:', scene.id);
                return null;
              }
            })()}
          </div>

          {/* オーバーレイテキスト */}
          {finalOverlayText && (
            <div style={{
              position: 'absolute',
              top: scene.overlayYOffset ? `calc(50% + ${scene.overlayYOffset}px)` : '50%',
              transform: 'translateY(-50%)',
              width: '100%',
              zIndex: 20
            }}>
              <PopText
                color="#fff"
                strokeColor={scene.overlayStrokeColor || "#FF5252"}
                fontSize={90}
                rotate={5}
                delay={15}
                shadow
                noAnimation={isOverlayContinuous}
              >
                {finalOverlayText}
              </PopText>
            </div>
          )}
        </Whiteboard>
      </div>

      {/* 3. キャラクター（右下） */}
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        right: '-20px',
        zIndex: 50,
        transform: 'scale(1.1)',
      }}>
        <Character isTalking={!!scene.audioSrc} />
      </div>

      {/* 4. 下部テキストエリア - 統一フォントサイズ、中央寄せ */}
      {showSubtitles && finalComment && (
        <div style={{
          position: 'absolute',
          bottom: finalCommentImportant ? '12%' : '12%',
          left: '2%',
          width: '70%',
          zIndex: 60,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '8px',
        }}>
          {finalComment.split('\n').filter(l => l.trim()).map((line, index, allLines) => {
            const isLastLine = index === allLines.length - 1;

            return (
              <div
                key={index}
                style={{
                  transform: finalCommentImportant && isLastLine ? 'rotate(-3deg)' : 'none',
                }}
              >
                <PopText
                  color={finalCommentColor || (finalCommentImportant && isLastLine ? "#FFEB3B" : "#1A237E")}
                  strokeColor={finalCommentImportant && isLastLine ? "#E53935" : "#FFFFFF"}
                  fontSize={finalCommentImportant && isLastLine ? unifiedFontSize * 2 : unifiedFontSize}
                  shadow={finalCommentImportant && isLastLine}
                  width="100%"
                  noAnimation={isCommentContinuous || !(finalCommentImportant && isLastLine)}
                  delay={finalCommentImportant && isLastLine && !isCommentContinuous ? 10 : 0}
                  rotate={0}
                >
                  <Latex>{line.replace(/\$([^$]+)\$/g, '$\\boldsymbol{$1}$')}</Latex>
                </PopText>
              </div>
            );
          })}
        </div>
      )}
    </AbsoluteFill>
  );
};