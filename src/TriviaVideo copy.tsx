import { AbsoluteFill, Audio, Img, Sequence, staticFile, useCurrentFrame, spring, useVideoConfig, interpolate } from 'remotion';
import React from 'react';
import { loadFont } from "@remotion/google-fonts/NotoSansJP";
import { loadFont as loadReggaeFont } from "@remotion/google-fonts/ReggaeOne";
import { loadFont as loadZenMaruFont } from "@remotion/google-fonts/ZenMaruGothic";

const { fontFamily } = loadFont();
const { fontFamily: reggaeFont } = loadReggaeFont();
const { fontFamily: roundedFont } = loadZenMaruFont();

// --- Layout Constants ---
const LAYOUT = {
    HEADER_Y: -280,
    TITLE_Y: -160,
    CENTER_Y: 0,
    SUBTITLE_Y: 220,
    FOOTER_Y: 380,
};

// --- styled components & helpers ---
const Background: React.FC<{ color: string }> = ({ color }) => (
    <AbsoluteFill style={{ backgroundColor: color }} />
);

const TextOverlay: React.FC<{
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
}> = ({ text, size = 60, color = 'white', x = 0, y = 0, rotate = 0, shake = false, scale = 1, opacity = 1, fontFamily, lineHeight, outlineColor, outlineWidth }) => {
    const frame = useCurrentFrame();
    const shakeOffset = 0; // Animation removed as per user request

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
            WebkitTextStroke: `${effectiveOutlineWidth} ${effectiveOutlineColor}`,
            paintOrder: 'stroke fill',
        }}>
            {text}
        </div>
    );
};

// --- Main Component ---
export const TriviaVideo: React.FC = () => {
    // Tight Timing Calculation
    // Intro
    const introDuration = 111;

    // Secret 1
    const s1_01 = 30;
    const s1_02 = 88;
    const s1_03 = 62;
    const s1_04 = 42;
    const secret1Duration = s1_01 + s1_02 + s1_03 + s1_04;

    // Secret 2
    const s2_05 = 26;
    const s2_06 = 32;
    const s2_07 = 93;
    const s2_08 = 63;
    const s2_09 = 38;
    const secret2Duration = s2_05 + s2_06 + s2_07 + s2_08 + s2_09;

    // Secret 3
    const s3_10 = 29;
    const s3_11 = 58;
    const s3_12 = 81;
    const s3_13 = 78;
    const secret3Duration = s3_10 + s3_11 + s3_12 + s3_13;

    // Achievements
    const ach_14 = 104;
    const ach_15 = 124;
    const ach_16 = 152;
    const achievementsDuration = ach_14 + ach_15 + ach_16;

    // Quote
    const q_18 = 47;
    const q_19 = 159;
    // Quote scene logic
    const quoteBodyDuration = 206;
    const conclusionDuration = 94;
    const quoteSceneTotalDuration = quoteBodyDuration + conclusionDuration;

    // Start frames
    const secret1Start = introDuration;
    const secret2Start = secret1Start + secret1Duration;
    const secret3Start = secret2Start + secret2Duration;
    const achievementsStart = secret3Start + secret3Duration;
    const quoteStart = achievementsStart + achievementsDuration;

    const totalDuration = quoteStart + quoteSceneTotalDuration;

    return (
        <AbsoluteFill style={{ fontFamily, backgroundColor: 'black' }}>
            <Sequence from={0} durationInFrames={introDuration}>
                <IntroScene />
            </Sequence>

            <Audio src={staticFile('audio/Musunde_child.mp3')} volume={0.1} loop />

            <Sequence from={secret1Start} durationInFrames={secret1Duration}>
                <Secret1Scene />
            </Sequence>

            <Sequence from={secret2Start} durationInFrames={secret2Duration}>
                <Secret2Scene />
            </Sequence>

            <Sequence from={secret3Start} durationInFrames={secret3Duration}>
                <Secret3Scene />
            </Sequence>

            <Sequence from={achievementsStart} durationInFrames={achievementsDuration}>
                <AchievementsScene />
            </Sequence>

            <Sequence from={quoteStart}>
                <QuoteScene bodyDuration={quoteBodyDuration} />
            </Sequence>
        </AbsoluteFill>
    );
};

