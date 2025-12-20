import React from 'react';
import { useCurrentFrame } from 'remotion';

export type TextOverlayProps = {
    text: string;
    size?: number;
    color?: string;
    x?: number; // Add control for x position
    y?: number;
    rotate?: number;
    shake?: boolean;
    scale?: number; // Add control for scale
    opacity?: number; // Add control for opacity
    fontFamily?: string;
    lineHeight?: number;
    outlineColor?: string; // Add control for outline color
    outlineWidth?: string; // Add control for outline width
    style?: React.CSSProperties; // Allow extra override
};

export const TextOverlay: React.FC<TextOverlayProps> = ({
    text,
    size = 60,
    color = 'white',
    x = 0,
    y = 0,
    rotate = 0,
    shake = false,
    scale = 1,
    opacity = 1,
    fontFamily,
    lineHeight,
    outlineColor,
    outlineWidth,
    style
}) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const frame = useCurrentFrame();
    const shakeOffset = 0; // Animation removed as per user request in original file, kept 0.

    const effectiveSize = Math.max(size, 40);

    // Default outline logic: If text is dark, use white outline. Otherwise black.
    // Simple check: if color contains 'black' or dark hex, switch default.
    // For now, let's stick to explicit control or smart default.
    // If outlineColor is not provided, default to 'black'. 
    // EXCEPT if color is 'black', then default outline should be 'white' to be visible.
    const defaultOutline = color === 'black' ? 'white' : 'black';
    const effectiveOutlineColor = outlineColor || defaultOutline;
    const effectiveOutlineWidth = outlineWidth || '5px';

    return (
        <div style={{
            opacity: opacity,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px + ${shakeOffset}px)) rotate(${rotate}deg) scale(${scale})`,
            fontSize: effectiveSize,
            fontWeight: '900',
            color: color,
            textAlign: 'center',
            width: '90%',
            fontFamily: fontFamily || 'sans-serif',
            lineHeight: lineHeight || 1.2,
            whiteSpace: 'pre-wrap',
            WebkitTextStroke: `${effectiveOutlineWidth} ${effectiveOutlineColor}`,
            paintOrder: 'stroke fill',
            ...style
        }}>
            {text}
        </div>
    );
};
