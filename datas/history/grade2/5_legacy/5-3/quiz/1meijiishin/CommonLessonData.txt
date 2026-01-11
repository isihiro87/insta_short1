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

// Custom board for high impact text
const HighImpactBoard: React.FC<{
    imageSrc: string;
    text: React.ReactNode;
    speechBubble?: React.ReactNode;
    topLabel?: string;
}> = ({ imageSrc, text, speechBubble, topLabel }) => {
    return (
        <CommonLessonBoard
            imageSize="medium"
            topLabel={topLabel || "ルソーの裏の顔"}
            imageSrc={imageSrc}
            text={text}
            speechBubble={speechBubble}
        />
    );
};

export const commonLessonData: CommonScene[] = [
    // --- Intro ---
    // 教科書に出てくる天才ルソーのヤバい裏の顔、３選！
    {
        id: 'intro-1',
        durationInFrames: 150, // ~5s
        audioSrc: staticFile('audio/explain/01-05_Rousseau.wav'),
        boardContent: () => (
            <HighImpactBoard
                imageSrc={staticFile('images/rousseau_01_portrait.png')} // Placeholder
                topLabel="ヤバい裏の顔"
                text={<>
                    <div style={{ fontSize: '1.2em' }}>天才ルソーの</div>
                    <div style={{
                        fontSize: '2em',
                        fontWeight: 'bold',
                        color: '#D50000',
                        marginTop: '10px'
                    }}>
                        ヤバい裏の顔 ３選！
                    </div>
                </>}
                speechBubble="知ってる？"
            />
        ),
        role: 'explanation',
    },

    // --- Secret 1 ---
    // その１。
    {
        id: 'secret1-title',
        durationInFrames: 45, // ~1.5s
        audioSrc: staticFile('audio/explain/02-05_Rousseau.wav'),
        boardContent: () => (
            <HighImpactBoard
                imageSrc={staticFile('images/rousseau_01_portrait.png')}
                text={<div style={{ fontSize: '2.5em', fontWeight: 'bold' }}>その１</div>}
            />
        ),
        role: 'explanation',
    },
    // 教育のバイブル『エミール』を書いたのに、
    {
        id: 'secret1-1',
        durationInFrames: 90, // ~3s
        audioSrc: staticFile('audio/explain/03-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="裏の顔 その１"
                imageSrc={staticFile('images/rousseau_02_emile.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.2em' }}>教育のバイブル</div>
                    <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>『エミール』</div>
                    <div style={{ fontSize: '1.2em' }}>を書いたのに...</div>
                </>}
                speechBubble="すごい本！"
            />
        ),
        role: 'explanation',
    },
    // 自分の子供５人は全員、
    {
        id: 'secret1-2',
        durationInFrames: 75, // ~2.5s
        audioSrc: staticFile('audio/explain/04-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="裏の顔 その１"
                imageSrc={staticFile('images/rousseau_03_children.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.2em' }}>自分の子供</div>
                    <div style={{ fontSize: '1.5em' }}>５人は全員...</div>
                </>}
                speechBubble="え？"
            />
        ),
        role: 'explanation',
    },
    // 孤児院に送った。
    {
        id: 'secret1-3',
        durationInFrames: 75, // ~2.5s
        audioSrc: staticFile('audio/explain/05-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="裏の顔 その１"
                imageSrc={staticFile('images/rousseau_04_orphanage.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.8em', color: '#D50000', fontWeight: 'bold' }}>孤児院に送った</div>
                </>}
                speechBubble="ひどい..."
            />
        ),
        role: 'explanation',
    },

    // --- Secret 2 ---
    // その２。
    {
        id: 'secret2-title',
        durationInFrames: 45, // ~1.5s
        audioSrc: staticFile('audio/explain/06-05_Rousseau.wav'),
        boardContent: () => (
            <HighImpactBoard
                imageSrc={staticFile('images/rousseau_01_portrait.png')}
                text={<div style={{ fontSize: '2.5em', fontWeight: 'bold' }}>その２</div>}
            />
        ),
        role: 'explanation',
    },
    // 自伝で
    {
        id: 'secret2-1',
        durationInFrames: 45, // ~1.5s
        audioSrc: staticFile('audio/explain/07-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="裏の顔 その２"
                imageSrc={staticFile('images/rousseau_05_book.png')} // Placeholder
                text={<div style={{ fontSize: '1.5em' }}>自伝でカミングアウト</div>}
                speechBubble="何を？"
            />
        ),
        role: 'explanation',
    },
    // 女の先生に叱られるのが好きとカミングアウト。
    {
        id: 'secret2-2',
        durationInFrames: 120, // ~4s
        audioSrc: staticFile('audio/explain/08-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="裏の顔 その２"
                imageSrc={staticFile('images/rousseau_06_teacher.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.2em' }}>女の先生に</div>
                    <div style={{ fontSize: '1.5em', color: '#E65100' }}>叱られるのが好き</div>
                </>}
                speechBubble="えええ..."
            />
        ),
        role: 'explanation',
    },
    // 叱られることに興奮しちゃう、
    {
        id: 'secret2-3',
        durationInFrames: 75, // ~2.5s
        audioSrc: staticFile('audio/explain/09-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="裏の顔 その２"
                imageSrc={staticFile('images/rousseau_06_teacher.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.2em' }}>叱られると...</div>
                    <div style={{ fontSize: '1.5em', color: '#D50000' }}>興奮しちゃう</div>
                </>}
                speechBubble="やばいよ..."
            />
        ),
        role: 'explanation',
    },
    // こじらせ男子。
    {
        id: 'secret2-4',
        durationInFrames: 60, // ~2s
        audioSrc: staticFile('audio/explain/10-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="裏の顔 その２"
                imageSrc={staticFile('images/rousseau_01_portrait.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.8em', fontWeight: 'bold' }}>こじらせ男子</div>
                </>}
                speechBubble="..."
            />
        ),
        role: 'explanation',
    },

    // --- Secret 3 ---
    // その３。
    {
        id: 'secret3-title',
        durationInFrames: 45, // ~1.5s
        audioSrc: staticFile('audio/explain/11-05_Rousseau.wav'),
        boardContent: () => (
            <HighImpactBoard
                imageSrc={staticFile('images/rousseau_01_portrait.png')}
                text={<div style={{ fontSize: '2.5em', fontWeight: 'bold' }}>その３</div>}
            />
        ),
        role: 'explanation',
    },
    // 王様に会いたいと言われたのに、
    {
        id: 'secret3-1',
        durationInFrames: 90, // ~3s
        audioSrc: staticFile('audio/explain/12-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="裏の顔 その３"
                imageSrc={staticFile('images/rousseau_07_king.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.2em' }}>王様に</div>
                    <div style={{ fontSize: '1.5em' }}>「会いたい」と言われた</div>
                </>}
                speechBubble="すごいじゃん！"
            />
        ),
        role: 'explanation',
    },
    // お漏らししたら怖いからという理由で拒否！
    {
        id: 'secret3-2',
        durationInFrames: 120, // ~4s
        audioSrc: staticFile('audio/explain/13-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="裏の顔 その３"
                imageSrc={staticFile('images/rousseau_08_nervous.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.2em' }}>理由：</div>
                    <div style={{ fontSize: '1.4em', color: '#D50000', fontWeight: 'bold' }}>お漏らしが怖いから拒否！</div>
                </>}
                speechBubble="断った！？"
            />
        ),
        role: 'explanation',
    },
    // 極度のあがり症で悩んでいたそうです。
    {
        id: 'secret3-3',
        durationInFrames: 105, // ~3.5s
        audioSrc: staticFile('audio/explain/14-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="裏の顔 その３"
                imageSrc={staticFile('images/rousseau_08_nervous.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.5em', color: '#333' }}>極度のあがり症</div>
                </>}
                speechBubble="緊張しちゃう..."
            />
        ),
        role: 'explanation',
    },

    // --- Achievements ---
    // でも、そんなルソーの業績はやっぱりすごい。
    {
        id: 'achieve-1',
        durationInFrames: 90, // ~3s
        audioSrc: staticFile('audio/explain/15-05_Rousseau.wav'),
        boardContent: () => (
            <HeroProfileLayout
                name="ルソー"
                description="フランスの啓蒙思想家"
                imageSrc={staticFile('images/rousseau_01_portrait.png')} // Placeholder
                achievements={['社会契約論', 'エミール']}
                speechBubble="でもすごい！"
            />
        ),
        role: 'explanation',
    },
    // あの童謡『むすんでひらいて』を作曲したのは彼だし、
    {
        id: 'achieve-2',
        durationInFrames: 120, // ~4s
        audioSrc: staticFile('audio/explain/16-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="ルソーのすごい所"
                imageSrc={staticFile('images/rousseau_09_music.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.2em' }}>童謡『むすんでひらいて』</div>
                    <div style={{ fontSize: '1.5em', color: '#E65100' }}>作曲者は彼！</div>
                </>}
                speechBubble="♪〜"
            />
        ),
        role: 'explanation',
    },
    // 自由・平等を説いて、今の民主主義の土台を作ったのも彼なんです。
    {
        id: 'achieve-3',
        durationInFrames: 150, // ~5s
        audioSrc: staticFile('audio/explain/17-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="ルソーのすごい所"
                imageSrc={staticFile('images/rousseau_01_portrait.png')} // Placeholder
                text={<>
                    <div style={{ fontSize: '1.2em' }}>自由・平等を説き</div>
                    <div style={{ fontSize: '1.4em', fontWeight: 'bold' }}>民主主義の土台を作った</div>
                </>}
                speechBubble="社会契約論！"
            />
        ),
        role: 'explanation',
    },

    // --- Quote ---
    // そんな彼の名言。
    {
        id: 'quote-intro',
        durationInFrames: 60, // ~2s
        audioSrc: staticFile('audio/explain/18-05_Rousseau.wav'),
        boardContent: () => (
            <HighImpactBoard
                imageSrc={staticFile('images/rousseau_01_portrait.png')}
                text={<div style={{ fontSize: '2em' }}>ルソーの名言</div>}
            />
        ),
        role: 'explanation',
    },
    // 人間は生まれながらにして自由であるが、至るところで鎖につながれている
    {
        id: 'quote-body',
        durationInFrames: 180, // ~6s
        audioSrc: staticFile('audio/explain/19-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="ルソーの名言"
                imageSrc={staticFile('images/rousseau_01_portrait.png')} // Placeholder
                text={<div style={{ textAlign: 'left', padding: '0 20px', fontFamily: 'serif' }}>
                    <p style={{ fontSize: '1.2em', marginBottom: '10px' }}>人間は生まれながらにして<br /><span style={{ color: '#E65100', fontWeight: 'bold' }}>自由</span>であるが、</p>
                    <p style={{ fontSize: '1.2em' }}>至るところで<br /><span style={{ color: '#333', fontWeight: 'bold' }}>鎖につながれている</span></p>
                </div>}
                speechBubble="深い..."
            />
        ),
        role: 'explanation',
    },

    // --- Conclusion ---
    // 天才？変態？
    {
        id: 'conc-1',
        durationInFrames: 60, // ~2s
        audioSrc: staticFile('audio/explain/20-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="ルソー"
                imageSrc={staticFile('images/rousseau_01_portrait.png')} // Placeholder
                text={<>
                    <span style={{ fontSize: '2em', color: '#E65100', marginRight: '20px' }}>天才？</span>
                    <span style={{ fontSize: '2em', color: '#D50000' }}>変態？</span>
                </>}
                speechBubble="どっち？"
            />
        ),
        role: 'explanation',
    },
    // みんなはどう思う？
    {
        id: 'conc-2',
        durationInFrames: 60, // ~2s
        audioSrc: staticFile('audio/explain/21-05_Rousseau.wav'),
        boardContent: () => (
            <CommonLessonBoard
                imageSize="medium"
                topLabel="ルソー"
                imageSrc={staticFile('images/rousseau_01_portrait.png')} // Placeholder
                text={<div style={{ fontSize: '2.5em' }}>？</div>}
                speechBubble="コメントしてね！"
            />
        ),
        role: 'explanation',
    },
];
