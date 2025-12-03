import React from 'react';
import { AbsoluteFill, useCurrentFrame } from 'remotion';

interface EnglishLessonBoardProps {
    step?: 'title' | 'word';
    topic?: string;
    sentences?: (string | React.ReactNode)[];
    explanation?: string | React.ReactNode;
    imageSrc?: string;
    sentenceDelay?: number;
    showTimer?: boolean;

    // Legacy props
    mainTitle?: string;
    subTitle?: string;
    word?: string;
    japanese?: string;
    comparative?: string;
    superlative?: string;

    // New props for the specific design
    japaneseText?: string | React.ReactNode;
    englishText?: string | React.ReactNode;
    words?: string[];
    subTopic?: string;
    formula?: React.ReactNode;
    bottomComment?: React.ReactNode;
    speechBubble?: React.ReactNode;

    // New layout props
    layout?: 'standard' | 'symmetrical' | 'vertical-split' | 'horizontal-split' | 'vertical-list' | 'quiz-choices' | 'table' | 'timeline' | 'dialogue';
    centerSymbol?: React.ReactNode;
    topContent?: React.ReactNode;
    bottomContent?: React.ReactNode;
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;

    // Advanced Image Props
    leftImageSrc?: string;
    rightImageSrc?: string;
    topImageSrc?: string;
    bottomImageSrc?: string;

    // Props for specific new layouts
    items?: (string | React.ReactNode)[];
    choices?: string[];
    tableData?: string[][];
    timelineEvents?: { label: string; text: string }[];
    dialogueLines?: { speaker: string; text: string; side: 'left' | 'right'; icon?: string }[];
    themeText?: string | React.ReactNode;
}

// Helper to extract text length from ReactNode
const getTextLength = (node: string | React.ReactNode): number => {
    if (typeof node === 'string') return node.length;
    if (typeof node === 'number') return String(node).length;
    if (!node) return 0;

    if (Array.isArray(node)) {
        return node.reduce((acc, child) => acc + getTextLength(child), 0);
    }

    if (React.isValidElement(node)) {
        const props = node.props as { children?: React.ReactNode };
        return getTextLength(props.children);
    }

    return 0;
};

// Helper to calculate dynamic font size number
const calculateFontSize = (
    text: string | React.ReactNode,
    maxSize: number,
    minSize: number = 30,
    charsAtMax: number = 10
): number => {
    const length = getTextLength(text);
    if (length === 0) return maxSize;

    // Target size calculation
    // Formula: (charsAtMax / length) * maxSize
    let targetSize = Math.floor((charsAtMax / length) * maxSize * 1.2);
    return Math.min(maxSize, Math.max(minSize, targetSize));
};

// Helper to calculate dynamic style
const getDynamicStyle = (
    text: string | React.ReactNode,
    maxSize: number,
    minSize: number = 30,
    charsAtMax: number = 10 // How many chars fit at max size?
): React.CSSProperties => {
    const fontSize = calculateFontSize(text, maxSize, minSize, charsAtMax);
    const isMinSize = fontSize <= minSize;

    return {
        fontSize: `${fontSize}px`,
        whiteSpace: isMinSize ? 'normal' : 'nowrap', // Wrap if at min size, else nowrap
        wordBreak: isMinSize ? 'break-word' : 'normal',
        lineHeight: '1.3',
    };
};

