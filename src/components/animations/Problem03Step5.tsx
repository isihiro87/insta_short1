import React from 'react';
import { BaseFigure, AngleArc, CircleHighlight, P_A, P_B, P_C, P_D, WIDTH, HEIGHT } from './GeometryComponents';

export const Problem03Step5: React.FC<{ animate?: boolean }> = ({ animate = true }) => {
    // Calculate positions for circles
    // Python: text_r_offset = 0.5 * 1.5 = 0.75
    // B angle is 70. Mid angle is 35.
    // C angle is 70 (interior). Mid angle is 180 - 35 = 145.

    // We need coordinates for CircleHighlight.
    // B is [1, 0]. C is [4, 0].
    // B text pos: [1 + 0.75*cos(35), 0 + 0.75*sin(35)]
    // C text pos: [4 + 0.75*cos(145), 0 + 0.75*sin(145)]

    const rad35 = 35 * Math.PI / 180;
    const rad145 = 145 * Math.PI / 180;
    const rOffset = 0.75;

    const posB = [P_B[0] + rOffset * Math.cos(rad35), P_B[1] + rOffset * Math.sin(rad35)];
    const posC = [P_C[0] + rOffset * Math.cos(rad145), P_C[1] + rOffset * Math.sin(rad145)];

    return (
        <svg width="100%" height="100%" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} style={{ backgroundColor: 'white' }}>
            <BaseFigure />

            {/* x at A */}
            <AngleArc
                center={P_A} start={P_B} end={P_C}
                radius={0.6} label="$x$"
                labelSize={30}
            />

            {/* 110 at C (Exterior) - Blue */}
            <AngleArc
                center={P_C} start={P_D} end={P_A}
                radius={0.6} label="110°"
                color="blue" textColor="blue"
                textOffset={[0, 0.1]}
            />

            {/* 70 at C (Interior) - Red Static */}
            <AngleArc
                center={P_C} start={P_A} end={P_B}
                radius={0.5} label="70°"
                color="red" textColor="red"
            />

            {/* 70 at B (Interior) - Red Static */}
            <AngleArc
                center={P_B} start={P_C} end={P_A}
                radius={0.5} label="70°"
                color="red" textColor="red"
            />

            {/* Red Circles */}
            {/* Right (C) first, then Left (B) */}
            {animate ? (
                <>
                    <CircleHighlight
                        center={posC}
                        radius={0.3}
                        delay={15}
                    />
                    <CircleHighlight
                        center={posB}
                        radius={0.3}
                        delay={30} // 1.0s
                    />
                </>
            ) : (
                // Static circles (always visible)
                <>
                    <CircleHighlight
                        center={posC}
                        radius={0.3}
                        delay={-100} // Hack to make it fully visible immediately (frame > delay+15)
                    />
                    <CircleHighlight
                        center={posB}
                        radius={0.3}
                        delay={-100}
                    />
                </>
            )}
        </svg>
    );
};
