import React from 'react';
import { Img } from 'remotion';

// --- Shared Styles ---
const containerStyle: React.CSSProperties = {
    fontFamily: 'Noto Sans JP, sans-serif',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    paddingTop: '20px',
    boxSizing: 'border-box',
    position: 'relative', // Added for absolute positioning of children like SpeechBubble
};

// --- Shared Speech Bubble ---
const SpeechBubble: React.FC<{ content: React.ReactNode }> = ({ content }) => {
    if (!content) return null;
    return (
        <div style={{
            position: 'absolute',
            bottom: '-220px', // Matches CommonLessonBoard
            right: '280px',
            backgroundColor: 'white',
            padding: '24px',
            borderRadius: '36px',
            border: '5px solid #333',
            fontSize: '60px',
            fontWeight: 'bold',
            color: '#333',
            zIndex: 100,
            boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
            width: '620px',
            minHeight: '168px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            lineHeight: '1.3',
        }}>
            {content}
            {/* Tail */}
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '-24px',
                marginTop: '-10px',
                width: '0',
                height: '0',
                borderTop: '15px solid transparent',
                borderBottom: '15px solid transparent',
                borderLeft: '24px solid #333',
            }} />
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '-18px',
                marginTop: '-10px',
                width: '0',
                height: '0',
                borderTop: '15px solid transparent',
                borderBottom: '15px solid transparent',
                borderLeft: '24px solid white',
            }} />
        </div>
    );
};



const titleStyle: React.CSSProperties = {
    fontSize: '80px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#E65100', // Orange-ish for history emphasis
};

// --- 2. Hero Profile Layout ---

interface HeroProfileProps {
    imageSrc?: string;
    name: string;
    description: string; // e.g., "江戸幕府 初代将軍 1543-1616"
    catchphrase?: string;
    achievements: string[];
    reserveCatchphraseSpace?: boolean;
    speechBubble?: React.ReactNode;
}

export const HeroProfileLayout: React.FC<HeroProfileProps> = ({
    imageSrc,
    name,
    description,
    catchphrase,
    achievements,
    reserveCatchphraseSpace = false,
    speechBubble,
}) => {
    return (
        <div style={containerStyle}>
            {/* 1. Name and Details (Top) */}
            <div style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '10px'
            }}>
                <div style={{
                    width: '95%',
                    color: '#333',
                    padding: '10px 0',
                    textAlign: 'center',
                    marginBottom: '10px'
                }}>
                    <div style={{ fontSize: '80px', fontWeight: 'bold', color: '#E65100' }}>{name}</div>
                    <div style={{ fontSize: '38px' }}>{description}</div>
                </div>

                {/* Catchphrase Area */}
                {(catchphrase || reserveCatchphraseSpace) && (
                    <div style={{
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#D84315',
                        textAlign: 'center',
                        backgroundColor: '#FFCC80',
                        padding: '5px 30px',
                        marginBottom: '10px',
                        visibility: catchphrase ? 'visible' : 'hidden',
                    }}>
                        “{catchphrase || 'Placeholder'}”
                    </div>
                )}
            </div>

            {/* 2. Image (Middle) */}
            <div style={{
                height: '480px', // Fixed height to prevent resizing when content is added
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '10px',
                flexShrink: 0,
            }}>
                {imageSrc ? (
                    <Img src={imageSrc} style={{ maxHeight: '100%', maxWidth: '90%', objectFit: 'contain' }} alt={name} />
                ) : (
                    <div style={{ width: '200px', height: '200px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', color: '#888', border: '5px solid #ccc' }}>
                        画像なし
                    </div>
                )}
            </div>

            {/* 3. Achievement List (Bottom) */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                width: '90%',
                marginBottom: '20px'
            }}>
                {achievements.map((item, index) => (
                    <div key={index} style={{
                        fontSize: '50px',
                        backgroundColor: 'white',
                        padding: '10px 20px',
                        borderRadius: '12px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        borderLeft: '5px solid #FF9800'
                    }}>
                        {item}
                    </div>
                ))}
            </div>

            <SpeechBubble content={speechBubble} />
        </div>
    );
};


// --- 3. VS Comparison Layout ---

interface VsItem {
    name: string;
    imageSrc?: string;
    description: string;
    color?: string;
}

interface VsComparisonProps {
    battleTitle: string;
    itemA: VsItem;
    itemB: VsItem;
    summary: string;
    speechBubble?: React.ReactNode;
}