export const EnglishLessonBoard: React.FC<EnglishLessonBoardProps> = ({
    step,
    topic,
    sentences,
    explanation,
    imageSrc,
    sentenceDelay = 0,
    showTimer = false,
    mainTitle,
    subTitle,
    word,
    japanese,
    comparative,
    superlative,
    japaneseText,
    englishText,
    words,
    subTopic,
    formula,
    bottomComment,
    speechBubble,
    layout = 'standard',
    centerSymbol,
    topContent,
    bottomContent,
    leftContent,
    rightContent,
    leftImageSrc,
    rightImageSrc,
    topImageSrc,
    bottomImageSrc,
    items,
    choices,
    tableData,
    timelineEvents,
    dialogueLines,
    themeText,
}) => {
    const frame = useCurrentFrame();

    // Legacy rendering
    if (step === 'word' || (step === 'title' && !sentences && !japaneseText && !englishText && !formula && layout === 'standard')) {
        return (
            <AbsoluteFill
                style={{
                    backgroundColor: '#FFF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontFamily: 'Noto Sans JP',
                    color: '#333',
                }}
            >
                {imageSrc && (
                    <div style={{ marginBottom: '20px', height: '200px' }}>
                        <img src={imageSrc} style={{ height: '100%', objectFit: 'contain' }} alt="Lesson illustration" />
                    </div>
                )}

                {step === 'title' && (
                    <>
                        <div style={{ fontSize: '60px', fontWeight: 'bold', marginBottom: '20px' }}>{mainTitle}</div>
                        <div style={{ fontSize: '40px', color: '#666' }}>{subTitle}</div>
                    </>
                )}

                {step === 'word' && (
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '80px', fontWeight: 'bold', marginBottom: '10px' }}>{word}</div>
                        <div style={{ fontSize: '40px', color: '#666', marginBottom: '40px' }}>{japanese}</div>
                        <div style={{ display: 'flex', gap: '40px', fontSize: '50px' }}>
                            <div>
                                <div style={{ fontSize: '30px', color: '#888', marginBottom: '5px' }}>比較級</div>
                                <div style={{ color: '#E91E63', fontWeight: 'bold' }}>{comparative}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '30px', color: '#888', marginBottom: '5px' }}>最上級</div>
                                <div style={{ color: '#E91E63', fontWeight: 'bold' }}>{superlative}</div>
                            </div>
                        </div>
                    </div>
                )}
            </AbsoluteFill>
        );
    }

    const rotation = (frame * 15) % 360;

    const renderContent = () => {
        switch (layout) {
            case 'vertical-list':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        gap: '30px',
                        padding: '20px',
                    }}>
                        {items?.map((item, index) => (
                            <div key={index} style={{
                                ...getDynamicStyle(item, 60, 30, 20), // Max 60, Min 30, 20 chars fit
                                fontWeight: 'bold',
                                color: '#333',
                                backgroundColor: '#F5F5F5',
                                padding: '20px 40px',
                                borderRadius: '15px',
                                width: '95%',
                                textAlign: 'left',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            }}>
                                {item}
                            </div>
                        ))}
                    </div>
                );
            case 'quiz-choices':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%', // Restore full height
                        justifyContent: 'space-between', // Push content apart
                        paddingBottom: '20px', // Add some bottom padding
                    }}>
                        {/* Top Section: Image + Question */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            flex: 1, // Take up remaining space
                        }}>
                            {/* Image for Quiz - Centered in available space */}
                            <div style={{
                                flex: '0 0 auto', // Don't force take space
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center', // Center vertically
                                justifyContent: 'center', // Center horizontally
                                padding: '0', // Reduced padding
                                marginBottom: '10px', // Small margin
                            }}>
                                {imageSrc && (
                                    <img src={imageSrc} style={{ maxHeight: '220px', objectFit: 'contain' }} alt="Quiz illustration" />
                                )}
                            </div>

                            {/* Question Area */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '30px',
                                width: '100%',
                                paddingBottom: '20px', // Add spacing between question and choices
                            }}>
                                {japaneseText && (
                                    <div style={{
                                        ...getDynamicStyle(japaneseText, 60, 30, 12),
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        width: '90%',
                                    }}>
                                        {japaneseText}
                                    </div>
                                )}
                                {englishText && (
                                    <div style={{
                                        ...getDynamicStyle(englishText, 80, 35, 15),
                                        fontWeight: 'bold',
                                        fontFamily: 'Roboto, sans-serif',
                                        textAlign: 'center',
                                        width: '90%',
                                    }}>
                                        {englishText}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Choices Area */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            flexWrap: 'wrap', // Allow wrapping
                            gap: '20px', // Reduced gap for wrapping
                            width: '100%',
                            padding: '20px',
                            backgroundColor: '#FAFAFA',
                            borderTop: '2px solid #eee',
                            borderRadius: '20px', // Add border radius for better look
                        }}>
                            {choices?.map((choice, index) => (
                                <div key={index} style={{
                                    ...getDynamicStyle(choice, 45, 25, 10), // Slightly smaller max size
                                    fontWeight: 'bold',
                                    padding: '15px 30px',
                                    backgroundColor: 'white',
                                    border: '4px solid #E91E63',
                                    borderRadius: '60px',
                                    color: '#E91E63',
                                    minWidth: '180px',
                                    maxWidth: '45%', // Ensure 2 per row if wrapping
                                    textAlign: 'center',
                                    boxShadow: '0 4px 8px rgba(233, 30, 99, 0.2)',
                                    flex: '1 0 auto', // Allow growing but respect basis
                                }}>
                                    {choice}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'table':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '20px',
                        height: '100%',
                    }}>
                        <table style={{
                            width: '95%',
                            borderCollapse: 'collapse',
                            textAlign: 'center',
                        }}>
                            <tbody>
                                {tableData?.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex} style={{
                                                border: '3px solid #ddd',
                                                padding: '20px',
                                                backgroundColor: rowIndex === 0 ? '#E3F2FD' : 'white',
                                                fontWeight: rowIndex === 0 ? 'bold' : 'normal',
                                                ...getDynamicStyle(cell, 50, 25, 10), // Adjust for table cells
                                            }}>
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                );
            case 'timeline':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: '100%',
                        height: '100%',
                        padding: '40px',
                        position: 'relative',
                    }}>
                        {/* Timeline Line */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50px',
                            right: '50px',
                            height: '6px',
                            backgroundColor: '#333',
                            zIndex: 0,
                        }} />
                        {timelineEvents?.map((event, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                zIndex: 1,
                                backgroundColor: 'white',
                                padding: '15px',
                            }}>
                                <div style={{ fontSize: '36px', color: '#666', marginBottom: '15px' }}>{event.label}</div>
                                <div style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    backgroundColor: '#E91E63',
                                    marginBottom: '15px',
                                }} />
                                <div style={{
                                    ...getDynamicStyle(event.text, 50, 30, 10),
                                    fontWeight: 'bold',
                                }}>
                                    {event.text}
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'dialogue':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        padding: '40px',
                        gap: '40px',
                        justifyContent: 'center',
                    }}>
                        {dialogueLines?.map((line, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                flexDirection: line.side === 'left' ? 'row' : 'row-reverse',
                                alignItems: 'flex-start',
                                gap: '25px',
                            }}>
                                {/* Icon Placeholder */}
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    backgroundColor: line.side === 'left' ? '#E3F2FD' : '#FCE4EC',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '40px',
                                    fontWeight: 'bold',
                                    color: '#555',
                                    border: '3px solid #ccc',
                                    flexShrink: 0,
                                }}>
                                    {line.speaker[0]}
                                </div>
                                {/* Bubble */}
                                <div style={{
                                    backgroundColor: line.side === 'left' ? '#F5F5F5' : '#E1F5FE',
                                    padding: '25px 40px',
                                    borderRadius: '25px',
                                    borderTopLeftRadius: line.side === 'left' ? '0' : '25px',
                                    borderTopRightRadius: line.side === 'right' ? '0' : '25px',
                                    maxWidth: '75%',
                                    boxShadow: '0 3px 6px rgba(0,0,0,0.08)',
                                    ...getDynamicStyle(line.text, 50, 30, 20),
                                }}>
                                    <div style={{ fontSize: '28px', color: '#888', marginBottom: '8px' }}>{line.speaker}</div>
                                    <div>{line.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            case 'symmetrical':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: '100%',
                        padding: '0 30px',
                    }}>
                        <div style={{
                            flex: 1,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            ...getDynamicStyle(englishText || leftContent, 80, 40, 10),
                        }}>
                            {englishText || leftContent}
                        </div>
                        <div style={{ width: '120px', textAlign: 'center', fontSize: '80px', color: '#E91E63' }}>
                            {centerSymbol || '⇔'}
                        </div>
                        <div style={{
                            flex: 1,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            ...getDynamicStyle(japaneseText || rightContent, 70, 35, 10),
                        }}>
                            {japaneseText || rightContent}
                        </div>
                    </div>
                );
            case 'vertical-split':
                // Calculate unified font size for top and bottom
                // Increased maxSize to 100 as requested
                const topSize = calculateFontSize(topContent, 100, 30, 10);
                const bottomSize = calculateFontSize(bottomContent, 100, 30, 10);
                const unifiedSize = Math.min(topSize, bottomSize);
                const isMinSize = unifiedSize <= 30;

                const unifiedStyle: React.CSSProperties = {
                    fontSize: `${unifiedSize}px`,
                    whiteSpace: isMinSize ? 'normal' : 'nowrap',
                    wordBreak: isMinSize ? 'break-word' : 'normal',
                    lineHeight: '1.3',
                    textAlign: 'center',
                    width: '90%',
                };

                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                    }}>
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row', // Changed to row for side-by-side image
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: '4px dashed #ccc',
                            padding: '20px',
                            backgroundColor: '#FFEBEE',
                            gap: '20px',
                        }}>
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                <div style={unifiedStyle}>
                                    {topContent}
                                </div>
                            </div>
                            {topImageSrc && (
                                <div style={{ width: '250px', display: 'flex', justifyContent: 'center' }}>
                                    <img src={topImageSrc} style={{ maxHeight: '180px', maxWidth: '100%', objectFit: 'contain' }} alt="Top illustration" />
                                </div>
                            )}
                        </div>
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row', // Changed to row for side-by-side image
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px',
                            backgroundColor: '#E8F5E9',
                            gap: '20px',
                        }}>
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                <div style={unifiedStyle}>
                                    {bottomContent}
                                </div>
                            </div>
                            {bottomImageSrc && (
                                <div style={{ width: '250px', display: 'flex', justifyContent: 'center' }}>
                                    <img src={bottomImageSrc} style={{ maxHeight: '180px', maxWidth: '100%', objectFit: 'contain' }} alt="Bottom illustration" />
                                </div>
                            )}
                        </div>
                    </div>
                );
            case 'horizontal-split':
                return (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                    }}>
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                        }}>
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRight: '4px solid #ccc',
                                padding: '20px',
                            }}>
                                {leftImageSrc && (
                                    <div style={{ marginBottom: '20px', maxHeight: '150px' }}>
                                        <img src={leftImageSrc} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} alt="Left illustration" />
                                    </div>
                                )}
                                <div style={{
                                    ...getDynamicStyle(leftContent, 90, 30, 8), // Increased max size, fewer chars at max
                                    textAlign: 'center',
                                    width: '90%',
                                }}>
                                    {leftContent}
                                </div>
                            </div>
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px',
                            }}>
                                {rightImageSrc && (
                                    <div style={{ marginBottom: '20px', maxHeight: '150px' }}>
                                        <img src={rightImageSrc} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} alt="Right illustration" />
                                    </div>
                                )}
                                <div style={{
                                    ...getDynamicStyle(rightContent, 90, 30, 8), // Increased max size, fewer chars at max
                                    textAlign: 'center',
                                    width: '90%',
                                }}>
                                    {rightContent}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'standard':
            default:
                return (
                    <div style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        {/* Theme/Title Box */}
                        {themeText && (
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '5px', // Reduced margin
                                zIndex: 5,
                            }}>
                                <div style={{
                                    border: '4px solid #F06292', // Pink to match subTopic
                                    borderRadius: '20px',
                                    padding: '25px 40px', // Increased vertical padding (approx 1.25x of 15px is ~19px, setting to 25px for clear effect)
                                    backgroundColor: '#fff',
                                    textAlign: 'center',
                                    fontSize: '40px', // Larger font
                                    fontWeight: 'bold',
                                    color: '#333',
                                    boxShadow: '0 4px 0 rgba(0,0,0,0.1)',
                                    whiteSpace: 'pre-wrap',
                                    lineHeight: '1.3',
                                    width: '90%', // Wider box
                                }}>
                                    {themeText}
                                </div>
                            </div>
                        )}

                        {/* Main Content Area */}
                        <div style={{
                            flex: 1,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            // If image exists or themeText exists, align to top (flex-start) to keep text high.
                            // If no image and no themeText, center content vertically.
                            justifyContent: (imageSrc || themeText) ? 'flex-start' : 'center',
                            paddingTop: themeText ? '30px' : (imageSrc ? '10px' : '0'),
                        }}>
                            {/* Image Area */}
                            {imageSrc && (
                                <div style={{
                                    flex: '0 0 auto', // Don't force take space
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: '50px', // Increased top margin
                                    marginBottom: '20px', // Small margin
                                }}>
                                    <img src={imageSrc} style={{ maxWidth: '100%', maxHeight: '250px', objectFit: 'contain' }} alt="Lesson illustration" />
                                </div>
                            )}

                            {/* Structured Content */}
                            <div style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '25px',
                                alignItems: 'center',
                            }}>
                                {japaneseText && (
                                    <div style={{
                                        color: '#333',
                                        fontWeight: 'bold',
                                        width: '100%',
                                        textAlign: 'center',
                                        ...getDynamicStyle(japaneseText, 60, 30, 12),
                                    }}>
                                        {japaneseText}
                                    </div>
                                )}
                                {englishText && (
                                    <div style={{
                                        fontWeight: 'bold',
                                        fontFamily: 'Roboto, sans-serif',
                                        color: '#333',
                                        width: '100%',
                                        textAlign: 'center',
                                        marginTop: '15px',
                                        ...getDynamicStyle(englishText, 80, 35, 15),
                                    }}>
                                        {englishText}
                                    </div>
                                )}

                                {/* Formula Section */}
                                {formula && (
                                    <div style={{
                                        marginTop: '20px',
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        transform: 'scale(1.2)',
                                    }}>
                                        {formula}
                                    </div>
                                )}

                                {/* Vocabulary/Words Bubbles */}
                                {words && words.length > 0 && (
                                    <div style={{
                                        marginTop: '10px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '15px',
                                        width: '100%'
                                    }}>
                                        {words.map((w, i) => (
                                            <div key={i} style={{
                                                backgroundColor: 'rgba(255,255,255,0.9)',
                                                border: '3px solid #eee',
                                                padding: '15px 30px',
                                                borderRadius: '16px',
                                                boxShadow: '0 3px 6px rgba(0,0,0,0.05)',
                                                fontWeight: 'bold',
                                                fontFamily: 'Roboto, sans-serif',
                                                color: '#333',
                                                minWidth: '250px',
                                                textAlign: 'center',
                                                ...getDynamicStyle(w, 50, 30, 10),
                                                ...((sentenceDelay > 0 && frame < sentenceDelay + (i * 5)) ? { opacity: 0 } : { opacity: 1, transition: 'opacity 0.3s' })
                                            }}>
                                                {w}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Legacy Sentences */}
                                {sentences && !japaneseText && !englishText && !formula && (
                                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                        {sentences.map((sent, index) => (
                                            <div key={index} style={{
                                                ...getDynamicStyle(sent, 50, 30, 20),
                                                ...(sentenceDelay > 0 ? { opacity: frame > sentenceDelay ? 1 : 0, transition: 'opacity 0.5s' } : {})
                                            }}>
                                                {sent}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Explanation (Legacy) */}
                                {explanation && (
                                    <div style={{
                                        marginTop: '20px',
                                        color: '#555',
                                        textAlign: 'center',
                                        width: '100%',
                                        borderTop: '2px solid #f0f0f0',
                                        paddingTop: '25px',
                                        ...getDynamicStyle(explanation, 40, 25, 30),
                                    }}>
                                        {explanation}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <AbsoluteFill
            style={{
                fontFamily: 'Noto Sans JP',
                color: '#333',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: '40px',
            }}
        >
            {/* Header */}
            {topic && (
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '20px',
                    zIndex: 10,
                }}>
                    <div style={{
                        fontSize: '32px',
                        fontWeight: 'bold',
                        color: '#E65100',
                        textShadow: '2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff',
                        marginBottom: '5px'
                    }}>
                        中2英語
                    </div>
                    <div style={{
                        fontSize: '64px',
                        fontWeight: 'bold',
                        color: '#E65100',
                        lineHeight: 1.1,
                        textShadow: '3px 3px 0 #fff, -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff, 0 5px 10px rgba(0,0,0,0.1)'
                    }}>
                        {topic}
                    </div>
                </div>
            )}

            {/* Main Content Card Wrapper */}
            <div style={{ position: 'relative', width: '90%', maxWidth: '1000px', flex: 1, display: 'flex', flexDirection: 'column' }}>

                {/* SubTopic (Pink Tag) */}
                {subTopic && (
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '0',
                        backgroundColor: '#F06292',
                        color: 'white',
                        padding: '10px 25px',
                        borderRadius: '25px',
                        fontSize: '28px', // Increased size
                        fontWeight: 'bold',
                        zIndex: 20,
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}>
                        {subTopic}
                    </div>
                )}

                {/* Card Content */}
                <div style={{
                    backgroundColor: 'white',
                    width: '100%',
                    height: '920px',
                    borderRadius: '20px',
                    padding: (layout === 'standard' || layout === 'quiz-choices') ? '30px' : '0',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center', // Changed to center vertically
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                    position: 'relative',
                }}>

                    {/* Timer */}
                    {showTimer && (
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            width: '80px',
                            height: '80px',
                            zIndex: 10,
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

                    {renderContent()}

                </div>
            </div>

            {/* Speech Bubble (Bottom Right) */}
            {speechBubble && (
                <div style={{
                    position: 'absolute',
                    bottom: '-220px',
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
                    {speechBubble}
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
            )}
        </AbsoluteFill>
    );
};
