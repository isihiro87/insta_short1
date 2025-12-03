import React from 'react';
import { AbsoluteFill } from 'remotion';

export const RhythmBoard: React.FC<{ count: number; sentence?: React.ReactNode; japaneseTranslation?: string }> = ({ count, sentence, japaneseTranslation }) => {

    return (
        <AbsoluteFill
            style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '70px',
                fontWeight: 'bold',
                color: '#333',
                fontFamily: 'sans-serif',
            }}
        >
            <div style={{
                textAlign: 'center',
                padding: '20px',
                border: '5px solid #4DD0E1',
                borderRadius: '30px',
                backgroundColor: '#E0F7FA',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}>
                {japaneseTranslation && (
                    <div style={{ fontSize: '40px', color: '#555' }}>
                        {japaneseTranslation}
                    </div>
                )}
                <div>
                    {sentence || <span>Tom is <span style={{ color: '#E91E63' }}>taller</span> than Ken.</span>}
                </div>
            </div>
        </AbsoluteFill>
    );
};