// --- Scene Components ---

const IntroScene = () => {
    return (
        <AbsoluteFill>
            <Audio src={staticFile('audio/explain/00-Rousseau.wav')} />
            <Img src={staticFile('images/rousseau_01_portrait.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
            <TextOverlay text="天才・ルソー" y={LAYOUT.HEADER_Y} size={100} />

            <Sequence from={45}>
                <TextOverlay text="ヤバい" y={LAYOUT.CENTER_Y} size={200} color="red" fontFamily={reggaeFont} />
            </Sequence>
            <Sequence from={60}>
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-15deg)',
                    fontSize: 200, color: 'red', fontWeight: '900',
                    fontFamily: reggaeFont,
                    WebkitTextStroke: '5px white', // White outline for red text
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                    paintOrder: 'stroke fill'
                }}>
                    裏の顔3選
                </div>
            </Sequence>
        </AbsoluteFill>
    );
};

const Secret1Scene = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleScale = spring({
        frame,
        fps,
        config: {
            damping: 12,
            stiffness: 200,
        }
    });

    return (
        <AbsoluteFill style={{ backgroundColor: '#220000' }}>
            <Sequence from={0} durationInFrames={30}><Audio src={staticFile('audio/explain/01-Rousseau.wav')} /></Sequence>
            <Sequence from={30} durationInFrames={88}><Audio src={staticFile('audio/explain/02-Rousseau.wav')} /></Sequence>
            <Sequence from={118} durationInFrames={62}><Audio src={staticFile('audio/explain/03-Rousseau.wav')} /></Sequence>
            <Sequence from={180}><Audio src={staticFile('audio/explain/04-Rousseau.wav')} /></Sequence>

            {/* Background Images */}
            <Sequence from={0}>
                <Img src={staticFile('images/rousseau_04_orphanage.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
            </Sequence>



            <Sequence from={40} durationInFrames={78}>
                <TextOverlay text="教育の神様" y={LAYOUT.CENTER_Y - 80} size={110} />
                <TextOverlay text="『エミール』執筆" y={LAYOUT.CENTER_Y + 80} size={110} />
            </Sequence>

            <Sequence from={118}>
                <TextOverlay text="自分の子ども" y={LAYOUT.CENTER_Y - 80} size={110} />
                <TextOverlay text="５人全員" y={LAYOUT.CENTER_Y + 80} size={110} shake />
                <Sequence from={62}>
                    <TextOverlay text="孤児院送り" y={0} size={180} color="#D50000" shake fontFamily={reggaeFont} rotate={-10} />
                </Sequence>
            </Sequence>
            <Sequence from={0} durationInFrames={40}>
                <TextOverlay text="裏の顔①" size={200} color="red" fontFamily={reggaeFont} rotate={10} scale={titleScale} />
            </Sequence>
        </AbsoluteFill>
    );
}

const Secret2Scene = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleScale = spring({
        frame,
        fps,
        config: {
            damping: 12,
            stiffness: 200,
        }
    });

    return (
        <AbsoluteFill style={{ backgroundColor: '#111' }}>
            <Sequence from={0} durationInFrames={26}><Audio src={staticFile('audio/explain/05-Rousseau.wav')} /></Sequence>
            <Sequence from={26} durationInFrames={32}><Audio src={staticFile('audio/explain/06-Rousseau.wav')} /></Sequence>
            <Sequence from={58} durationInFrames={93}><Audio src={staticFile('audio/explain/07-Rousseau.wav')} /></Sequence>
            <Sequence from={151} durationInFrames={63}><Audio src={staticFile('audio/explain/08-Rousseau.wav')} /></Sequence>
            <Sequence from={214}><Audio src={staticFile('audio/explain/09-Rousseau.wav')} /></Sequence>

            {/* Backgrounds */}
            <Sequence from={0} durationInFrames={26}>
                <Img src={staticFile('images/rousseau_01_portrait.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
            </Sequence>
            <Sequence from={26}>
                <Img src={staticFile('images/rousseau_06_teacher.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
            </Sequence>

            <Sequence from={56}>
                <Sequence>
                    <TextOverlay text="女の先生に" y={LAYOUT.CENTER_Y - 80} size={115} />
                    <TextOverlay text="叱られると..." y={LAYOUT.CENTER_Y + 80} size={115} />
                </Sequence>
            </Sequence>

            <Sequence from={176}>
                <TextOverlay text="興奮♡" y={LAYOUT.CENTER_Y} size={250} color="#FF69B4" rotate={-10} />
            </Sequence>

            <Sequence from={0} durationInFrames={26}>
                <TextOverlay text="裏の顔②" size={200} color="red" fontFamily={reggaeFont} rotate={10} scale={titleScale} />
            </Sequence>
        </AbsoluteFill>
    );
}

const Secret3Scene = () => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const titleScale = spring({
        frame,
        fps,
        config: {
            damping: 12,
            stiffness: 200,
        }
    });

    return (
        <AbsoluteFill style={{ backgroundColor: '#002200' }}>
            <Sequence from={0} durationInFrames={29}><Audio src={staticFile('audio/explain/10-Rousseau.wav')} /></Sequence>
            <Sequence from={29} durationInFrames={58}><Audio src={staticFile('audio/explain/11-Rousseau.wav')} /></Sequence>
            <Sequence from={87} durationInFrames={81}><Audio src={staticFile('audio/explain/12-Rousseau.wav')} /></Sequence>
            <Sequence from={168}><Audio src={staticFile('audio/explain/13-Rousseau.wav')} /></Sequence>

            <Img src={staticFile('images/rousseau_07_king.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />

            <Img src={staticFile('images/rousseau_07_king.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />

            <Sequence from={33}>
                <Sequence>
                    <TextOverlay text="王様「会いたい」" y={LAYOUT.CENTER_Y} size={115} />
                </Sequence>
            </Sequence>

            <Sequence from={85}>
                <TextOverlay text="お漏らしが怖い" y={LAYOUT.CENTER_Y + 180} size={115} color="#FFF" shake />
                <Sequence from={62}>
                    <TextOverlay text="拒否" y={80} size={250} color="red" fontFamily={reggaeFont} rotate={-10} />
                </Sequence>
            </Sequence>

            <Sequence from={0} durationInFrames={33}>
                <TextOverlay text="裏の顔③" size={200} color="red" fontFamily={reggaeFont} rotate={10} scale={titleScale} />
            </Sequence>
        </AbsoluteFill>
    );
}

const AchievementsScene = () => {
    const frame = useCurrentFrame();
    const bgOpacity = interpolate(frame, [104, 114], [0, 1], { extrapolateRight: 'clamp' });
    return (
        <AbsoluteFill style={{ backgroundColor: 'black' }}>
            <Sequence from={0} durationInFrames={104}><Audio src={staticFile('audio/explain/14-Rousseau.wav')} /></Sequence>
            <Sequence from={104} durationInFrames={124}><Audio src={staticFile('audio/explain/15-Rousseau.wav')} /></Sequence>
            <Sequence from={228}><Audio src={staticFile('audio/explain/16-Rousseau.wav')} /></Sequence>

            {/* Background */}

            <Sequence from={0} durationInFrames={104}>
                <Img src={staticFile('images/rousseau_01_portrait.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                {/* Black text, should default to white outlines */}
                <TextOverlay text="でも..." y={LAYOUT.CENTER_Y} size={115} color="white" />
            </Sequence>

            <Sequence from={65} durationInFrames={39}>
                <TextOverlay text="やっぱりすごい" y={LAYOUT.CENTER_Y + 180} size={115} color="white" />
            </Sequence>

            <Sequence from={104} durationInFrames={124}>
                <Img src={staticFile('images/rousseau_tie.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: bgOpacity }} />
                <AbsoluteFill style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', opacity: bgOpacity }} />
                <TextOverlay text="『むすんでひらいて』" y={LAYOUT.SUBTITLE_Y - 650} size={100} color="white" outlineColor="black" outlineWidth="8px" />
                <TextOverlay text="を作曲！" y={LAYOUT.SUBTITLE_Y - 500} size={100} color="white" outlineColor="black" outlineWidth="8px" />
            </Sequence>


            <Sequence from={228}>
                <Img src={staticFile('images/Rousseau_free.png')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                <AbsoluteFill style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', opacity: bgOpacity }} />
                <Sequence from={58}>
                    <AbsoluteFill>
                        <TextOverlay text="今の民主主義の" y={LAYOUT.CENTER_Y - 90} size={100} />
                        <TextOverlay text="土台を作った！" y={LAYOUT.CENTER_Y + 70} size={110} color="white" />
                    </AbsoluteFill>
                </Sequence>
            </Sequence>
        </AbsoluteFill >
    );
}

const QuoteScene: React.FC<{ bodyDuration: number }> = ({ bodyDuration }) => {
    const frame = useCurrentFrame();
    return (
        <AbsoluteFill style={{ backgroundColor: 'black' }}>
            <Sequence from={0} durationInFrames={47}><Audio src={staticFile('audio/explain/18-Rousseau.wav')} /></Sequence>
            <Sequence from={47} durationInFrames={159}><Audio src={staticFile('audio/explain/19-Rousseau.wav')} /></Sequence>

            {/* Background */}
            <Img src={staticFile('images/rousseau_01_portrait.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />

            <Sequence from={0} durationInFrames={bodyDuration}>
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    color: 'white', fontSize: 95, fontWeight: 'bold', textAlign: 'center', width: '90%', maxWidth: '950px',
                    textShadow: '3px 3px 0 black'
                }}>
                    <div style={{ marginBottom: '0', opacity: frame >= 47 ? 1 : 0  }}>
                        「人間は生まれながらにして自由であるが、
                    </div>
                    <div style={{ opacity: frame >= 131 ? 1 : 0 }}>
                        <div>
                            至るところで<span style={{ color: '#D50000', fontSize: '1.3em', textShadow: '3px 3px 0 white', WebkitTextStroke: '1px white' }}>鎖</span>に<br />つながれている」
                        </div>
                    </div>
                </div>
            </Sequence>

            {/* Conclusion */}
            <Sequence from={bodyDuration}>
                <Sequence from={0} durationInFrames={26}><Audio src={staticFile('audio/explain/20-Rousseau.wav')} /></Sequence>
                <Sequence from={26} durationInFrames={26}><Audio src={staticFile('audio/explain/21-Rousseau.wav')} /></Sequence>
                <Sequence from={52}><Audio src={staticFile('audio/explain/22-Rousseau.wav')} /></Sequence>

                <Img src={staticFile('images/rousseau_01_portrait.jpg')} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
                <TextOverlay text="天才？" y={LAYOUT.TITLE_Y - 100} x={-150} size={180} color="gold" rotate={-10} />
                <Sequence from={26}>
                    <TextOverlay text="変態？" y={LAYOUT.CENTER_Y} x={150} size={180} color="red" rotate={10} fontFamily={reggaeFont} />
                </Sequence>
                <Sequence from={52}>
                    <TextOverlay text="どう思う？" y={LAYOUT.SUBTITLE_Y + 50} size={100} />
                </Sequence>
            </Sequence>
        </AbsoluteFill >
    );
}
