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
    title: '中2歴史\n日露戦争',
    audio: 'audio/explain/00-nichirosenso.wav', // Audio file is present but duration not used for title delay in current logic
    duration: 90, // Approx 3s
};

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: 'ロシアの南下に対抗し\n1902年に結んだのは？',
        answer: '日英同盟',
        description: 'イギリスと協力しロシアの進出に備えた。',
        questionAudio: 'audio/explain/00-nichirosenso.wav',
        questionDuration: 130, // 4.31s
        answerAudio: 'audio/explain/01-nichirosenso.wav',
        answerDuration: 49, // 1.62s
    },
    {
        id: 'q2',
        question: '1904年に日露間で起きた戦争は？',
        answer: '日露戦争',
        description: '満州や韓国の支配権をめぐり衝突した。',
        questionAudio: 'audio/explain/02-nichirosenso.wav',
        questionDuration: 106, // 3.52s
        answerAudio: 'audio/explain/03-nichirosenso.wav',
        answerDuration: 46, // 1.51s
    },
    {
        id: 'q3',
        question: '1905年に結ばれた\n日露戦争の講和条約は？',
        answer: 'ポーツマス条約',
        description: 'アメリカの仲介により結ばれた条約。',
        questionAudio: 'audio/explain/04-nichirosenso.wav',
        questionDuration: 130, // 4.33s
        answerAudio: 'audio/explain/05-nichirosenso.wav',
        answerDuration: 53, // 1.76s
    },
    {
        id: 'q4',
        question: '日露戦争後に世界一の\n輸出量となった品は？',
        answer: '生糸',
        description: '主にアメリカへ向け大量に輸出された。',
        questionAudio: 'audio/explain/06-nichirosenso.wav',
        questionDuration: 115, // 3.80s
        answerAudio: 'audio/explain/07-nichirosenso.wav',
        answerDuration: 30, // 1.00s
    },
    {
        id: 'q5',
        question: '日露戦争の戦費は\n日清戦争の約何倍？\n(整数で)',
        answer: '約8倍',
        description: '国民の税負担も約2倍となり重くなった。',
        questionAudio: 'audio/explain/08-nichirosenso.wav',
        questionDuration: 116, // 3.85s
        answerAudio: 'audio/explain/09-nichirosenso.wav',
        answerDuration: 44, // 1.44s
    },
];
