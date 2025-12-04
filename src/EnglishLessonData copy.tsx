import { staticFile } from 'remotion';
import {
    QuizBoard,
    EnglishLessonBoard,
    LessonLabel,
    LessonText,
} from './components/english';
import { Scene } from './data';

export type { Scene };

const AUDIO_BASE = 'audio/explain/part';
// const TOPIC = '比較級最上級';

export const englishLessonData: Scene[] = [
    // 1. Basic Fill-in (Standard)
    {
        id: 'pattern-01',
        durationInFrames: 90,
        audioSrc: staticFile(`${AUDIO_BASE}01.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText="このバッグはあのバッグより古いです。"
                englishText={<>This bag is (　) than that bag.</>}
            // speechBubble="解けるかな？"
            />
        ),
        pauseAfter: 15,
    },
    // 1. Basic Fill-in (Standard)
    {
        id: 'pattern-01-2',
        durationInFrames: 90,
        audioSrc: staticFile(`${AUDIO_BASE}01.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                layout="standard"
                speechBubble="基本の形だよ"
                themeText={<>問題！<br />interesting + er？</>}
                textLines={[
                    { text: "このバッグはあのバッグより古いです。", isEnglish: false },
                    { text: "This bag is (　) than that bag.", isEnglish: true },
                ]}
            />
        ),
        pauseAfter: 15,
    },
    // 2. Before/After (Horizontal Split)
    {
        id: 'pattern-02',
        durationInFrames: 90,
        audioSrc: staticFile(`${AUDIO_BASE}02.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                layout="horizontal-split"
                leftImageSrc={staticFile('images/tom_only.png')}
                rightImageSrc={staticFile('images/tom_tallest_in_class.png')}
                leftContent={
                    <>
                        <LessonLabel>元の形</LessonLabel>
                        <LessonText>tall</LessonText>
                    </>
                }
                rightContent={
                    <>
                        <LessonLabel>比較級</LessonLabel>
                        <LessonText>taller</LessonText>
                    </>
                }
                speechBubble="形が変わるよ"
            />
        ),
        pauseAfter: 15,
    },
    // 3. Fill-in + Choices (Quiz Choices)
    {
        id: 'pattern-03',
        durationInFrames: 90,
        audioSrc: staticFile(`${AUDIO_BASE}03.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                layout="quiz-choices"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText="彼はサッカーをします。"
                englishText={<>He (　　　 ) soccer.</>}
                choices={['play', 'plays', 'playing']}
                speechBubble="どれかな？"
            />
        ),
        pauseAfter: 15,
    },
    // 4. 3 Points (Vertical List)
    {
        id: 'pattern-04',
        durationInFrames: 90,
        audioSrc: staticFile(`${AUDIO_BASE}04.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                layout="vertical-list"
                items={[
                    '① “He” のとき動詞に s',
                    '② play → plays',
                    '③ 否定・疑問は do/does に注意'
                ]}
                speechBubble="ポイントは3つ！"
                mainTitle="まとめ"
            />
        ),
        pauseAfter: 15,
    },
    // 5. 2 Split Top/Bottom (Vertical Split)
    {
        id: 'pattern-05',
        durationInFrames: 90,
        audioSrc: staticFile(`${AUDIO_BASE}08.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                layout="vertical-split"
                // topImageSrc={staticFile('images/sandwich_rule.png')}
                // bottomImageSrc={staticFile('images/test_prep.png')}
                topContent={
                    <>
                        <LessonText>比較級は “〜er＋than”</LessonText>
                    </>
                }
                bottomContent={
                    <>
                        <LessonText>This is bigger than that.</LessonText>
                    </>
                }
                speechBubble="ルールと例文"
            />
        ),
        pauseAfter: 15,
    },
    // 6. Table (Table)
    {
        id: 'pattern-06',
        durationInFrames: 90,
        audioSrc: staticFile(`${AUDIO_BASE}10.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                layout="table"
                tableData={[
                    ['原級', '比較級', '最上級'],
                    ['old', 'older', 'oldest'],
                    ['big', 'bigger', 'biggest'],
                ]}
                speechBubble="変化を表で整理"
            />
        ),
        pauseAfter: 15,
    },
    // 8. 2-Panel Story (Dialogue)
    {
        id: 'pattern-08',
        durationInFrames: 90,
        audioSrc: staticFile(`${AUDIO_BASE}14.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                layout="dialogue"
                dialogueLines={[
                    { speaker: 'A', text: 'I lost my bag.', side: 'left', iconSrc: staticFile('images/student_face.png') },
                    { speaker: 'B', text: "I'll help you.", side: 'right', iconSrc: staticFile('images/student_face.png') },
                ]}
                speechBubble="会話の流れ"
            />
        ),
        pauseAfter: 15,
    },
];
