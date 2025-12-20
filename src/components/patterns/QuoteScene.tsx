import React from 'react';
import { AbsoluteFill, Audio, Img, Sequence, staticFile, useCurrentFrame } from 'remotion';
import { QuoteSceneConfig } from '../../types/VideoPatterns';

export const QuoteScene: React.FC<{ config: QuoteSceneConfig }> = ({ config }) => {
    const frame = useCurrentFrame();

    // Calculate audio
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
            {audioElements}

            {config.backgroundImage && (
                <Img
                    src={staticFile(config.backgroundImage)}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
                />
            )}

            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '950px',
                textAlign: 'center',
                color: 'white',
                fontSize: 95,
                fontWeight: 'bold',
                textShadow: '3px 3px 0 black'
            }}>
                {config.quoteLines.map((line, index) => {
                    // Logic: Line is visible if frame >= line.startFrame
                    const isVisible = frame >= line.startFrame;

                    return (
                        <div key={index} style={{
                            opacity: isVisible ? 1 : 0,
                            marginBottom: '20px',
                            transition: 'opacity 0.5s'
                        }}>
                            {line.highlight ? (
                                <span style={{ color: '#D50000', textShadow: '3px 3px 0 white', fontSize: '1.2em' }}>
                                    {line.text}
                                </span>
                            ) : (
                                line.text
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Optional Author display */}
            {config.author && (
                <div style={{
                    position: 'absolute',
                    bottom: 100,
                    right: 100,
                    fontSize: 60,
                    color: 'white',
                    opacity: frame > 10 ? 1 : 0
                }}>
                    - {config.author} -
                </div>
            )}
        </AbsoluteFill>
    );
};
