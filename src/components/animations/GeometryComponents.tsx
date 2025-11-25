import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const WIDTH = 600;
export const HEIGHT = 600;

// Geometry constants
export const P_A = [2.5, 4.11];
export const P_B = [1, 0];
export const P_C = [4, 0];
export const P_D = [5.5, 0];

// Problem 04 Geometry
// Height = 1.5 / tan(25 deg) approx 3.216
export const P4_A = [2.5, 3.216];
export const P4_B = [1, 0];
export const P4_C = [4, 0];
// D is on extension of BA. A + 0.5 * (A-B)
// A-B = [1.5, 3.216]
// D = [2.5 + 0.75, 3.216 + 1.608] = [3.25, 4.824]
export const P4_D = [3.25, 4.824];

export const transform = (point: number[]) => {
    const minX = 1, maxX = 5.5;
    const minY = 0, maxY = 4.11;
    const padding = 0.05;

    const dataWidth = maxX - minX;
    const dataHeight = maxY - minY;

    const scaleX = (WIDTH * (1 - padding * 2)) / dataWidth;
    const scaleY = (HEIGHT * (1 - padding * 2)) / dataHeight;
    const scale = Math.min(scaleX, scaleY);

    const centerX = (minX + maxX) / 2;
    const centerY = (minY + maxY) / 2;

    const svgCx = WIDTH / 2;
    const svgCy = HEIGHT / 2;

    const x = svgCx + (point[0] - centerX) * scale;
    const y = svgCy - (point[1] - centerY) * scale; // Flip Y for SVG

    return [x, y, scale];
};

export const BaseFigure: React.FC = () => {
    const [ax, ay] = transform(P_A);
    const [bx, by] = transform(P_B);
    const [cx, cy] = transform(P_C);
    const [dx, dy] = transform(P_D);

    return (
        <>
            <style>
                {`
          text { font-family: "Crimson Text", serif; font-weight: bold; }
          .math-it { font-family: "Times New Roman", serif; font-style: italic; font-weight: normal; }
        `}
            </style>
            <polygon points={`${ax},${ay} ${bx},${by} ${cx},${cy}`} fill="none" stroke="black" strokeWidth="2.5" strokeLinejoin="round" />
            <line x1={cx} y1={cy} x2={dx} y2={dy} stroke="black" strokeWidth="2.5" strokeLinecap="round" />
            <text x={ax} y={ay - 30} fontSize="24" textAnchor="middle">A</text>
            <text x={bx - 20} y={by + 20} fontSize="24" textAnchor="middle">B</text>
            <text x={cx} y={cy + 30} fontSize="24" textAnchor="middle">C</text>
        </>
    );
};

export const BaseFigureProb04: React.FC = () => {
    const [ax, ay] = transform(P4_A);
    const [bx, by] = transform(P4_B);
    const [cx, cy] = transform(P4_C);
    const [dx, dy] = transform(P4_D);

    return (
        <>
            <style>
                {`
          text { font-family: "Crimson Text", serif; font-weight: bold; }
          .math-it { font-family: "Times New Roman", serif; font-style: italic; font-weight: normal; }
        `}
            </style>
            <polygon points={`${ax},${ay} ${bx},${by} ${cx},${cy}`} fill="none" stroke="black" strokeWidth="2.5" strokeLinejoin="round" />
            <line x1={ax} y1={ay} x2={dx} y2={dy} stroke="black" strokeWidth="2.5" strokeLinecap="round" />
            <text x={ax - 20} y={ay} fontSize="24" textAnchor="end">A</text>
            <text x={bx - 20} y={by + 10} fontSize="24" textAnchor="middle">B</text>
            <text x={cx + 20} y={by + 10} fontSize="24" textAnchor="middle">C</text>
        </>
    );
};

interface AngleArcProps {
    center: number[];
    start: number[];
    end: number[];
    radius: number;
    label?: string;
    color?: string;
    textColor?: string;
    animate?: boolean;
    delay?: number; // in frames (30fps: 0.5s = 15 frames)
    textOffset?: [number, number];
    labelSize?: number;
}

