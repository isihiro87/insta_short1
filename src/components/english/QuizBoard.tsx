import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

export const QuizBoard: React.FC<{ step: 'question' | 'answer'; japaneseText?: string; englishText?: string; imageSrc?: string; showTimer?: boolean }> = ({ step, japaneseText, englishText, imageSrc, showTimer }) => {
    const frame = useCurrentFrame();

    // Clock animation
    const rotation = (frame * 15) % 360; // Fast rotation

    // Parse englishText to handle blanks enclosed in []
    // Example: "Tom is [taller] [than] Ken."
    const renderEnglishText = () => {
        if (!englishText) return null;

        const parts = englishText.split(/(\[.*?\])/);
        return (
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                {parts.map((part, index) => {
                    if (part.startsWith('[') && part.endsWith(']')) {
                        const content = part.slice(1, -1);
                        return (
                            <div key={index} style={{
                                borderBottom: '4px solid #333',
                                minWidth: '150px',
                                padding: '0 10px',
                                textAlign: 'center',
                                color: step === 'answer' ? '#E91E63' : 'transparent',
                                transition: 'color 0.3s',
                            }}>
                                {content}
                            </div>
                        );
                    } else if (part.trim() !== '') {
                        return <div key={index}>{part}</div>;
                    }
                    return null;
                })}
            </div>
        );
    };

    return (
        <AbsoluteFill
            style={{
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '70px',
                fontWeight: 'bold',
                color: '#333',
                fontFamily: 'sans-serif',
            }}
        >
            {showTimer && (
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '150px',
                    height: '150px',
                }}>
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#E91E63" strokeWidth="5" />
                        <line
                            x1="50" y1="50" x2="50" y2="10"
                            stroke="#E91E63" strokeWidth="5"
                            strokeLinecap="round"
                            transform={`rotate(${rotation} 50 50)`}
                        />
                    </svg>
                </div>
            )}

            {imageSrc && (
                <div style={{ marginBottom: '20px', height: '300px' }}>
                    <img src={imageSrc} style={{ height: '100%', objectFit: 'contain' }} alt="Quiz illustration" />
                </div>
            )}

            {/* Japanese Text */}
            {japaneseText && (
                <>
                    <div style={{ fontSize: '60px', marginBottom: '20px', color: '#555' }}>
                        {japaneseText}
                    </div>
                    {/* Arrow */}
                    <div style={{
                        fontSize: '80px',
                        color: '#E91E63', // Red/Pink
                        marginBottom: '30px',
                        fontWeight: '900',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                    }}>
                        ↓
                    </div>
                </>
            )}

            {/* English Text */}
            {renderEnglishText()}
        </AbsoluteFill>
    );
};
