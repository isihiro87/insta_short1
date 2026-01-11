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
    audio: 'audio/explain/00-nisshin.wav', // Title included in first audio
    duration: 90, // Approx 3s
};

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '1894年に朝鮮で起きた\n農民の反乱は？',
        answer: '甲午農民戦争',
        description: '東学の信徒が中心。日清出兵の契機となった。',
        questionAudio: 'audio/explain/00-nisshin.wav',
        questionDuration: 186, // 6.2s
        answerAudio: 'audio/explain/01-nisshin.wav',
        answerDuration: 53, // 1.768s
    },
    {
        id: 'q2',
        question: '1894年に日本と清の間で始まった戦争は？',
        answer: '日清戦争',
        description: '朝鮮の支配をめぐり衝突。日本が勝利した。',
        questionAudio: 'audio/explain/02-nisshin.wav',
        questionDuration: 126, // 4.202s
        answerAudio: 'audio/explain/03-nisshin.wav',
        answerDuration: 43, // 1.429s
    },
    {
        id: 'q3',
        question: '1895年に結ばれた\n日清戦争の講和条約は？',
        answer: '下関条約',
        description: '山口県で調印。清に朝鮮の独立を認めさせた。',
        questionAudio: 'audio/explain/04-nisshin.wav',
        questionDuration: 128, // 4.28s
        answerAudio: 'audio/explain/05-nisshin.wav',
        answerDuration: 49, // 1.642s
    },
    {
        id: 'q4',
        question: '下関条約で日本が獲得し総督府を置いた地は？',
        answer: '台湾',
        description: '住民の抵抗を抑え、植民地支配を進めた。',
        questionAudio: 'audio/explain/06-nisshin.wav',
        questionDuration: 114, // 3.784s
        answerAudio: 'audio/explain/07-nisshin.wav',
        answerDuration: 25, // 0.842s
    },
    {
        id: 'q5',
        question: '露・独・仏が遼東半島の返還を求めたことは？',
        answer: '三国干渉',
        description: '日本の大陸進出を警戒した列強による勧告。',
        questionAudio: 'audio/explain/08-nisshin.wav',
        questionDuration: 126, // 4.189s
        answerAudio: 'audio/explain/09-nisshin.wav',
        answerDuration: 48, // 1.602s
    },
    {
        id: 'q6',
        question: '三国干渉により日本が清へ返還した場所は？',
        answer: '遼東半島',
        description: '下関条約で得たが、列強の圧力で返還した。',
        questionAudio: 'audio/explain/10-nisshin.wav',
        questionDuration: 102, // 3.408s
        answerAudio: 'audio/explain/11-nisshin.wav',
        answerDuration: 42, // 1.413s
    },
];
