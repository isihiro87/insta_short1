import React from 'react';
import { BaseFigure, AngleArc, CircleHighlight, P_A, P_B, P_C, P_D, WIDTH, HEIGHT } from './GeometryComponents';

export const Problem03Step1: React.FC<{ showHighlight?: boolean, animate?: boolean }> = ({ showHighlight = true, animate = true }) => {
    return (
        <svg width="100%" height="100%" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} style={{ backgroundColor: 'white' }}>
            <BaseFigure />

            {/* x at A */}
            <AngleArc
                center={P_A} start={P_B} end={P_C}
                radius={0.5} label="$x$"
                labelSize={30}
            />

            {/* 110 at C (Exterior) */}
            <AngleArc
                center={P_C} start={P_A} end={P_D}
                radius={0.6} label="110°"
                textOffset={[0, 0]}
            />

            {/* Circle Highlight */}
            {showHighlight && (
                <CircleHighlight
                    center={[2.5, 3.21]}
                    radius={0.333}
                    delay={animate ? 15 : -100}
                />
            )}
        </svg>
    );
};
