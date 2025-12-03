import React from 'react';
import { AbsoluteFill } from 'remotion';

export const SentenceBoard: React.FC<{
    englishText: React.ReactNode;
    japaneseText?: string;
    fontSize?: number;
}> = ({ englishText, japaneseText, fontSize = 80 }) => {
    return (
        <AbsoluteFill
            style={{
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'sans-serif',
            }}
        >
            {/* Japanese Text (Optional) */}
            {japaneseText && (
                <div style={{
                    fontSize: '50px',
                    marginBottom: '30px',
                    color: '#666',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    width: '90%',
                }}>
                    {japaneseText}
                </div>
            )}

            {/* English Text */}
            <div style={{
                fontSize: `${fontSize}px`,
                fontWeight: 'bold',
                color: '#333',
                textAlign: 'center',
                width: '90%',
                lineHeight: 1.2,
            }}>
                {englishText}
            </div>
        </AbsoluteFill>
    );
};
