// import { SubjectTheme } from './components/rhythm/IchimonIttoBoard';

export interface IchimonIttoScene {
    id: string;
    question: string;
    answer: string;
    description?: string; // Optional explanation
    questionAudio: string;
    questionDuration: number;
    answerAudio: string;
    answerDuration: number;
}

export interface TitleScene {
    title: string;
    audio: string;
    duration: number;
}

export const titleData: TitleScene = {
    title: '中2歴史\n日本の産業革命',
    audio: 'audio/explain/00-japan_indust.wav',
    duration: 90, // Approx 3s
};

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '日本で1880年代後半に\n発展した工業分野は？',
        answer: '軽工業',
        description: '紡績業や製糸業を中心に発達した。',
        questionAudio: 'audio/explain/00-japan_indust.wav',
        questionDuration: 127, // 4.224s
        answerAudio: 'audio/explain/01-japan_indust.wav',
        answerDuration: 34, // 1.122s
    },
    {
        id: 'q2',
        question: '日清戦争後に輸出が\n輸入を超えた製品は？',
        answer: '綿糸',
        description: '中国などアジア諸国に輸出された。',
        questionAudio: 'audio/explain/02-japan_indust.wav',
        questionDuration: 96, // 3.178s
        answerAudio: 'audio/explain/03-japan_indust.wav',
        answerDuration: 32, // 1.034s
    },
    {
        id: 'q3',
        question: '日露戦争後に世界一の\n輸出量となった品は？',
        answer: '生糸',
        description: '主にアメリカへ輸出された。',
        questionAudio: 'audio/explain/04-japan_indust.wav',
        questionDuration: 99, // 3.28s
        answerAudio: 'audio/explain/05-japan_indust.wav',
        answerDuration: 28, // 0.928s
    },
    {
        id: 'q4',
        question: '1901年に操業を開始した\n官営の製鉄所は？',
        answer: '八幡製鉄所',
        description: '日清戦争の賠償金を基に建設された。',
        questionAudio: 'audio/explain/06-japan_indust.wav',
        questionDuration: 118, // 3.914s
        answerAudio: 'audio/explain/07-japan_indust.wav',
        answerDuration: 47, // 1.554s
    },
    {
        id: 'q5',
        question: '経済を支配した\n三井・三菱などの資本家は？',
        answer: '財閥',
        description: '三井・三菱・住友・安田などが代表。',
        questionAudio: 'audio/explain/08-japan_indust.wav',
        questionDuration: 99, // 3.288s
        answerAudio: 'audio/explain/09-japan_indust.wav',
        answerDuration: 33, // 1.082s
    },
];
