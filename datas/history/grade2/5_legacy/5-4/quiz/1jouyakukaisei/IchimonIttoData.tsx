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
    title: '中2歴史\n条約改正',
    audio: 'audio/explain/00-jouyakukaisei.wav', // Title included in first audio
    duration: 90, // Approx 3s
};

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '鹿鳴館で舞踏会を開くなどした外交政策は？',
        answer: '欧化政策',
        description: '井上馨が条約改正のために進めた。',
        questionAudio: 'audio/explain/00-jouyakukaisei.wav',
        questionDuration: 169, // 5.64s
        answerAudio: 'audio/explain/01-jouyakukaisei.wav',
        answerDuration: 40, // 1.35s
    },
    {
        id: 'q2',
        question: '19世紀後半、武力で植民地を広げた動きは？',
        answer: '帝国主義',
        description: '欧米列強が資源や市場を求めて進出した。',
        questionAudio: 'audio/explain/02-jouyakukaisei.wav',
        questionDuration: 124, // 4.14s
        answerAudio: 'audio/explain/03-jouyakukaisei.wav',
        answerDuration: 38, // 1.27s
    },
    {
        id: 'q3',
        question: '1886年に起きたイギリス船の沈没事件は？',
        answer: 'ノルマントン号事件',
        description: '条約改正を求める世論が強まった。',
        questionAudio: 'audio/explain/04-jouyakukaisei.wav',
        questionDuration: 117, // 3.90s
        answerAudio: 'audio/explain/05-jouyakukaisei.wav',
        answerDuration: 50, // 1.65s
    },
    {
        id: 'q4',
        question: '領事裁判権の撤廃を成功させた外務大臣は？',
        answer: '陸奥宗光',
        description: '1894年にイギリスと交渉を行った。',
        questionAudio: 'audio/explain/06-jouyakukaisei.wav',
        questionDuration: 104, // 3.48s
        answerAudio: 'audio/explain/07-jouyakukaisei.wav',
        answerDuration: 41, // 1.36s
    },
    {
        id: 'q5',
        question: '関税自主権の完全回復を達成した外務大臣は？',
        answer: '小村寿太郎',
        description: '1911年に日本の条約改正を完了させた。',
        questionAudio: 'audio/explain/08-jouyakukaisei.wav',
        questionDuration: 110, // 3.67s
        answerAudio: 'audio/explain/09-jouyakukaisei.wav',
        answerDuration: 43, // 1.43s
    },
];
