import { AbsoluteFill, Audio, Series, staticFile, useCurrentFrame, interpolate, Sequence } from 'remotion';
import React from 'react';
import { IchimonIttoBoard, SubjectTheme } from './components/rhythm/IchimonIttoBoard';
import { ichimonIttoData, IchimonIttoScene } from './IchimonIttoData';
import { SaveIcon } from './components/SaveIcon';

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
    const isReading = frame < scene.questionDuration - 8;

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

// Sub-component for Answer Phase with End Card Overlay
const AnswerPhase: React.FC<{
    scene: IchimonIttoScene;
    subject: SubjectTheme;
    index: number;
    total: number;
    isLast: boolean;
    endCardDuration: number;
    title: string;
}> = ({ scene, subject, index, total, isLast, endCardDuration, title }) => {
    const frame = useCurrentFrame();
    const answerDurationWithBuffer = scene.answerDuration + 45; // 45 is ANSWER_BUFFER

    // Reading logic
    const isReading = frame < scene.answerDuration - 8;

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

            {/* End Card Overlay & Audio */}
            {isLast && (
                <Sequence from={answerDurationWithBuffer}>
                    <Audio
                        src={staticFile('audio/explain/finish.wav')}
                        volume={1.0}
                    />
                    <AbsoluteFill
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent white
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontFamily: '"Mochiy Pop One", sans-serif',
                            zIndex: 10,
                            opacity: 0,
                            animation: 'fadeIn 0.5s forwards',
                        }}
                    >
                        <style>
                            {`
                                @keyframes fadeIn {
                                    from { opacity: 0; }
                                    to { opacity: 1; }
                                }
                            `}
                        </style>
                        <div style={{ width: '20%', marginBottom: 30 }}>
                            <SaveIcon color="#333" />
                        </div>
                        <div
                            style={{
                                fontSize: 56,
                                fontWeight: 'bold',
                                color: '#333',
                                textAlign: 'center',
                                lineHeight: 1.4,
                            }}
                        >
                            保存して<br />
                            テスト前に見返そう！
                        </div>
                    </AbsoluteFill>
                </Sequence>
            )}
        </AbsoluteFill>
    );
};

export const IchimonIttoShortsVideo: React.FC<{
    scenes?: IchimonIttoScene[];
    subject?: SubjectTheme;
    title?: string;
}> = ({
    scenes = ichimonIttoData,
    subject = 'history',
    title = '中2　歴史',
}) => {
        const COUNTDOWN_DURATION = 45; // Unified pause after question
        const ANSWER_BUFFER = 45; // Unified pause after answer
        const END_CARD_DURATION = 0; // エンドカード無効化

        return (
            <AbsoluteFill style={{ backgroundColor: 'white' }}>
                <Audio src={staticFile('audio/bgm.mp3')} volume={0.05} loop />

                <Series>
                    {scenes.map((scene, index) => {
                        const isLast = index === scenes.length - 1;
                        // 最後のシーンはバッファなし（余白の白い時間を削除）
                        const answerPhaseDuration = scene.answerDuration + (isLast ? 0 : ANSWER_BUFFER);

                        return (
                            <React.Fragment key={scene.id}>
                                {/* Question Phase */}
                                <Series.Sequence durationInFrames={scene.questionDuration + COUNTDOWN_DURATION}>
                                    <QuestionPhase
                                        scene={scene}
                                        subject={subject}
                                        index={index}
                                        total={scenes.length}
                                        countdownDuration={COUNTDOWN_DURATION}
                                        title={title}
                                    />
                                </Series.Sequence>

                                {/* Answer Phase */}
                                <Series.Sequence durationInFrames={answerPhaseDuration}>
                                    <AnswerPhase
                                        scene={scene}
                                        subject={subject}
                                        index={index}
                                        total={scenes.length}
                                        isLast={false} // エンドカード無効化
                                        endCardDuration={END_CARD_DURATION}
                                        title={title}
                                    />
                                </Series.Sequence>
                            </React.Fragment>
                        );
                    })}
                </Series>
            </AbsoluteFill>
        );
    };