export const AngleArc: React.FC<AngleArcProps> = ({
    center, start, end, radius, label,
    color = 'black', textColor, animate = false, delay = 0,
    textOffset = [0, 0], labelSize = 24
}) => {
    const frame = useCurrentFrame();
    const [cx, cy, scale] = transform(center);
    const r = radius * scale;

    // Calculate angles
    const v1 = [start[0] - center[0], start[1] - center[1]];
    const v2 = [end[0] - center[0], end[1] - center[1]];
    let angle1 = Math.atan2(v1[1], v1[0]) * 180 / Math.PI;
    let angle2 = Math.atan2(v2[1], v2[0]) * 180 / Math.PI;

    if (angle2 < angle1) angle2 += 360;
    let width = angle2 - angle1;
    if (width > 360) width -= 360;
    if (width > 180) {
        // Swap for SVG arc logic if needed, but here we just want the visual arc
        // If > 180, usually we want the smaller angle in geometry problems unless specified
        // But the Python script logic handles this. Let's assume input points define the direction (CCW).
        // Python script: if width > 180: angle1, angle2 = angle2, angle1 + 360
        // This implies it always draws the smaller arc? Or forces a specific direction?
        // Let's stick to the Python logic:
        const temp = angle1;
        angle1 = angle2;
        angle2 = temp + 360;
    }



    // SVG Y is flipped, so angles need to be negated for calculation?
    // Wait, transform flips Y. 
    // Math.atan2 uses standard math coords.
    // When drawing on SVG, if we use cos/sin with standard angles, we get standard coords relative to center.
    // Then we add center (which is already transformed).
    // BUT the Y axis is flipped in transform.
    // So a positive Y offset in math means negative Y offset in SVG?
    // Actually, let's just use the transformed points to calculate angles to be safe.

    const [sx, sy] = transform(start);
    const [ex, ey] = transform(end);

    // Re-calculate angles in SVG space
    const sv1 = [sx - cx, sy - cy];
    const sv2 = [ex - cx, ey - cy];
    // Note: SVG Y is down. Math Y is up.
    // atan2(y, x) in SVG space:
    let sAngle = Math.atan2(sv1[1], sv1[0]);
    let eAngle = Math.atan2(sv2[1], sv2[0]);

    // Normalize to 0-2PI
    if (sAngle < 0) sAngle += 2 * Math.PI;
    if (eAngle < 0) eAngle += 2 * Math.PI;

    // We want the arc from Start to End.
    // Determine direction. Usually CCW in math (Counter Clockwise).
    // In SVG (Y down), increasing angle is Clockwise.
    // So CCW in Math is CW in SVG?
    // Let's check: 0 is Right. 90 is Down (SVG). 90 is Up (Math).
    // So yes, direction is flipped.

    // Let's rely on the visual result.
    // If we want to draw from Start to End.
    // We can just draw the arc.
    // Let's calculate the difference.
    let diff = eAngle - sAngle;
    if (diff < 0) diff += 2 * Math.PI;

    // If the original math logic said "swap if > 180", it means we want the "inner" angle.
    // So if diff > PI, we should go the other way?
    // const largeArc = diff > Math.PI ? 1 : 0;
    // const sweepFlag = 1; // 1 is clockwise (positive angle direction in SVG)

    // Wait, if we want the "smaller" angle, we might need to adjust.
    // Let's assume standard geometry "inner angle" (< 180).
    // If diff > PI, we probably want the other way, so sweepFlag = 0.
    // But let's stick to a simple heuristic: Draw short way.
    const finalSweep = diff > Math.PI ? 0 : 1;
    const finalLargeArc = 0; // Always small arc for < 180 angles

    // Path
    const x1 = cx + r * Math.cos(sAngle);
    const y1 = cy + r * Math.sin(sAngle);
    const x2 = cx + r * Math.cos(eAngle);
    const y2 = cy + r * Math.sin(eAngle);

    const d = `M ${x1} ${y1} A ${r} ${r} 0 ${finalLargeArc} ${finalSweep} ${x2} ${y2}`;

    // Animation
    const arcLen = r * (diff > Math.PI ? 2 * Math.PI - diff : diff);
    const progress = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
    const dashOffset = animate ? interpolate(progress, [0, 1], [arcLen, 0]) : 0;

    // Label Position
    // Mid angle
    let midAngle = sAngle + (finalSweep === 1 ? diff : diff - 2 * Math.PI) / 2;
    const labelR = r * 1.5;
    const lx = cx + labelR * Math.cos(midAngle) + textOffset[0] * scale;
    const ly = cy + labelR * Math.sin(midAngle) - textOffset[1] * scale; // Y flip for offset?

    return (
        <g>
            <path d={d} fill="none" stroke={color} strokeWidth="2" strokeDasharray={animate ? arcLen : undefined} strokeDashoffset={animate ? dashOffset : undefined} />
            {label && (
                <text
                    x={lx} y={ly}
                    fill={textColor || color}
                    fontSize={labelSize}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className={label.includes('$') ? 'math-it' : ''}
                    opacity={animate ? progress : 1}
                >
                    {label.replace(/\$/g, '')}
                </text>
            )}
        </g>
    );
};

export const CircleHighlight: React.FC<{ center: number[], radius: number, color?: string, delay?: number }> = ({ center, radius, color = 'red', delay = 0 }) => {
    const frame = useCurrentFrame();
    const [cx, cy, scale] = transform(center);
    const r = radius * scale; // Or fixed size? Python uses get_circle_radius_for_text which scales.

    const len = 2 * Math.PI * r;
    const progress = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
    const dashOffset = interpolate(progress, [0, 1], [len, 0]);

    return (
        <circle
            cx={cx} cy={cy} r={r}
            fill="none" stroke={color} strokeWidth="3"
            strokeDasharray={len} strokeDashoffset={dashOffset}
            opacity={progress > 0 ? 1 : 0}
        />
    );
};
