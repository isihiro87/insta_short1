import { AbsoluteFill, Audio, Series, staticFile, useCurrentFrame, interpolate } from 'remotion';
import React from 'react';
import { IchimonIttoBoard, SubjectTheme } from './components/rhythm/IchimonIttoBoard';
import { ichimonIttoData, IchimonIttoScene, titleData, TitleScene } from './IchimonIttoData';

// Sub-component for Title Phase
// (TitlePhase component logic moved or removed as per design)

// Sub-component for Question Phase to handle frame logic
const QuestionPhase: React.FC<{
    scene: IchimonIttoScene;
    subject: SubjectTheme;
    index: number;
    total: number;
    countdownDuration: number;
    title: string;
}> = ({ scene, subject, index, total, countdownDuration, title }) => {
    const frame = useCurrentFrame();
    const isReading = frame < scene.questionDuration;

    // Timer Logic: Gauge decreases from 1 to 0 over the ENTIRE duration (reading + countdown)
    // The user wants: "Gauge starts decreasing at the same time as reading starts, and becomes 0 at the moment of switching"
    const totalDuration = scene.questionDuration + countdownDuration;

    const timerProgress = interpolate(
        frame,
        [0, totalDuration],
        [1, 0],
        { extrapolateRight: 'clamp' }
    );

    return (
        <AbsoluteFill>
            <Audio src={staticFile(scene.questionAudio)} volume={1.0} />
            <IchimonIttoBoard
                phase="question"
                description={scene.description}
                question={scene.question}
                answer={scene.answer}
                subject={subject}
                currentQuestionIndex={index + 1}
                totalQuestions={total}
                isTalking={isReading}
                timerProgress={timerProgress}
                title={title}
            />
        </AbsoluteFill>
    );
};

// Sub-component for Answer Phase
const AnswerPhase: React.FC<{
    scene: IchimonIttoScene;
    subject: SubjectTheme;
    index: number;
    total: number;
    title: string;
}> = ({ scene, subject, index, total, title }) => {
    const frame = useCurrentFrame();

    // Reading logic
    const isReading = frame < scene.answerDuration;

    return (
        <AbsoluteFill>
            <Audio src={staticFile(scene.answerAudio)} volume={1.0} />
            <IchimonIttoBoard
                phase="answer"
                description={scene.description}
                question={scene.question}
                answer={scene.answer}
                subject={subject}
                currentQuestionIndex={index + 1}
                totalQuestions={total}
                isTalking={isReading}
                timerProgress={0} // Gauge empty
                title={title}
            />
        </AbsoluteFill>
    );
};

export const IchimonIttoShortsVideo: React.FC<{
    scenes?: IchimonIttoScene[];
    titleScene?: TitleScene;
    subject?: SubjectTheme;
}> = ({
    scenes = ichimonIttoData,
    titleScene = titleData,
    subject = 'history',
}) => {
        const COUNTDOWN_DURATION = 50; // Approx 1.6 seconds (less than 3s)
        const ANSWER_BUFFER = 30; // 1 second buffer after answer

        return (
            <AbsoluteFill style={{ backgroundColor: 'white' }}>
                <Audio src={staticFile('audio/bgm.mp3')} volume={0.05} loop />

                <Series>
                    {/* Title Phase Removed */}

                    {scenes.map((scene, index) => (
                        <React.Fragment key={scene.id}>
                            {/* Question Phase */}
                            <Series.Sequence durationInFrames={scene.questionDuration + COUNTDOWN_DURATION}>
                                <QuestionPhase
                                    scene={scene}
                                    subject={subject}
                                    index={index}
                                    total={scenes.length}
                                    countdownDuration={COUNTDOWN_DURATION}
                                    title={titleScene.title}
                                />
                            </Series.Sequence>

                            {/* Answer Phase */}
                            <Series.Sequence durationInFrames={scene.answerDuration + ANSWER_BUFFER}>
                                <AnswerPhase
                                    scene={scene}
                                    subject={subject}
                                    index={index}
                                    total={scenes.length}
                                    title={titleScene.title}
                                />
                            </Series.Sequence>
                        </React.Fragment>
                    ))}
                </Series>
            </AbsoluteFill>
        );
    };
