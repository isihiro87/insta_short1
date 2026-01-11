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
    title: '中2歴史\n明治維新2',
    audio: 'audio/explain/00-meijiishin2_title.wav',
    duration: 90, // Approx 3s
};

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '1872年に発布された\n教育制度は？',
        answer: '学制',
        description: '6歳から14歳までの男女が\n小学校に通うことを目指した。',
        questionAudio: 'audio/explain/00-meijiishin2.wav',
        questionDuration: 142, // 4.72s
        answerAudio: 'audio/explain/01-meijiishin2.wav',
        answerDuration: 33, // 1.08s
    },
    {
        id: 'q2',
        question: '1873年に行われた\n税制改革は？',
        answer: '地租改正',
        description: '収入安定のため、土地制度と\n税制を根本から変えた。',
        questionAudio: 'audio/explain/02-meijiishin2.wav',
        questionDuration: 110, // 3.64s
        answerAudio: 'audio/explain/03-meijiishin2.wav',
        answerDuration: 42, // 1.39s
    },
    {
        id: 'q3',
        question: '地租改正で、税額の\n基準とされたものは？',
        answer: '地価',
        description: '収穫量ではなく、土地の価格(地価)を\n基準にした。',
        questionAudio: 'audio/explain/04-meijiishin2.wav',
        questionDuration: 99, // 3.27s
        answerAudio: 'audio/explain/05-meijiishin2.wav',
        answerDuration: 27, // 0.89s
    },
    {
        id: 'q4',
        question: '地租改正で、税は\n何で納めることになった？',
        answer: '現金',
        description: '米ではなく現金納付とし、\n税収の安定を図った。',
        questionAudio: 'audio/explain/06-meijiishin2.wav',
        questionDuration: 106, // 3.51s
        answerAudio: 'audio/explain/07-meijiishin2.wav',
        answerDuration: 29, // 0.96s
    },
    {
        id: 'q5',
        question: '地租改正が始まった当初\n税率は地価の何％？',
        answer: '3％',
        description: '地券を発行し、地価の3％を\n税として納めさせた。',
        questionAudio: 'audio/explain/08-meijiishin2.wav',
        questionDuration: 140, // 4.64s
        answerAudio: 'audio/explain/09-meijiishin2.wav',
        answerDuration: 42, // 1.38s
    },
];
