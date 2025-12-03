import { staticFile } from 'remotion';
import { QuizBoard, EnglishLessonBoard, RedText, FormulaContainer, FormulaItem, FormulaText, CenteredList, CrossedText } from './components/english';
import { Scene } from './data';

export type { Scene };

const AUDIO_BASE = 'audio/explain/part';
// const TOPIC = '比較級最上級';

export const englishLessonData: Scene[] = [
    {
        id: 'scene-3-001',
        durationInFrames: 29,
        audioSrc: staticFile(`${AUDIO_BASE}01.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                japaneseText={<>この本はあの本よりも面白いです。</>}
                englishText={<>This book is (　) (　) than that book.</>}
                speechBubble="さあ、解けるかな？"
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-002',
        durationInFrames: 87,
        audioSrc: staticFile(`${AUDIO_BASE}02.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<>この本はあの本よりも面白いです。</>}
                englishText={<>This book is (　) (　) than that book.</>}
                imageSrc={staticFile('images/quiz_intro.png')}

            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-003',
        durationInFrames: 98,
        audioSrc: staticFile(`${AUDIO_BASE}03.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<>面白い：<b>interesting</b></>}
                englishText={<>↓</>}
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble=""
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-004',
        durationInFrames: 105,
        audioSrc: staticFile(`${AUDIO_BASE}04.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<>面白い：<b>interesting</b>比較級：<b>interesting<RedText>er</RedText></b>？</>}
                englishText={<>↓</>}
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble=""
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-005',
        durationInFrames: 79,
        audioSrc: staticFile(`${AUDIO_BASE}05.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<>面白い：<b>interesting</b>比較級：<b>interesting<RedText>er</RedText></b>？</>}
                englishText={<>↓</>}
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="ちょっと待って！"
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-006',
        durationInFrames: 68,
        audioSrc: staticFile(`${AUDIO_BASE}06.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<>面白い：<b>interesting</b>※<b>長い単語</b></>}
                englishText={<>↓</>}
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble=""
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-007',
        durationInFrames: 56,
        audioSrc: staticFile(`${AUDIO_BASE}07.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<>面白い：<b>interesting</b>※<b>長い単語</b> → <b>er</b> はNG！</>}
                englishText={<>↓</>}
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble=""
            />
        ),
        pauseAfter: 15,
    },
    // {
    //     id: 'scene-3-008',
    //     durationInFrames: 78,
    //     audioSrc: staticFile(`${AUDIO_BASE}08.wav`),
    //     boardContent: () => (
    //         <EnglishLessonBoard
    //             step="title"
    //             japaneseText=" "
    //             englishText=""
    //             imageSrc={staticFile('images/quiz_intro.png')}
    //             speechBubble=""
    //         />
    //     ),
    //     pauseAfter: 15,
    // },
    // {
    //     id: 'scene-3-009',
    //     durationInFrames: 81,
    //     audioSrc: staticFile(`${AUDIO_BASE}09.wav`),
    //     boardContent: () => (
    //         <EnglishLessonBoard
    //             step="title"
    //             japaneseText="理由：長すぎて言いにくい"

    //             imageSrc={staticFile('images/quiz_intro.png')}
    //             speechBubble=""
    //         />
    //     ),
    //     pauseAfter: 15,
    // },
    {
        id: 'scene-3-010',
        durationInFrames: 88,
        audioSrc: staticFile(`${AUDIO_BASE}10.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText=" "

                imageSrc={staticFile('images/quiz_intro.png')}

            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-011',
        durationInFrames: 157,
        audioSrc: staticFile(`${AUDIO_BASE}11.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<>対策：前に <b>more</b> を置く</>}

                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="more を使うよ"
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-012',
        durationInFrames: 111,
        audioSrc: staticFile(`${AUDIO_BASE}12.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<>例：<b>beautiful</b>, <b>popular</b></>}

                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="他の単語も同じ"
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-013',
        durationInFrames: 64,
        audioSrc: staticFile(`${AUDIO_BASE}13.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<>これらも <b>more</b> を使う</>}

                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="覚えておいてね"
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-014',
        durationInFrames: 99,
        audioSrc: staticFile(`${AUDIO_BASE}14.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<><b>【問題】</b>この本はあの本よりも面白いです。面白い：<b>interesting</b></>}
                englishText={<>This book is (　) (　) than that book.</>}
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="戻って考えよう"
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-015',
        durationInFrames: 58,
        audioSrc: staticFile(`${AUDIO_BASE}15.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<>比較級：<b>more interesting</b></>}
                englishText={<>↓</>}
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="これでOK"
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-016',
        durationInFrames: 50,
        audioSrc: staticFile(`${AUDIO_BASE}16.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText=" "

                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="完璧！"
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-017',
        durationInFrames: 131,
        audioSrc: staticFile(`${AUDIO_BASE}17.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText=" "

                imageSrc={staticFile('images/quiz_intro.png')}

            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-018',
        durationInFrames: 134,
        audioSrc: staticFile(`${AUDIO_BASE}18.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                japaneseText={<><b>【正解】</b></>}
                englishText={<>This book is <b>more interesting</b> than that book.</>}
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="その調子！"
            />
        ),
        pauseAfter: 15,
    },
];
