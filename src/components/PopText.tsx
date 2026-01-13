import React from 'react';
import { useCurrentFrame, spring, useVideoConfig } from 'remotion';

type PopTextProps = {
  children: React.ReactNode;
  color: string;
  strokeColor?: string;
  fontSize: number;
  rotate?: number;
  delay?: number;
  noAnimation?: boolean;
  simpleAnimation?: boolean;
  width?: string | number;
  shadow?: boolean; // 新機能: ドロップシャドウの有無
};

export const PopText: React.FC<PopTextProps> = ({
  children,
  color,
  strokeColor = '#000',
  fontSize,
  rotate = 0,
  delay = 0,
  noAnimation = false,
  simpleAnimation = false,
  width = 'auto',
  shadow = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  let scale = 1;
  let opacity = 1;

  const actualFrame = Math.max(0, frame - delay);

  if (noAnimation) {
    scale = 1;
    opacity = 1;
  } else if (simpleAnimation) {
    opacity = Math.min(1, actualFrame / 10);
    scale = 1;
  } else {
    scale = spring({
      frame: actualFrame,
      fps,
      config: { damping: 12, stiffness: 200 }
    });
  }

  const commonStyle: React.CSSProperties = {
    fontFamily: '"Noto Sans JP", sans-serif',
    fontSize: fontSize,
    lineHeight: 1.2,
    whiteSpace: 'pre-wrap',
    fontWeight: 900,
    textAlign: 'center',
    width: '100%',
  };

  return (
    <div style={{
      position: 'relative',
      width: width,
      display: 'flex',
      justifyContent: 'center',
      transform: `scale(${scale}) rotate(${rotate}deg)`,
      opacity: opacity,
      zIndex: 10,
    }}>
      {/* 影レイヤー（shadowがtrueの場合のみ） */}
      {shadow && (
        <div style={{
          ...commonStyle,
          position: 'absolute',
          top: '4px',
          left: '4px',
          color: 'rgba(0,0,0,0.2)',
          WebkitTextStroke: '12px rgba(0,0,0,0.2)',
          zIndex: 0,
        }}>
          {children}
        </div>
      )}

      {/* 背面：縁取り用 */}
      <div style={{
        ...commonStyle,
        position: 'relative',
        color: strokeColor,
        WebkitTextStroke: '12px ' + strokeColor,
        zIndex: 1,
      }}>
        {children}
      </div>

      {/* 前面：メインカラー */}
      <div style={{
        ...commonStyle,
        position: 'absolute',
        top: 0,
        left: 0,
        color: color,
        WebkitTextStroke: '0px transparent', // 内側は縁取りなし
        zIndex: 2,
      }}>
        {children}
      </div>
    </div>
  );
};