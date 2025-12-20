import React from 'react';
import { AbsoluteFill, Audio, Sequence, staticFile } from 'remotion';
import { VideoScenario } from '../../types/VideoPatterns';
import { IntroScene } from './IntroScene';
import { StoryScene } from './StoryScene';
import { QuoteScene } from './QuoteScene';

export const PatternPlayer: React.FC<{ scenario: VideoScenario }> = ({ scenario }) => {
    let currentStartFrame = 0;

    return (
        <AbsoluteFill>
            {/* BGM if exists */}
            {scenario.bgm && (
                <Audio src={staticFile(scenario.bgm)} volume={0.1} loop />
            )}

            {/* Render Scenes */}
            {scenario.scenes.map((scene, index) => {
                const start = currentStartFrame;
                currentStartFrame += scene.durationInFrames;

                return (
                    <Sequence key={scene.id} from={start} durationInFrames={scene.durationInFrames}>
                        {scene.type === 'intro' && <IntroScene config={scene as any} />}
                        {scene.type === 'story' && <StoryScene config={scene as any} />}
                        {scene.type === 'quote' && <QuoteScene config={scene as any} />}
                    </Sequence>
                );
            })}
        </AbsoluteFill>
    );
};
