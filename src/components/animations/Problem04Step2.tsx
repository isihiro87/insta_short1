import React from 'react';
import { BaseFigureProb04, AngleArc, CircleHighlight, P4_A, P4_B, P4_C, P4_D, WIDTH, HEIGHT } from './GeometryComponents';

interface Problem04Step2Props {
    step: 1 | 2 | 3 | 4; // 1: Base+130, 2: +Angles, 3: +Circles(Anim), 4: +Circles(Static)
}

export const Problem04Step2: React.FC<Problem04Step2Props> = ({ step }) => {
    // Helper to get arc text position (simplified, assuming standard placement)
    // For B (x): Center B, Start C, End A. Angle approx 0 to 70?
    // We can use the AngleArc logic or just approximate for the circle center.
    // The Python script uses `get_arc_text_pos`.
    // Let's calculate manually.
    // Angle at B: C(4,0) -> B(1,0) -> A(2.5, 3.216).
    // Vector BC: (3, 0). Angle 0.
    // Vector BA: (1.5, 3.216). Angle approx 65 deg.
    // Mid angle: 32.5 deg.
    // Radius 0.5. Label radius 0.75.
    const rLabel = 0.5 * 1.5;
    const angB = 32.5 * Math.PI / 180;
    const posB = [P4_B[0] + rLabel * Math.cos(angB), P4_B[1] + rLabel * Math.sin(angB)];

    // Angle at C: A -> C -> B.
    // Vector CA: (-1.5, 3.216). Angle approx 115 deg.
    // Vector CB: (-3, 0). Angle 180 deg.
    // Mid angle: (115 + 180) / 2 = 147.5 deg.
    const angC = 147.5 * Math.PI / 180;
    const posC = [P4_C[0] + rLabel * Math.cos(angC), P4_C[1] + rLabel * Math.sin(angC)];

    // Angle at A (Exterior): C -> A -> D.
    // Vector AC: (1.5, -3.216). Angle approx -65 deg (295).
    // Vector AD: (0.75, 1.608). Angle approx 65 deg.
    // Wait, D is on extension of BA.
    // Angle BAC is 50.
    // Exterior angle is 130.
    // Mid angle of exterior:
    // Angle of AC: -65.
    // Angle of AD: 65.
    // Angle from AC to AD (CCW): -65 to 65 is 130 degrees.
    // Mid angle: 0 degrees (Right).
    // Radius 0.6. Label radius 0.9.
    const rLabelExt = 0.6 * 1.5;
    const posExt = [P4_A[0] + rLabelExt, P4_A[1]]; // 0 degrees is just +x

    return (
        <svg width="100%" height="100%" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} style={{ backgroundColor: 'white' }}>
            <BaseFigureProb04 />

            {/* 130 at A (Exterior) - Always visible */}
            <AngleArc
                center={P4_A} start={P4_C} end={P4_D}
                radius={0.6} label="130°"
                textOffset={[0, 0]}
            />

            <AngleArc
                center={P4_B} start={P4_C} end={P4_A}
                radius={0.5} label="$x$"
                labelSize={30}
            />

            {/* Angles x at B and C */}
            {step >= 2 && (
                <>
                    <AngleArc
                        center={P4_B} start={P4_C} end={P4_A}
                        radius={0.5} label="$x$"
                        labelSize={30}
                    />
                    <AngleArc
                        center={P4_C} start={P4_A} end={P4_B}
                        radius={0.5} label="$x$"
                        labelSize={30}
                        color="blue" textColor="blue"
                    />
                </>
            )}

            {/* Circles */}
            {(step === 3 || step === 4) && (
                <>
                    <CircleHighlight
                        center={posB}
                        radius={0.3} // Approx radius for text
                        color="blue"
                        delay={step === 3 ? 15 : -100} // -100 for static
                    />
                    <CircleHighlight
                        center={posC}
                        radius={0.3}
                        color="blue"
                        delay={step === 3 ? 30 : -100}
                    />
                    <CircleHighlight
                        center={posExt}
                        radius={0.35}
                        color="red"
                        delay={step === 3 ? 45 : -100}
                    />
                </>
            )}
        </svg>
    );
};
