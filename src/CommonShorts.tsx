import { AbsoluteFill, Series, Audio, staticFile } from 'remotion';
import React from 'react';
import { commonLessonData, CommonScene } from './CommonLessonData';
import { CommonSceneCard } from './components/common/CommonSceneCard';

export const CommonShortsVideo: React.FC<{
    scenes?: CommonScene[];
    showSubtitles?: boolean;
    theme?: 'social' | 'science' | 'history';
    title1?: string;
    title2?: string;
}> = ({
    scenes = commonLessonData,
    showSubtitles = true,
    theme = 'history',
    title1 = "中2歴史",
    title2 = "イギリス革命"
}) => {
        return (
            <AbsoluteFill style={{
                backgroundColor: 'white',
                backgroundImage: `url(${staticFile('images/english_background.png')})`, // Reuse background or change if needed
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden'
            }}>

                {/* White Footer Background */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '28%', // Covers the bottom area behind the character/speech bubble
                    backgroundColor: 'white',
                    zIndex: 0, // Behind content
                }} />

                {/* Background Music */}
                <Audio src={staticFile('audio/bgm.mp3')} volume={0.05} loop />

                <Series>
                    {scenes.map((scene, index) => {
                        const prevScene = index > 0 ? scenes[index - 1] : null;

                        let pauseBefore = 0;
                        let pauseAfter = 0;

                        // Default pauses based on role (in frames)
                        if (scene.customPauseAfter !== undefined) {
                            pauseAfter = scene.customPauseAfter;
                        } else if (scene.role === 'answer') {
                            pauseAfter = 10; // 0.66 sec
                        } else if (scene.role === 'question') {
                            pauseAfter = 45; // 1.5 sec
                        } else if (scene.role === 'explanation') {
                            pauseAfter = 10; // 0.33 sec
                        } else if (scene.role === 'transition') {
                            pauseBefore = 5;
                        }

                        if (pauseBefore > 0 && prevScene) {
                            const pauseScene: CommonScene = {
                                ...prevScene,
                                audioSrc: '',
                            };

                            return (
                                <React.Fragment key={scene.id}>
                                    <Series.Sequence key={`pause-${scene.id}`} durationInFrames={pauseBefore}>
                                        <CommonSceneCard
                                            scene={pauseScene}
                                            isFirstScene={false}
                                            showSubtitles={showSubtitles}
                                            title1={title1}
                                            title2={title2}
                                            theme={theme}
                                        />
                                    </Series.Sequence>
                                    <Series.Sequence key={`main-${scene.id}`} durationInFrames={scene.durationInFrames + pauseAfter}>
                                        <CommonSceneCard
                                            scene={scene}
                                            isFirstScene={index === 0}
                                            showSubtitles={showSubtitles}
                                            title1={title1}
                                            title2={title2}
                                            theme={theme}
                                        />
                                    </Series.Sequence>
                                </React.Fragment>
                            );
                        }

                        return (
                            <React.Fragment key={scene.id}>
                                <Series.Sequence key={`main-${scene.id}`} durationInFrames={scene.durationInFrames + pauseAfter}>
                                    <CommonSceneCard
                                        scene={scene}
                                        isFirstScene={index === 0}
                                        showSubtitles={showSubtitles}
                                        title1={title1}
                                        title2={title2}
                                        theme={theme}
                                    />
                                </Series.Sequence>
                            </React.Fragment>
                        );
                    })}
                </Series>
            </AbsoluteFill >
        );
    };
