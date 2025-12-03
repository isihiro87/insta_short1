import React from 'react';
import { BaseFigure, AngleArc, P_A, P_B, P_C, P_D, WIDTH, HEIGHT } from './GeometryComponents';

export const Problem03Step2: React.FC<{ animate?: boolean }> = ({ animate = true }) => {
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

            {/* 180 Arc */}
            <AngleArc
                center={P_C} start={P_B} end={P_D}
                radius={0.45} label="180°"
                color="red" textColor="red"
                animate={animate} delay={15}
                textOffset={[-0.75, -0.17]}
            />
        </svg>
    );
};