export const VsComparisonLayout: React.FC<VsComparisonProps> = ({
    battleTitle,
    itemA,
    itemB,
    summary,
    speechBubble,
}) => {
    return (
        <div style={containerStyle}>
            <div style={titleStyle}>{battleTitle}</div>

            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                gap: '10px'
            }}>
                {/* Item A (Top) */}
                <div style={{
                    flex: 1,
                    backgroundColor: itemA.color || '#E3F2FD',
                    borderRadius: '20px',
                    padding: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '90%',
                    alignSelf: 'center',
                    border: '3px solid #BBDEFB'
                }}>
                    {/* Image Left */}
                    <div style={{ width: '120px', height: '120px', flexShrink: 0, marginRight: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '10px' }}>
                        {itemA.imageSrc ? <Img src={itemA.imageSrc} style={{ maxWidth: '100%', maxHeight: '100%' }} /> : <span style={{ fontSize: '12px' }}>No Img</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '56px', fontWeight: 'bold' }}>{itemA.name}</div>
                        <div style={{ fontSize: '42px' }}>{itemA.description}</div>
                    </div>
                </div>

                {/* VS Icon */}
                <div style={{
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '48px',
                    fontWeight: '900',
                    color: '#D32F2F',
                    fontStyle: 'italic',
                    zIndex: 10
                }}>
                    VS
                </div>

                {/* Item B (Bottom) */}
                <div style={{
                    flex: 1,
                    backgroundColor: itemB.color || '#FBE9E7',
                    borderRadius: '20px',
                    padding: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    width: '90%',
                    alignSelf: 'center',
                    border: '3px solid #FFCCBC'
                }}>
                    {/* Image Left */}
                    <div style={{ width: '120px', height: '120px', flexShrink: 0, marginRight: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '10px' }}>
                        {itemB.imageSrc ? <Img src={itemB.imageSrc} style={{ maxWidth: '100%', maxHeight: '100%' }} /> : <span style={{ fontSize: '12px' }}>No Img</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '56px', fontWeight: 'bold' }}>{itemB.name}</div>
                        <div style={{ fontSize: '42px' }}>{itemB.description}</div>
                    </div>
                </div>
            </div>

            {/* Summary */}
            <div style={{
                marginTop: '20px',
                padding: '20px',
                backgroundColor: '#FFF3E0',
                border: '2px dashed #FF9800',
                borderRadius: '15px',
                fontSize: '48px',
                fontWeight: 'bold',
                width: '90%',
                textAlign: 'center'
            }}>
                💡 {summary}
            </div>

            <SpeechBubble content={speechBubble} />
        </div>
    );
};

// --- 4. Cause & Effect Layout ---

interface CauseStep {
    label: string; // "原因", "展開", "結果" etc.
    content: string;
    imageSrc?: string;
}

interface CauseEffectProps {
    steps: [CauseStep, CauseStep, CauseStep]; // Exactly 3 steps
    speechBubble?: React.ReactNode;
}

