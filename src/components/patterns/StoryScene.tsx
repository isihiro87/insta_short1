import React from 'react';
import { AbsoluteFill, Audio, Img, Sequence, staticFile } from 'remotion';
import { StorySceneConfig } from '../../types/VideoPatterns';
import { TextOverlay } from '../common/TextOverlay';

export const StoryScene: React.FC<{ config: StorySceneConfig }> = ({ config }) => {

    // Calculate audio positions
    let currentAudioCursor = 0;
    const audioElements = config.audio.map((audio, index) => {
        const start = audio.startFrame ?? currentAudioCursor;
        const duration = audio.durationInFrames;
        // Update cursor for next sequential audio
        if (audio.startFrame === undefined) {
            currentAudioCursor = start + duration;
        } else {
            // If manual start provided, we don't necessarily shift the cursor unless we want to?
            // Usually for story mode it's linear. Let's assume linear cursor update based on max end.
            currentAudioCursor = Math.max(currentAudioCursor, start + duration);
        }

        return (
            <Sequence key={`audio-${index}`} from={start} durationInFrames={duration}>
                <Audio src={staticFile(audio.src)} />
            </Sequence>
        );
    });

    return (
        <AbsoluteFill style={{ backgroundColor: config.background || 'black' }}>
            {/* Background Image */}
            {config.backgroundImage && (
                <Img
                    src={staticFile(config.backgroundImage)}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        ...config.backgroundImageStyle
                    }}
                />
            )}

            {/* Audio Layer */}
            {audioElements}

            {/* Image Layer */}
            {config.images.map((img, index) => (
                <Sequence key={`img-${index}`} from={img.startFrame} durationInFrames={img.duration}>
                    <Img
                        src={staticFile(img.src)}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            ...img.style
                        }}
                    />
                </Sequence>
            ))}

            {/* Text Layer */}
            {config.texts.map((txt, index) => (
                <Sequence key={`txt-${index}`} from={txt.startFrame} durationInFrames={txt.duration}>
                    <TextOverlay
                        text={txt.text}
                        color={txt.color}
                        size={txt.fontSize}
                        x={txt.x}
                        y={txt.y}
                        rotate={txt.rotate}
                        fontFamily={txt.fontFamily}
                        outlineColor={txt.outlineColor}
                        outlineWidth={txt.outlineWidth}
                        // Map other styles from customStyle if needed
                        style={{ textShadow: txt.textShadow, ...txt.customStyle }}
                    />
                </Sequence>
            ))}
        </AbsoluteFill>
    );
};
