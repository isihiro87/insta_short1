import React from 'react';
import { AbsoluteFill, Audio, useCurrentFrame, staticFile } from 'remotion';
import { CommonScene } from '../../CommonLessonData'; // Import CommonScene
import { PopText } from '../PopText';
import { Character } from '../../Character';

export const CommonSceneCard: React.FC<{
    scene: CommonScene; // Use CommonScene
    isFirstScene?: boolean;
    showSubtitles?: boolean;
    displayOverlayText?: string;
    isOverlayContinuous?: boolean;

    // Customization
    title1?: string;
    title2?: string;
    titleColor?: string;
    theme?: 'social' | 'science' | 'history'; // Added history
}> = ({
    scene,
    isFirstScene = false,
    showSubtitles = true,
    title1 = "理科・社会",
    title2 = "重要ポイント",
    titleColor = "#E65100",
    theme = 'history' // Default to history
}) => {
        const frame = useCurrentFrame();

        // Theme configuration
        const themeConfig = {
            social: {
                headerBg: 'images/social_header_bg.svg',
                headerColor: '#FFF3E0',
                titleColor: '#E65100',
            },
            science: {
                headerBg: 'images/science_header_bg.svg',
                headerColor: '#E3F2FD',
                titleColor: '#0277BD',
            },
            history: {
                headerBg: 'images/history_header_bg.svg',
                headerColor: '#FFF3E0', // Same as social for now
                titleColor: '#E65100',
            }
        };

        const currentTheme = themeConfig[theme] || themeConfig.history;

        return (
            <AbsoluteFill style={{ backgroundColor: 'white' }}>
                {/* Audio */}
                {scene.audioSrc && <Audio src={scene.audioSrc} />}

                {/* 1. Header Area (Top 17% - reduced height) */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%', // Full width
                    height: '17%', // Reduced height (approx 15% reduction from 20%)
                    backgroundColor: currentTheme.headerColor,
                    backgroundImage: `url(${staticFile(currentTheme.headerBg)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center', // Keep center but add padding to push down
                    paddingTop: '30px', // Push text down slightly to avoid top cut-off
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}>
                    {/* Line 1 */}
                    <PopText
                        color={titleColor || currentTheme.titleColor}
                        strokeColor="#FFFFFF"
                        fontSize={80}
                        rotate={0}
                        noAnimation={!isFirstScene}
                        shadow={false}
                    >
                        {title1}
                    </PopText>

                    {/* Line 2 */}
                    <div style={{ marginTop: '0px' }}>
                        <PopText
                            color={titleColor || currentTheme.titleColor}
                            strokeColor="#FFFFFF"
                            fontSize={70}
                            rotate={0}
                            delay={5}
                            noAnimation={!isFirstScene}
                            shadow={false}
                        >
                            {title2}
                        </PopText>
                    </div>
                </div>

                {/* 2. Main Content (Below Header) */}
                <div style={{
                    position: 'absolute',
                    top: '20%',
                    bottom: '25%',
                    left: '0',
                    right: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    padding: '20px',
                }}>
                    <div style={{ width: '100%', height: '100%' }}>
                        {(() => {
                            if (scene.boardContent) {
                                const content = typeof scene.boardContent === 'function' ? scene.boardContent() : scene.boardContent;
                                return content;
                            } else {
                                console.error('boardContent is missing for scene:', scene.id);
                                return null;
                            }
                        })()}
                    </div>
                </div>

                {/* 3. Character (Bottom Right) */}
                <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '-20px',
                    zIndex: 50,
                    transform: 'scale(1.1)',
                }}>
                    <Character isTalking={!!scene.audioSrc && frame < scene.durationInFrames} />
                </div>
            </AbsoluteFill>
        );
    };
