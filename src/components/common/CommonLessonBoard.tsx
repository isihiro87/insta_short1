import React from 'react';
import { AbsoluteFill, Img } from 'remotion';

export type ImageSize = 'small' | 'medium' | 'large' | 'full';

interface CommonLessonBoardProps {
    // Content
    text?: React.ReactNode;
    imageSrc?: string;
    imageSize?: ImageSize;
    speechBubble?: React.ReactNode;
    topLabel?: React.ReactNode; // New prop for content above the frame

    // Layout
    layout?: 'standard'; // Expandable later
}

// Helper for text styles
const getTextStyle = (fontSize: number = 60): React.CSSProperties => ({
    fontSize: `${fontSize}px`,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    lineHeight: '1.5', // Increased line height for readability
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Noto Sans JP, sans-serif', // Ensure font family
});

export const CommonLessonBoard: React.FC<CommonLessonBoardProps> = ({
    text,
    imageSrc,
    imageSize = 'medium',
    speechBubble,
    topLabel,
    layout = 'standard',
}) => {


    // Image styles based on size
    const getImageStyle = (): React.CSSProperties => {
        const baseStyle: React.CSSProperties = {
            objectFit: 'contain',
            maxWidth: '100%',
        };

        switch (imageSize) {
            case 'full':
                return { ...baseStyle, width: '100%', height: '100%', maxHeight: '100%' };
            case 'large':
                return { ...baseStyle, maxHeight: '500px', width: '90%' }; // Adjusted height
            case 'medium':
                return { ...baseStyle, maxHeight: '350px', width: '80%' }; // Adjusted height
            case 'small':
                return { ...baseStyle, maxHeight: '200px', width: '60%' }; // Adjusted height
            default:
                return { ...baseStyle, maxHeight: '350px' };
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
                paddingTop: '20px', // Reduced top padding as header takes space
            }}
        >

            {/* Top Label (Above Frame) */}
            {topLabel && (
                <div style={{
                    marginBottom: '10px',
                    fontSize: '80px',
                    fontWeight: 'bold',
                    color: '#E65100', // Deep Orange
                    textAlign: 'center',
                    width: '90%',
                    lineHeight: '1.2',
                    textShadow: '2px 2px 0px rgba(255,255,255,0.5)', // Subtle shadow for readability
                }}>
                    {topLabel}
                </div>
            )}

            {/* Main Content Card Wrapper */}
            <div style={{ position: 'relative', width: '95%', maxWidth: '1020px', flex: 1, display: 'flex', flexDirection: 'column' }}>

                {/* Card Content */}
                <div style={{
                    width: '100%',
                    height: '100%',
                    // borderRadius: '20px', // Removed card border/bg
                    padding: imageSize === 'full' ? '0' : '10px',
                    overflow: 'visible', // Allow speech bubble to pop out if needed
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: imageSize === 'full' ? 'center' : 'flex-start',
                    position: 'relative',
                    gap: '50px', // Increased gap to push text lower
                }}>

                    {/* Image */}
                    {imageSrc && (
                        <div style={{
                            flex: imageSize === 'full' ? 1 : '0 0 auto',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: imageSize === 'full' ? 0 : '10px',
                            marginBottom: '10px',
                        }}>
                            <Img src={imageSrc} style={getImageStyle()} alt="Lesson illustration" />
                        </div>
                    )}

                    {/* Text (Enclosed in Box) */}
                    {text && imageSize !== 'full' && (
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            zIndex: 5,
                            marginTop: imageSrc ? '0px' : '60px', // Space from topLabel when no image
                            flex: imageSrc ? '0 0 auto' : 1, // Expand if no image? Or just fixed? User asked for fixed.
                        }}>
                            <div style={{
                                backgroundColor: '#FAFAFA',
                                border: '4px solid #FFCC80',
                                borderRadius: '30px',
                                padding: '40px 50px',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
                                width: '95%',
                                // Fixed sizing logic
                                height: imageSrc ? '480px' : '780px', // Fixed heights
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxSizing: 'border-box', // Ensure padding doesn't affect outer size
                            }}>
                                <div style={getTextStyle()}>
                                    {text}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Overlay Text for Full Image */}
                    {text && imageSize === 'full' && (
                        <div style={{
                            position: 'absolute',
                            bottom: '80px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '90%',
                            display: 'flex',
                            justifyContent: 'center',
                            zIndex: 10,
                        }}>
                            <div style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                borderRadius: '25px',
                                padding: '30px 40px',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                width: '100%',
                                textAlign: 'center',
                            }}>
                                <div style={getTextStyle()}>
                                    {text}
                                </div>
                            </div>
                        </div>
                    )}

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
