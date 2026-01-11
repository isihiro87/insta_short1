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
    title: '中2歴史\n自由民権運動',
    audio: 'audio/explain/00-meijiishin2_title.wav',
    duration: 90, // Approx 3s
};

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '西郷隆盛が起こした\n士族最大の反乱は？',
        answer: '西南戦争',
        description: '以後、政府への批判は\n言論中心となった。',
        questionAudio: 'audio/explain/00-free-exercise.wav',
        questionDuration: 174, // 5.768s -> 174
        answerAudio: 'audio/explain/01-free-exercise.wav',
        answerDuration: 44, // 1.442s -> 44
    },
    {
        id: 'q2',
        question: '1874年に板垣退助らが\n提出した意見書は？',
        answer: '民撰議院設立の建白書',
        description: '藩閥政治を批判し、\n議会開設を求めた。',
        questionAudio: 'audio/explain/02-free-exercise.wav',
        questionDuration: 126, // 4.2s -> 126
        answerAudio: 'audio/explain/03-free-exercise.wav',
        answerDuration: 76, // 2.514s -> 76
    },
    {
        id: 'q3',
        question: '国民の政治参加を\n求めた一連の運動は？',
        answer: '自由民権運動',
        description: '憲法の制定や\n国会の開設を目指した。',
        questionAudio: 'audio/explain/04-free-exercise.wav',
        questionDuration: 92, // 3.042s -> 92
        answerAudio: 'audio/explain/05-free-exercise.wav',
        answerDuration: 52, // 1.704s -> 52
    },
    {
        id: 'q4',
        question: '1880年に大阪で\n結成された全国組織は？',
        answer: '国会期成同盟',
        description: '国会開設を目指し\n署名活動を行った。',
        questionAudio: 'audio/explain/06-free-exercise.wav',
        questionDuration: 118, // 3.914s -> 118
        answerAudio: 'audio/explain/07-free-exercise.wav',
        answerDuration: 53, // 1.749s -> 53
    },
    {
        id: 'q5',
        question: '1890年までの国会開設を\n約束した宣言は？',
        answer: '国会開設の勅諭',
        description: '大隈重信を政府から\n追放した際に出た。',
        questionAudio: 'audio/explain/08-free-exercise.wav',
        questionDuration: 124, // 4.104s -> 124
        answerAudio: 'audio/explain/09-free-exercise.wav',
        answerDuration: 63, // 2.08s -> 63
    },
    {
        id: 'q6',
        question: '1881年に板垣退助が\n結成した政党は？',
        answer: '自由党',
        description: 'フランス流の\n自由主義を主張した。',
        questionAudio: 'audio/explain/10-free-exercise.wav',
        questionDuration: 124, // 4.114s -> 124
        answerAudio: 'audio/explain/11-free-exercise.wav',
        answerDuration: 38, // 1.24s -> 38
    },
    {
        id: 'q7',
        question: '1882年に大隈重信が\n結成した政党は？',
        answer: '立憲改進党',
        description: 'イギリス流の\n穏健な政治を主張した。',
        questionAudio: 'audio/explain/12-free-exercise.wav',
        questionDuration: 121, // 4.018s -> 121
        answerAudio: 'audio/explain/13-free-exercise.wav',
        answerDuration: 50, // 1.648s -> 50
    },
];
