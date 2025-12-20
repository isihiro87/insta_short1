import React from 'react';
import { AbsoluteFill } from 'remotion';
import { loadFont } from "@remotion/google-fonts/NotoSansJP";
import { loadFont as loadReggaeFont } from "@remotion/google-fonts/ReggaeOne";
import { PatternPlayer } from './components/patterns/PatternPlayer';
import { industryRevScenario } from './scenarios/IndustryRev';

const { fontFamily } = loadFont();
const { fontFamily: reggaeFont } = loadReggaeFont();

// Determine total frames from scenario
const totalFrames = industryRevScenario.scenes.reduce((acc, scene) => acc + scene.durationInFrames, 0);

export const RefactoredTriviaVideo: React.FC = () => {
    return (
        <AbsoluteFill style={{ fontFamily, backgroundColor: 'black' }}>
            <PatternPlayer scenario={industryRevScenario} />
            <div style={{ fontFamily: reggaeFont, display: 'none' }}>Font Loader Hack</div>
        </AbsoluteFill>
    );
};
