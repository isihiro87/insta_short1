import React from 'react';
import { BaseFigureProb04, AngleArc, CircleHighlight, P4_A, P4_B, P4_C, P4_D, WIDTH, HEIGHT } from './GeometryComponents';

export const Problem04Question: React.FC<{ showHighlight?: boolean, animate?: boolean }> = ({ showHighlight = true, animate = true }) => {
    return (
        <svg width="100%" height="100%" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} style={{ backgroundColor: 'white' }}>
            <BaseFigureProb04 />

            {/* x at B */}
            <AngleArc
                center={P4_B} start={P4_C} end={P4_A}
                radius={0.5} label="$x$"
                labelSize={30}
            />

            {/* 130 at A (Exterior) - Black Static */}
            <AngleArc
                center={P4_A} start={P4_C} end={P4_D}
                radius={0.6} label="130°"
                textOffset={[0, 0]}
            />

            {/* Circle Highlight around x at B */}
            {showHighlight && (
                <CircleHighlight
                    center={[1.632, 0.403]}
                    radius={0.335}
                    delay={animate ? 15 : -100}
                />
            )}
        </svg>
    );
};
