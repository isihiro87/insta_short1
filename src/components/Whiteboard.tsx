import React from 'react';

export const Whiteboard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{
      width: '90%',
      height: '90%',
      backgroundColor: '#fff',
      borderRadius: '35px',
      boxShadow: `
        0 20px 50px rgba(0,0,0,0.15), 
        0 4px 0px #e0e0e0,
        inset 0 0 60px rgba(0,0,0,0.02)
      `,
      border: '8px solid #f0f0f0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', // 上から配置
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '20px',
    }}>

      {children}

      {/* 装飾: 下部のマーカー置き場 */}
      <div style={{
        position: 'absolute',
        bottom: '15px',
        right: '30px',
        display: 'flex',
        gap: '5px',
        opacity: 0.8,
      }}>
        {/* マーカー3本 */}
        {['#FF6B6B', '#4ECDC4', '#45B7D1'].map((c, i) => (
          <div key={i} style={{
            width: '40px',
            height: '12px',
            backgroundColor: c,
            borderRadius: '6px',
            boxShadow: '1px 1px 3px rgba(0,0,0,0.2)',
            transform: `rotate(${i % 2 === 0 ? -5 : 5}deg)`
          }} />
        ))}
      </div>
    </div>
  );
};