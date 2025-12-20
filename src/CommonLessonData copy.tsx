import { staticFile } from 'remotion';
import React from 'react';
import { CommonLessonBoard } from './components/common/CommonLessonBoard';
import { HeroProfileLayout, QuizLayout } from './components/common/HistoryLayouts';

export interface CommonScene {
    id: string;
    durationInFrames: number;
    audioSrc: string;
    boardContent: () => React.ReactNode;
    role: 'explanation' | 'answer' | 'question' | 'transition';
    customPauseAfter?: number;
}

export const commonLessonData: CommonScene[] = [
    // 1. Quiz Start (Mondai!)
    {
        id: 'quiz-start',
        durationInFrames: 30, // 0.989s
        audioSrc: staticFile('audio/explain/00-03_France.wav'),
        boardContent: () => (
            <QuizLayout
                question="超豪華な「ベルサイユ宮殿」になかったものは次のうちどれ？"
                options={['鏡', 'トイレ', '庭', '噴水']}
                correctIndex={1}
                isAnswerPhase={false}
                speechBubble="わかるかな？"
            />
        ),
        role: 'question',
        customPauseAfter: 0,
    },
    // 2. Quiz Question Reading
    {
        id: 'quiz-q',
        durationInFrames: 123, // 4.109s
        audioSrc: staticFile('audio/explain/01-03_France.wav'),
        boardContent: () => (
            <QuizLayout
                question="超豪華な「ベルサイユ宮殿」になかったものは次のうちどれ？"
                options={['鏡', 'トイレ', '庭', '噴水']}
                correctIndex={1}
                isAnswerPhase={false}
                speechBubble="わかるかな？"
            />
        ),
        role: 'question',
    },
    // 3. Answer Transition (Seikai wa...)
    {
        id: 'quiz-pre-a',
        durationInFrames: 39, // 1.288s
        audioSrc: staticFile('audio/explain/02-03_France.wav'),
        boardContent: () => (
            <QuizLayout
                question="超豪華な「ベルサイユ宮殿」になかったものは次のうちどれ？"
                options={['鏡', 'トイレ', '庭', '噴水']}
                correctIndex={1}
                isAnswerPhase={false}
                speechBubble="正解は..."
            />
        ),
        role: 'answer',
        customPauseAfter: 10,
    },
    // 4. Answer Reveal (Toire!)
    {
        id: 'quiz-a',
        durationInFrames: 34, // 1.133s
        audioSrc: staticFile('audio/explain/03-03_France.wav'),
        boardContent: () => (
            <QuizLayout
                question="超豪華な「ベルサイユ宮殿」になかったものは次のうちどれ？"
                options={['鏡', 'トイレ', '庭', '噴水']}
                correctIndex={1}
                isAnswerPhase={true}
                speechBubble="トイレ！"
            />
        ),
        role: 'answer',
    },

    // --- Explanation ---
    // 5. 実は当時、庭の茂みやおまるを使っていたそうです。
    {
        id: 'intro-1',
        durationInFrames: 133, // 4.448s
        audioSrc: staticFile('audio/explain/04-03_France.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="フランス革命"
                imageSrc={staticFile('images/france_01_versailles.png')}
                text={<>
                    <div style={{ fontSize: '1.2em' }}>庭の茂みやおまる！？</div>
                </>}
                speechBubble="衝撃の事実..."
            />
        ),
        role: 'explanation',
    },
    // 6. 見た目は豪華でも、実は不潔？
    {
        id: 'intro-2',
        durationInFrames: 96, // 3.194s
        audioSrc: staticFile('audio/explain/05-03_France.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="フランス革命"
                imageSrc={staticFile('images/france_01_versailles.png')}
                text={<>
                    <div style={{ fontSize: '1.2em' }}>見た目は豪華でも...</div>
                    <div style={{ fontSize: '1.5em', color: '#E65100' }}>実は不潔？</div>
                </>}
                speechBubble="えええ..."
            />
        ),
        role: 'explanation',
    },
    // 7. 当時のフランス社会も同じでした。
    {
        id: 'intro-3',
        durationInFrames: 79, // 2.642s
        audioSrc: staticFile('audio/explain/06-03_France.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="フランス革命"
                imageSrc={staticFile('images/france_01_versailles.png')}
                text={<>
                    <div style={{ fontSize: '1.2em' }}>当時のフランス社会も</div>
                    <div style={{ fontSize: '1.2em' }}>同じでした</div>
                </>}
                speechBubble="社会も？"
            />
        ),
        role: 'explanation',
    },
    // 8. 17世紀後半、国王が全権を握る「絶対王政」の時代。
    {
        id: 'absolute-1',
        durationInFrames: 183, // 6.098s
        audioSrc: staticFile('audio/explain/07-03_France.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="フランス革命"
                imageSrc={staticFile('images/france_02_louis.png')} // TODO: Add image
                text={<>
                    <div style={{ fontSize: '1.2em' }}>国王が全権を握る</div>
                    <div style={{ fontSize: '1.5em', color: '#D50000', fontWeight: 'bold' }}>絶対王政</div>
                </>}
                speechBubble="私がルールだ！"
            />
        ),
        role: 'explanation',
    },
    // 9. 特権階級が贅沢をする一方、
    {
        id: 'absolute-2',
        durationInFrames: 89, // 2.968s
        audioSrc: staticFile('audio/explain/08-03_France.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="フランス革命"
                imageSrc={staticFile('images/france_02_louis.png')}
                text={<>
                    <div style={{ fontSize: '1.2em' }}>特権階級の贅沢</div>
                </>}
                speechBubble="うめぇ〜"
            />
        ),
        role: 'explanation',
    },
    // 10. 多くの平民は重税に苦しんでいました。
    {
        id: 'absolute-3',
        durationInFrames: 97, // 3.229s
        audioSrc: staticFile('audio/explain/09-03_France.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="フランス革命"
                imageSrc={staticFile('images/france_03_revolution.png')}
                text={<>
                    <div style={{ fontSize: '1.2em' }}>多くの平民は</div>
                    <div style={{ fontSize: '1.5em', color: '#333' }}>重税に苦しむ...</div>
                </>}
                speechBubble="苦しい..."
            />
        ),
        role: 'explanation',
    },
    // 11. 1789年、ついに人々の怒りが爆発し「フランス革命」が始まります。
    {
        id: 'revolution-1',
        durationInFrames: 225, // 7.5146s
        audioSrc: staticFile('audio/explain/10-03_France.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="フランス革命"
                imageSrc={staticFile('images/france_04_revolution.png')} // TODO: Add image
                text={<>
                    <div style={{ fontSize: '1.2em' }}>1789年</div>
                    <div style={{ fontSize: '1.5em', color: '#D50000', fontWeight: 'bold' }}>フランス革命</div>
                </>}
                speechBubble="もう我慢できない！"
            />
        ),
        role: 'explanation',
    },
    // 12. 「人権宣言」によって自由と平等が掲げられ、
    {
        id: 'revolution-2',
        durationInFrames: 122, // 4.069s
        audioSrc: staticFile('audio/explain/11-03_France.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="フランス革命"
                imageSrc={staticFile('images/france_03_revolution.png')}
                text={<>
                    <div style={{ fontSize: '1.2em' }}>人権宣言</div>
                    <div style={{ fontSize: '1.5em', color: '#E65100' }}>自由と平等</div>
                </>}
                speechBubble="みんな平等だ！"
            />
        ),
        role: 'explanation',
    },
    // 13. 王が絶対だった古い社会は崩れ去りました。
    {
        id: 'revolution-3',
        durationInFrames: 105, // 3.488s
        audioSrc: staticFile('audio/explain/12-03_France.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="フランス革命"
                imageSrc={staticFile('images/france_03_revolution.png')}
                text={<>
                    <div style={{ fontSize: '1.2em' }}>王が絶対だった</div>
                    <div style={{ fontSize: '1.2em' }}>古い社会は崩壊</div>
                </>}
                speechBubble="新しい時代へ"
            />
        ),
        role: 'explanation',
    },
    // 14. その後、混乱する国をまとめ皇帝になったのが
    {
        id: 'napoleon-1',
        durationInFrames: 131, // 4.36s
        audioSrc: staticFile('audio/explain/13-03_France.wav'),
        boardContent: () => (
            <HeroProfileLayout
                name="ナポレオン"
                description="フランス皇帝"
                imageSrc={staticFile('images/france_06_napoleon.png')} // TODO: Add image
                achievements={['フランス革命の精神を広めた']}
                speechBubble="私がまとめる！"
            />
        ),
        role: 'explanation',
    },
    // 15. ナポレオンです。
    {
        id: 'napoleon-2',
        durationInFrames: 41, // 1.354s
        audioSrc: staticFile('audio/explain/14-03_France.wav'),
        boardContent: () => (
            <HeroProfileLayout
                name="ナポレオン"
                description="フランス皇帝"
                imageSrc={staticFile('images/france_04_napoleon.png')}
                achievements={['フランス革命の精神を広めた']}
                speechBubble="ナポレオン！"
            />
        ),
        role: 'explanation',
    },
    // 16. 彼の遠征によって、革命の精神は世界中へ広まっていきました。
    {
        id: 'napoleon-3',
        durationInFrames: 165, // 5.488s
        audioSrc: staticFile('audio/explain/15-03_France.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="フランス革命"
                imageSrc={staticFile('images/france_04_napoleon.png')}
                text={<>
                    <div style={{ fontSize: '1.2em' }}>革命の精神は</div>
                    <div style={{ fontSize: '1.5em', color: '#E65100' }}>世界中へ！</div>
                </>}
                speechBubble="自由を届ける！"
            />
        ),
        role: 'explanation',
    },
];
