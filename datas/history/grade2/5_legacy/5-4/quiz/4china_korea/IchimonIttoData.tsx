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
    title: '中2歴史\n中国・韓国の動き',
    audio: 'audio/explain/00-china_korea.wav', // Placeholder, unused in current logic
    duration: 90, // Approx 3s
};

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '孫文が唱えた\n革命の指導理論は？',
        answer: '三民主義',
        description: '民族・民権・民生の3つからなる。',
        questionAudio: 'audio/explain/00-china_korea.wav',
        questionDuration: 80, // 2.648s
        answerAudio: 'audio/explain/01-china_korea.wav',
        answerDuration: 42, // 1.373s
    },
    {
        id: 'q2',
        question: '1905年に韓国に\n設置された役所は？',
        answer: '韓国統監府',
        description: '初代統監には伊藤博文が就任した。',
        questionAudio: 'audio/explain/02-china_korea.wav',
        questionDuration: 93, // 3.098s
        answerAudio: 'audio/explain/03-china_korea.wav',
        answerDuration: 48, // 1.6s
    },
    {
        id: 'q3',
        question: '1910年に日本が\n韓国を領有したことは？',
        answer: '韓国併合',
        description: '朝鮮総督府を置き植民地支配を進めた。',
        questionAudio: 'audio/explain/04-china_korea.wav',
        questionDuration: 105, // 3.498s
        answerAudio: 'audio/explain/05-china_korea.wav',
        answerDuration: 45, // 1.48s
    },
    {
        id: 'q4',
        question: '1900年に中国で\n起きた排外運動は？',
        answer: '義和団事件',
        description: '「扶清滅洋」を掲げ連合軍に鎮圧された。',
        questionAudio: 'audio/explain/06-china_korea.wav',
        questionDuration: 93, // 3.093s
        answerAudio: 'audio/explain/07-china_korea.wav',
        answerDuration: 38, // 1.248s
    },
    {
        id: 'q5',
        question: '満州の利権を独占した\n半官半民の会社は？',
        answer: '南満州鉄道（満鉄）',
        description: '鉄道・炭鉱・製鉄所などを経営した。',
        questionAudio: 'audio/explain/08-china_korea.wav',
        questionDuration: 99, // 3.269s
        answerAudio: 'audio/explain/09-china_korea.wav',
        answerDuration: 73, // 2.402s
    },
    {
        id: 'q6',
        question: '1911年に清を倒そうと\n起きた革命は？',
        answer: '辛亥革命',
        description: '孫文が臨時大総統に就任した。',
        questionAudio: 'audio/explain/10-china_korea.wav',
        questionDuration: 107, // 3.56s
        answerAudio: 'audio/explain/11-china_korea.wav',
        answerDuration: 45, // 1.488s
    },
    {
        id: 'q7',
        question: '1912年に南京を首都\nとして成立した国は？',
        answer: '中華民国',
        description: 'アジアで最初の共和国である。',
        questionAudio: 'audio/explain/12-china_korea.wav',
        questionDuration: 113, // 3.738s
        answerAudio: 'audio/explain/13-china_korea.wav',
        answerDuration: 42, // 1.373s
    },
];
