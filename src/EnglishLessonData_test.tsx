import { staticFile } from 'remotion';
import { QuizBoard, EnglishLessonBoard, RedText, FormulaContainer, FormulaItem, FormulaText, CenteredList, CrossedText } from './components/english';
import { Scene } from './data';

export type { Scene };

const AUDIO_BASE = 'audio/grade2/unit06/01/content3_';
// const TOPIC = '比較級';

export const englishLessonData: Scene[] = [
    {
        id: 'scene-3-001',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}01.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="さあ、解けるかな？" japaneseText={<>次の日本語を英語にしなさい。</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-002',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}02.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard" imageSrc={staticFile('images/quiz_intro.png')} japaneseText={<>次の日本語を英語にしなさい。この本はあの本よりも面白いです。</>} englishText={<>This book is ( ) ( ) than that book.</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-003',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}03.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="基本の単語だね" japaneseText={<>面白い：interesting</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-004',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}04.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="horizontal-split" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="いつも通りなら…" leftContent={<>面白い<br />interesting</>} rightContent={<>比較級<br />interesting-er？</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-005',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}05.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="horizontal-split" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="ストップ！" leftContent={<>面白い<br />interesting</>} rightContent={<>比較級<br />interesting-er？<br />（ちょっと待って！）</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-006',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}06.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="vertical-split" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="長いよね" topContent={<>interesting</>} bottomContent={<>※長い単語</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-007',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}07.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="vertical-split" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="つけちゃダメ" topContent={<>interesting</>} bottomContent={<>※長い単語<br />→ er はNG！</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-008',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}08.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="理由はね…" japaneseText={<>理由：長すぎて言いにくい</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-009',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}09.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="噛んじゃうよ" japaneseText={<>理由：長すぎて言いにくい</>} englishText={<>（interesting-er...）</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-010',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}10.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard" imageSrc={staticFile('images/quiz_intro.png')} japaneseText={<>理由：長すぎて言いにくい</>} englishText={<>× interesting-er</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-011',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}11.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="vertical-split" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="more を使うよ" topContent={<>× interesting-er</>} bottomContent={<>◎ more interesting</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-012',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}12.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="vertical-list" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="他の単語も同じ" items={[<>beautiful</>, <>popular</>]}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-013',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}13.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="vertical-list" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="覚えておいてね" items={[<>beautiful</>, <>popular</>, <>interesting</>]}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-014',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}14.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="horizontal-split" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="戻って考えよう" leftContent={<>面白い<br />interesting</>} rightContent={<>比較級<br />more interesting</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-015',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}15.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="horizontal-split" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="これでOK" leftContent={<>面白い<br />interesting</>} rightContent={<>比較級<br />more interesting</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-016',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}16.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="完璧！" englishText={<>This book is ( more ) ( interesting ) than that book.</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-017',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}17.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard" imageSrc={staticFile('images/quiz_intro.png')} englishText={<>This book is more interesting than that book.</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-3-018',
        durationInFrames: 150,
        audioSrc: staticFile(`${AUDIO_BASE}18.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard" imageSrc={staticFile('images/quiz_intro.png')} speechBubble="その調子！" englishText={<>This book is more interesting than that book.</>}
            />
        ),
        pauseAfter: 15,
    },
];
