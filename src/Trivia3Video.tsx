import React from 'react';
import { AbsoluteFill } from 'remotion';
import { loadFont } from "@remotion/google-fonts/NotoSansJP";
import { loadFont as loadReggaeFont } from "@remotion/google-fonts/ReggaeOne";
import { PatternPlayer } from './components/patterns/PatternPlayer';
import { trivia3Scenario } from './scenarios/trivia3';

const { fontFamily } = loadFont();
const { fontFamily: reggaeFont } = loadReggaeFont();

export const Trivia3Video: React.FC = () => {
    return (
        <AbsoluteFill style={{ fontFamily, backgroundColor: 'black' }}>
            <PatternPlayer scenario={trivia3Scenario} />
            <div style={{ fontFamily: reggaeFont, display: 'none' }}>Font Loader Hack</div>
        </AbsoluteFill>
    );
};
