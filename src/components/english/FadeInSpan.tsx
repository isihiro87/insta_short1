import React from 'react';
import { useCurrentFrame, useVideoConfig, spring } from 'remotion';

export const FadeInSpan: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 15 }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = spring({
        frame: frame - delay,
        fps,
        config: { damping: 200 },
    });

    return <span style={{ opacity }}>{children}</span>;
};
