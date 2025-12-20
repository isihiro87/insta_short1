import React from 'react';
import { AbsoluteFill } from 'remotion';
import { Character } from '../../Character';

export type SubjectTheme = 'history' | 'science' | 'english' | 'math';

interface IchimonIttoBoardProps {
    question: string;
    answer: string;
    description?: string; // Supplement
    phase: 'question' | 'answer';
    subject?: SubjectTheme;
    currentQuestionIndex: number;
    totalQuestions: number;
    isTalking: boolean; // Controlled by parent
    timerProgress: number; // 0 to 1, controlled by parent
    title?: string;
}

// Simple, clean color schemes
export const themeColors: Record<SubjectTheme, { bg: string; accent: string; text: string }> = {
    history: { bg: '#FFF8E1', accent: '#FF9800', text: '#333' },
    science: { bg: '#E8F5E9', accent: '#4CAF50', text: '#333' },
    english: { bg: '#E3F2FD', accent: '#2196F3', text: '#333' },
    math: { bg: '#F3E5F5', accent: '#9C27B0', text: '#333' },
};

export const IchimonIttoBoard: React.FC<IchimonIttoBoardProps> = ({
    question,
    answer,
    description,
    phase,
    subject = 'history',
    currentQuestionIndex,
    totalQuestions,
    isTalking,
    timerProgress,
    title,
}) => {
    const theme = themeColors[subject];

    return (
        <AbsoluteFill style={{
            backgroundColor: theme.bg,
            fontFamily: 'Noto Sans JP, sans-serif',
            overflow: 'hidden',
        }}>
            {/* Main Content Area (Top 75%) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '75%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '40px',
                paddingTop: '60px', // Reduced top padding since timer is gone
                boxSizing: 'border-box',
                gap: '0px', // Gap handled by flex spacing
            }}>
                {/* Header Row: Title */}
                <div style={{
                    width: '100%',
                    padding: '0 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '60px', // Adjusted top margin
                    marginBottom: '40px',
                    flex: '0 0 auto',
                    position: 'relative',
                    height: 'auto',
                }}>
                    <div style={{
                        backgroundColor: '#FF9800', // Lighter Brown
                        borderRadius: '20px',
                        padding: '15px 40px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            fontSize: '90px',
                            fontWeight: 'bold',
                            color: '#FFF8E1', // Custom color
                            whiteSpace: 'nowrap',
                            textAlign: 'center',
                            lineHeight: '1.2',
                        }}>
                            中2　歴史
                        </div>
                        <div style={{
                            fontSize: '90px',
                            fontWeight: 'bold',
                            color: '#FFF8E1', // Custom color
                            whiteSpace: 'nowrap',
                            textAlign: 'center',
                            lineHeight: '1.2',
                        }}>
                            定期テスト対策
                        </div>
                    </div>
                </div>

                {/* 1. Question Section */}
                <div style={{
                    width: '100%',
                    flex: '1 1 auto', // Flexible height
                    display: 'flex',
                    alignItems: 'center', // Center vertically
                    justifyContent: 'center',
                    paddingBottom: '20px',
                    position: 'relative',
                }}>
                    <div style={{
                        fontSize: '75px',
                        fontWeight: 'bold',
                        color: theme.text,
                        textAlign: 'center',
                        lineHeight: '1.3',
                        whiteSpace: 'pre-wrap',
                    }}>
                        {`Q${currentQuestionIndex}. ${question}`}
                    </div>
                </div>

                {/* Gauge Section (Divider) */}
                <div style={{
                    width: '100%',
                    height: '24px', // Thicker
                    backgroundColor: 'white', // Background track "Initially white"
                    borderRadius: '12px', // Rounded ends
                    marginBottom: '20px',
                    overflow: 'hidden',
                    flex: '0 0 auto',
                    // Optional: Add a subtle border or shadow? Let's keep it simple first.
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: theme.accent,
                        // Logic: 1 - timerProgress (starts at 1->0, so we want 0->1)
                        // In answer phase, timerProgress is 0 from parent, so 1-0=1 (Full).
                        transform: `scaleX(${phase === 'question' ? (1 - timerProgress) : 1})`,
                        transformOrigin: 'left', // Grow from left
                        // transition removed for smooth rendering in Remotion
                    }} />
                </div>

                {/* 2. Answer Section */}
                <div style={{
                    width: '100%',
                    flex: '0 0 auto',
                    height: '200px', // Fixed height for answer area
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: phase === 'answer' ? '#E53935' : '#CCC',
                    transition: 'opacity 0.3s',
                    opacity: phase === 'answer' ? 1 : 0.6,
                }}>
                    <div style={{ fontSize: '40px', marginBottom: '5px', fontWeight: 'bold' }}>答え</div>
                    <div style={{
                        fontSize: '85px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        lineHeight: '1.2',
                    }}>
                        {phase === 'answer' ? answer : '？？？'}
                    </div>
                </div>

                {/* 3. Supplement Section */}
                {/* Note: In the original code, this was flex 1 5 0, effectively taking up remaining space.
                    Here we want to ensure it still fits without pushing things off.
                    Let's use flex-grow for it. */}
                <div style={{
                    width: '100%',
                    flex: '1 1 auto',
                    marginTop: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                }}>
                    <div style={{
                        width: '100%',
                        opacity: phase === 'answer' ? 1 : 0,
                        transition: 'opacity 0.3s',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <div style={{
                            fontSize: '40px',
                            color: theme.accent,
                            fontWeight: 'bold',
                            marginBottom: '10px',
                            width: '100%',
                            textAlign: 'left'
                        }}>
                            補足
                        </div>
                        <div style={{
                            fontSize: '50px',
                            color: '#333',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            width: '100%',
                            lineHeight: '1.4',
                            whiteSpace: 'pre-wrap',
                        }}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>

            {/* Character in Bottom Right Corner */}
            <div style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '450px',
                height: '450px',
                zIndex: 10,
                transform: 'translate(10%, 10%)',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
            }}>
                <Character isTalking={isTalking} />
            </div>
        </AbsoluteFill>
    );
};
