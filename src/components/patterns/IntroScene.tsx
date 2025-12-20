import React from 'react';
import { AbsoluteFill, Audio, Img, Sequence, staticFile } from 'remotion';
import { IntroSceneConfig } from '../../types/VideoPatterns';
import { TextOverlay } from '../common/TextOverlay';

export const IntroScene: React.FC<{ config: IntroSceneConfig }> = ({ config }) => {

    // Calculate audio positions
    let currentAudioCursor = 0;
    const audioElements = config.audio.map((audio, index) => {
        const start = audio.startFrame ?? currentAudioCursor;
        const duration = audio.durationInFrames;
        if (audio.startFrame === undefined) currentAudioCursor = start + duration;

        return (
            <Sequence key={`audio-${index}`} from={start} durationInFrames={duration}>
                <Audio src={staticFile(audio.src)} />
            </Sequence>
        );
    });

    return (
        <AbsoluteFill style={{ backgroundColor: config.background || 'black' }}>
            {/* Audio Layer */}
            {audioElements}

            {/* Background Image */}
            {config.backgroundImage && (
                <Img
                    src={staticFile(config.backgroundImage)}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.7,
                        ...config.backgroundImageStyle
                    }}
                />
            )}

            {/* Title & Subtitle */}
            <TextOverlay
                text={config.title}
                y={-200}
                size={140}
                color="gold"
                outlineColor="black"
                outlineWidth="8px"
            />

            {config.subtitle && (
                <TextOverlay
                    text={config.subtitle}
                    y={-80}
                    size={90}
                    outlineColor="black"
                    outlineWidth="6px"
                />
            )}

            {/* Impact Texts */}
            {config.impactText && config.impactText.map((item, index) => (
                <Sequence key={`impact-${index}`} from={item.startFrame}>
                    <TextOverlay
                        text={item.text}
                        style={item.style}
                    // Assume style contains position/size/etc or we add them to schema later if needed. 
                    // For now, mapping style directly.
                    // But TextOverlay expects specific props for best results.
                    // Let's assume the 'style' from schema maps to CSSProperties, 
                    // but we might want to cast some to specific props if we expand the schema.
                    />
                    {/* 
                       Note: The current schema definition for impactText.style is generic CSSProperties.
                       If we want to use the specific props of TextOverlay (like size, color, shake),
                       we should update the schema to include them explicitly or cast valid properties.
                       For now, I'll rely on TextOverlay's `style` prop for CSS overrides.
                     */}
                </Sequence>
            ))}
        </AbsoluteFill>
    );
};
