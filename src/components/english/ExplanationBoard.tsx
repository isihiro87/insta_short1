import React from 'react';
import { AbsoluteFill } from 'remotion';

type Step = 'intro' | 'rule' | 'meaning_er' | 'meaning_than' | 'be_verb';

export const ExplanationBoard: React.FC<{ step: Step }> = ({ step }) => {
    const containerStyle: React.CSSProperties = {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '60px',
        fontWeight: 'bold',
        color: '#333',
        fontFamily: 'sans-serif',
        padding: '40px',
        textAlign: 'center',
    };

    return (
        <AbsoluteFill style={containerStyle}>
            {step === 'intro' && (
                <>
                    <div style={{ fontSize: '80px', marginBottom: '40px' }}>A is B</div>
                    <div style={{ fontSize: '40px', color: '#666' }}>to</div>
                    <div style={{ fontSize: '80px', marginTop: '40px' }}>A is <span style={{ color: '#E91E63' }}>B-er</span> than ...</div>
                </>
            )}

            {step === 'rule' && (
                <>
                    <div style={{ fontSize: '70px' }}>
                        B <span style={{ color: '#E91E63' }}>+ er</span>
                    </div>
                    <div style={{ fontSize: '50px', margin: '30px 0' }}>+</div>
                    <div style={{ fontSize: '70px', color: '#E91E63' }}>than</div>
                </>
            )}

            {step === 'meaning_er' && (
                <>
                    <div style={{ marginBottom: '60px' }}>
                        <div>tall</div>
                        <div style={{ fontSize: '40px', color: '#666' }}>背が高い</div>
                    </div>
                    <div style={{ borderTop: '2px solid #ccc', paddingTop: '60px' }}>
                        <div>tall<span style={{ color: '#E91E63' }}>er</span></div>
                        <div style={{ fontSize: '40px', color: '#666' }}>
                            <span style={{ color: '#E91E63' }}>誰かと比べて</span>背が高い
                        </div>
                    </div>
                </>
            )}

            {step === 'meaning_than' && (
                <>
                    <div style={{ fontSize: '80px', marginBottom: '40px' }}>
                        than = <span style={{ color: '#E91E63' }}>よりも</span>
                    </div>
                    <div style={{ fontSize: '60px', marginTop: '40px' }}>
                        than Ken<br />
                        <span style={{ fontSize: '50px', color: '#666' }}>ケンよりも</span>
                    </div>
                </>
            )}

            {step === 'be_verb' && (
                <>
                    <div style={{ display: 'flex', gap: '40px', marginBottom: '60px' }}>
                        <div style={{ padding: '20px', border: '4px solid #333', borderRadius: '20px' }}>is</div>
                        <div style={{ padding: '20px', border: '4px solid #333', borderRadius: '20px' }}>am</div>
                        <div style={{ padding: '20px', border: '4px solid #333', borderRadius: '20px' }}>are</div>
                    </div>
                    <div style={{ fontSize: '50px' }}>考え方は同じ！</div>
                </>
            )}
        </AbsoluteFill>
    );
};
