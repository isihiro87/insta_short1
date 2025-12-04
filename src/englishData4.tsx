import { staticFile } from 'remotion';
import { QuizBoard, EnglishLessonBoard, RedText, FormulaContainer, FormulaItem, FormulaText, CenteredList, CrossedText } from './components/english';
import { Scene } from './data';

export type { Scene };

const AUDIO_BASE = 'audio/explain/04_most_part';
// const TOPIC = '01_比較級・最上級';

export const englishLessonData: Scene[] = [
    {
        id: 'scene-4-001',
        durationInFrames: 17,
        audioSrc: staticFile(`${AUDIO_BASE}001.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="さあ、解けるかな？"
                japaneseText={<>次の日本語を英語にしなさい。</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-002',
        durationInFrames: 72,
        audioSrc: staticFile(`${AUDIO_BASE}002.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="3語入るよ！"
                japaneseText={<>次の日本語を英語にしなさい。この映画は日本で一番人気があります。</>}
                englishText={<>This movie is ( ) ( ) ( ) in Japan.</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-003',
        durationInFrames: 111,
        audioSrc: staticFile(`${AUDIO_BASE}003.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText={<>人気がある：popular</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-004',
        durationInFrames: 117,
        audioSrc: staticFile(`${AUDIO_BASE}004.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText={<>人気がある：popular最上級？ popularest (?)</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-005',
        durationInFrames: 90,
        audioSrc: staticFile(`${AUDIO_BASE}005.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText={<>人気がある：popular最上級？ popularest (?)<RedText>長い単語！</RedText></>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-006',
        durationInFrames: 71,
        audioSrc: staticFile(`${AUDIO_BASE}006.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="estはダメなんだ。"
                japaneseText={<>人気がある：popular最上級？ popularest (?)</>}
                englishText={<><RedText>NG!</RedText></>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-007',
        durationInFrames: 23,
        audioSrc: staticFile(`${AUDIO_BASE}007.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText={<>(維持)</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-008',
        durationInFrames: 92,
        audioSrc: staticFile(`${AUDIO_BASE}008.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="vertical-split"
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="mostを使うんだね。"
                topContent={<>× popularest</>}
                bottomContent={<>◎ most popular</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-009',
        durationInFrames: 38,
        audioSrc: staticFile(`${AUDIO_BASE}009.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                englishText={<><RedText>Point!</RedText> most popular</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-010',
        durationInFrames: 55,
        audioSrc: staticFile(`${AUDIO_BASE}010.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText={<>一番 = No.1</>}
                englishText={<><RedText>Point!</RedText> most popular</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-011',
        durationInFrames: 66,
        audioSrc: staticFile(`${AUDIO_BASE}011.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText={<>一番 = No.1</>}
                englishText={<><RedText>Point!</RedText> most popular</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-012',
        durationInFrames: 65,
        audioSrc: staticFile(`${AUDIO_BASE}012.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText={<>一番 = No.1一つに決まる！</>}
                englishText={<><RedText>Point!</RedText> most popular ↓</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-013',
        durationInFrames: 18,
        audioSrc: staticFile(`${AUDIO_BASE}013.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText={<>(維持)</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-014',
        durationInFrames: 59,
        audioSrc: staticFile(`${AUDIO_BASE}014.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText={<>特定する = <RedText>the</RedText></>}
                englishText={<><RedText>Point!</RedText> most popular</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-015',
        durationInFrames: 54,
        audioSrc: staticFile(`${AUDIO_BASE}015.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="theを忘れないで！"
                englishText={<><RedText>Point!</RedText> <RedText>the</RedText> most popular</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-016',
        durationInFrames: 133,
        audioSrc: staticFile(`${AUDIO_BASE}016.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="セットで覚えよう！"
                japaneseText={<>(維持)</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-017',
        durationInFrames: 120,
        audioSrc: staticFile(`${AUDIO_BASE}017.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                japaneseText={<>この映画は日本で一番人気があります。</>}
                englishText={<>This movie is ( the ) ( most ) ( popular ) in Japan.</>}
            />
        ),
        pauseAfter: 15,
    },
    {
        id: 'scene-4-018',
        durationInFrames: 159,
        audioSrc: staticFile(`${AUDIO_BASE}018.wav`),
        boardContent: () => (
            <EnglishLessonBoard
                step="title"
                layout="standard"
                imageSrc={staticFile('images/quiz_intro.png')}
                speechBubble="正解！"
                japaneseText={<>この映画は日本で一番人気があります。</>}
                englishText={<>This movie is <RedText>the most popular</RedText> in Japan.</>}
            />
        ),
        pauseAfter: 15,
    },
];
