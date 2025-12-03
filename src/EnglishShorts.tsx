import { AbsoluteFill, Series, Audio, staticFile } from 'remotion';
import React from 'react';
import { englishLessonData, Scene } from './EnglishLessonData';
import { EnglishSceneCard } from './components/english/EnglishSceneCard';

export const EnglishShortsVideo: React.FC<{ scenes?: Scene[]; showSubtitles?: boolean }> = ({ scenes = englishLessonData, showSubtitles = true }) => {
    return (
        <AbsoluteFill style={{
            backgroundColor: 'white',
            backgroundImage: `url(${staticFile('images/english_background.png')})`,
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

                    let displayComment = scene.characterComment;
                    let displayCommentColor = scene.characterCommentColor;
                    let displayCommentImportant = scene.characterCommentImportant;
                    let isCommentContinuous = false;

                    if (scene.characterCommentContinuous && prevScene) {
                        displayComment = prevScene.characterComment;
                        displayCommentColor = prevScene.characterCommentColor;
                        displayCommentImportant = prevScene.characterCommentImportant;
                        isCommentContinuous = true;
                    }

                    let displayOverlayText = scene.overlayText;
                    let isOverlayContinuous = false;
                    if (scene.overlayTextContinuous && prevScene) {
                        let searchIndex = index - 1;
                        while (searchIndex >= 0 && scenes[searchIndex].overlayTextContinuous) {
                            searchIndex--;
                        }
                        if (searchIndex >= 0 && scenes[searchIndex].overlayText) {
                            displayOverlayText = scenes[searchIndex].overlayText;
                        } else if (prevScene.overlayText) {
                            displayOverlayText = prevScene.overlayText;
                        }
                        isOverlayContinuous = true;
                    }

                    let pauseBefore = 0;
                    let pauseAfter = 0;

                    // Default pauses based on role (in frames)
                    if (scene.role === 'answer') {
                        pauseAfter = 30; // 1 sec
                    } else if (scene.role === 'question') {
                        pauseAfter = 60; // 2 sec
                    } else if (scene.role === 'explanation') {
                        pauseAfter = 15; // 0.5 sec
                    } else if (scene.role === 'rhythm') {
                        pauseAfter = 10; // 0.33 sec
                    } else if (scene.role === 'transition') {
                        pauseBefore = 5;
                    }

                    // Allow individual override
                    if (scene.pauseAfter !== undefined) {
                        pauseAfter = scene.pauseAfter;
                    }

                    if (pauseBefore > 0 && prevScene) {
                        const prevDisplayComment = prevScene.characterComment;
                        const prevDisplayCommentColor = prevScene.characterCommentColor;
                        const prevDisplayCommentImportant = prevScene.characterCommentImportant;
                        const prevDisplayOverlayText = prevScene.overlayText;

                        const pauseScene: Scene = {
                            ...prevScene,
                            audioSrc: '',
                        };

                        return (
                            <React.Fragment key={scene.id}>
                                <Series.Sequence key={`pause-${scene.id}`} durationInFrames={pauseBefore}>
                                    <EnglishSceneCard
                                        scene={pauseScene}
                                        isFirstScene={false}
                                        showSubtitles={showSubtitles}
                                        displayComment={prevDisplayComment}
                                        displayCommentColor={prevDisplayCommentColor}
                                        displayCommentImportant={prevDisplayCommentImportant}
                                        displayOverlayText={prevDisplayOverlayText}
                                        isCommentContinuous={true}
                                        isOverlayContinuous={true}
                                    />
                                </Series.Sequence>
                                <Series.Sequence key={`main-${scene.id}`} durationInFrames={scene.durationInFrames + pauseAfter}>
                                    <EnglishSceneCard
                                        scene={scene}
                                        isFirstScene={index === 0}
                                        showSubtitles={showSubtitles}
                                        displayComment={displayComment}
                                        displayCommentColor={displayCommentColor}
                                        displayCommentImportant={displayCommentImportant}
                                        displayOverlayText={displayOverlayText}
                                        isCommentContinuous={isCommentContinuous}
                                        isOverlayContinuous={isOverlayContinuous}
                                    />
                                </Series.Sequence>
                            </React.Fragment>
                        );
                    }

                    return (
                        <React.Fragment key={scene.id}>
                            <Series.Sequence key={`main-${scene.id}`} durationInFrames={scene.durationInFrames + pauseAfter}>
                                <EnglishSceneCard
                                    scene={scene}
                                    isFirstScene={index === 0}
                                    showSubtitles={showSubtitles}
                                    displayComment={displayComment}
                                    displayCommentColor={displayCommentColor}
                                    displayCommentImportant={displayCommentImportant}
                                    displayOverlayText={displayOverlayText}
                                    isCommentContinuous={isCommentContinuous}
                                    isOverlayContinuous={isOverlayContinuous}
                                />
                            </Series.Sequence>
                        </React.Fragment>
                    );
                })}
            </Series>
        </AbsoluteFill >
    );
};
