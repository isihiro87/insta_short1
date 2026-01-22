// 保存用ファイル - qas.md
// フォルダ: datas/history/grade2/4-2/4ryukyu_ainu/quiz
// 生成日: 2026-01-21

export interface IchimonIttoScene {
    id: string;
    question: string;
    answer: string;
    description?: string;
    questionAudio: string;
    questionDuration: number;
    answerAudio: string;
    answerDuration: number;
}

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '薩摩藩の侵攻を受け\n支配下に置かれた南方の王国名は？',
        answer: '琉球王国',
        description: '独自の文化を維持しつつ、薩摩藩の支配下で存続した。',
        questionAudio: 'audio/explain/00-4ryukyu_ainu.wav',
        questionDuration: 120,
        answerAudio: 'audio/explain/01-4ryukyu_ainu.wav',
        answerDuration: 43,
    },
    {
        id: 'q2',
        question: '琉球の支配を認められ、\n貿易の利益を独占したのは何藩？',
        answer: '薩摩藩',
        description: '島津氏が治め、琉球を通じて中国との貿易を続け、利益を得ました。',
        questionAudio: 'audio/explain/02-4ryukyu_ainu.wav',
        questionDuration: 137,
        answerAudio: 'audio/explain/03-4ryukyu_ainu.wav',
        answerDuration: 34,
    },
    {
        id: 'q3',
        question: '琉球国王や将軍の代替わりの際に、江戸へ送られた使節は？',
        answer: '琉球使節',
        description: '中国風の装束で江戸を練り歩き、将軍の権威を民衆に示した。',
        questionAudio: 'audio/explain/04-4ryukyu_ainu.wav',
        questionDuration: 137,
        answerAudio: 'audio/explain/05-4ryukyu_ainu.wav',
        answerDuration: 42,
    },
    {
        id: 'q4',
        question: '琉球が中国の品を日本へ\n送り利益を得た貿易を何という？',
        answer: '中継貿易',
        description: '生糸や薬などを中国から仕入れ、日本へ運んで販売した。',
        questionAudio: 'audio/explain/06-4ryukyu_ainu.wav',
        questionDuration: 130,
        answerAudio: 'audio/explain/07-4ryukyu_ainu.wav',
        answerDuration: 45,
    },
    {
        id: 'q5',
        question: '薩摩藩が琉球から取り上げ、直接支配した島々は？',
        answer: '奄美群島',
        description: '砂糖などの特産物を年貢として厳しく納めさせました。',
        questionAudio: 'audio/explain/08-4ryukyu_ainu.wav',
        questionDuration: 125,
        answerAudio: 'audio/explain/09-4ryukyu_ainu.wav',
        answerDuration: 38,
    },
];