export const CauseEffectLayout: React.FC<CauseEffectProps> = ({ steps, speechBubble }) => {
    return (
        <div style={containerStyle}>
            <div style={{ width: '90%', display: 'flex', flexDirection: 'column', gap: '0px' }}>
                {steps.map((step, index) => (
                    <React.Fragment key={index}>
                        {/* Step Card */}
                        <div style={{
                            display: 'flex',
                            backgroundColor: 'white',
                            borderRadius: '15px',
                            padding: '15px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            borderLeft: `10px solid ${index === 2 ? '#D32F2F' : '#1976D2'}`, // Highlight Result
                            alignItems: 'center',
                            minHeight: '180px'
                        }}>
                            <div style={{ width: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '15px' }}>
                                <div style={{ fontSize: '36px', color: '#666', marginBottom: '5px' }}>{step.label}</div>
                                <div style={{ width: '100px', height: '100px', backgroundColor: '#F5F5F5', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px' }}>
                                    {step.imageSrc ? <Img src={step.imageSrc} style={{ maxWidth: '100%', maxHeight: '100%' }} /> : <span style={{ fontSize: '10px' }}>No Img</span>}
                                </div>
                            </div>
                            <div style={{ flex: 1, fontSize: '52px', fontWeight: 'bold', lineHeight: '1.4' }}>
                                {step.content}
                            </div>
                        </div>

                        {/* Arrow (except after last) */}
                        {index < 2 && (
                            <div style={{ textAlign: 'center', fontSize: '40px', color: '#aaa', margin: '-10px 0', zIndex: 1 }}>
                                ⬇
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <SpeechBubble content={speechBubble} />
        </div>
    );
};

// --- 5. Mnemonic Layout ---

interface MnemonicProps {
    year: string;
    mnemonicText: string;
    imageSrc?: string;
    speechBubble?: React.ReactNode;
}

export const MnemonicLayout: React.FC<MnemonicProps> = ({
    year,
    mnemonicText,
    imageSrc,
    speechBubble,
}) => {
    return (
        <div style={containerStyle}>
            {/* Giant Year */}
            <div style={{
                fontSize: '180px',
                fontWeight: '900',
                color: '#E65100', // Deep Orange
                lineHeight: '1',
                marginTop: '20px',
                textShadow: '4px 4px 0px #FFCC80'
            }}>
                {year}
            </div>

            {/* Illustration */}
            <div style={{
                flex: 1,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '20px 0'
            }}>
                <div style={{
                    width: '90%',
                    height: '100%',
                    maxHeight: '400px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    border: '4px solid #333',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}>
                    {imageSrc ? (
                        <Img src={imageSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <div style={{ fontSize: '30px', color: '#ccc' }}>（面白い絵）</div>
                    )}
                </div>
            </div>

            {/* Mnemonic Text */}
            <div style={{
                fontSize: '56px',
                fontWeight: 'bold',
                textAlign: 'center',
                backgroundColor: '#FFF176', // Yellow
                padding: '20px 40px',
                marginBottom: '40px',
                borderRadius: '50px',
                width: '90%',
                boxShadow: '0 5px 0px #FDD835',
                color: '#333'
            }}>
                {mnemonicText}
            </div>

            <SpeechBubble content={speechBubble} />
        </div>
    );
};

// --- 6. Quiz Layout ---

interface QuizProps {
    question: string;
    options: string[]; // Array of choice texts
    correctIndex: number; // 0-3 index of the correct answer
    isAnswerPhase?: boolean; // If true, highlight the correct answer
    speechBubble?: React.ReactNode;
}

export const QuizLayout: React.FC<QuizProps> = ({
    question,
    options,
    correctIndex,
    isAnswerPhase = false,
    speechBubble,
}) => {
    return (
        <div style={containerStyle}>
            {/* Question Section */}
            <div style={{
                width: '90%',
                backgroundColor: '#E3F2FD',
                border: '5px solid #2196F3',
                borderRadius: '20px',
                padding: '30px',
                marginBottom: '40px',
                textAlign: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '200px', // Ensure enough space for 2-3 lines
            }}>
                <div style={{
                    fontSize: '48px',
                    fontWeight: 'bold',
                    lineHeight: '1.4',
                    color: '#0D47A1'
                }}>
                    Q. {question}
                </div>
            </div>

            {/* Options Section */}
            <div style={{
                width: '90%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}>
                {options.map((option, index) => {
                    const isCorrect = index === correctIndex;
                    // Style logic for answer phase
                    let bgColor = 'white';
                    let borderColor = '#ccc';
                    let textColor = '#333';
                    let opacity = 1;

                    if (isAnswerPhase) {
                        if (isCorrect) {
                            bgColor = '#FFEB3B'; // Yellow highlight
                            borderColor = '#FBC02D';
                            textColor = '#D50000'; // Red text
                        } else {
                            opacity = 0.5; // Dim incorrect answers
                        }
                    }

                    const labels = ['①', '②', '③', '④']; // Standard labels

                    return (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: bgColor,
                            border: `4px solid ${borderColor}`,
                            borderRadius: '15px',
                            padding: '20px 30px',
                            fontSize: '42px',
                            fontWeight: 'bold',
                            color: textColor,
                            opacity: opacity,
                            transition: 'all 0.3s ease',
                            boxShadow: isAnswerPhase && isCorrect ? '0 0 20px #FFEB3B' : '0 4px 6px rgba(0,0,0,0.05)',
                        }}>
                            <span style={{ marginRight: '20px', color: '#1976D2' }}>{labels[index]}</span>
                            {option}
                            {isAnswerPhase && isCorrect && (
                                <span style={{ marginLeft: 'auto', fontSize: '50px', color: '#D50000' }}>⭕</span>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Answer Text Overlay (Optional, for extra clarity) */}
            {isAnswerPhase && (
                <div style={{
                    marginTop: '30px',
                    fontSize: '60px',
                    fontWeight: '900',
                    color: '#D50000',
                    textShadow: '3px 3px 0px white, 0 0 10px rgba(255,0,0,0.5)',
                    animation: 'pop 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
                }}>
                    正解は {options[correctIndex]}！
                </div>
            )}

            <SpeechBubble content={speechBubble} />
        </div>
    );
};
