import React from 'react';
import { AngleArc, BaseFigureProb04, P4_A, P4_B, P4_C, P4_D, WIDTH, HEIGHT } from './GeometryComponents';

export const Problem04Step1: React.FC<{ animate?: boolean }> = ({ animate = true }) => {
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

            {/* 130 at A (Exterior) - Red Animated */}
            <AngleArc
                center={P4_A} start={P4_C} end={P4_D}
                radius={0.6} label="130°"
                color="red" textColor="red"
                animate={animate} delay={15}
                textOffset={[0, 0]}
            />
        </svg>
    );
};
