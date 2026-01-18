// 保存用ファイル - qas.md
// フォルダ: datas/history/grade1/2-1/3chinese_civilization/quiz
// 生成日: 2026-01-17

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
        question: '黄河や長江の流域で\n発生した文明は？',
        answer: '中国文明',
        description: '紀元前16世紀頃には殷などの強大な国家が誕生した。',
        questionAudio: 'audio/explain/00-3chinese_civilization.wav',
        questionDuration: 88,
        answerAudio: 'audio/explain/01-3chinese_civilization.wav',
        answerDuration: 43,
    },
    {
        id: 'q2',
        question: '殷で占いの結果を記す\nのに使われた文字は？',
        answer: '甲骨文字',
        description: '亀の甲や牛の骨に刻まれ、漢字の基となった。',
        questionAudio: 'audio/explain/02-3chinese_civilization.wav',
        questionDuration: 88,
        answerAudio: 'audio/explain/03-3chinese_civilization.wav',
        answerDuration: 39,
    },
    {
        id: 'q3',
        question: '殷を滅ぼし、その後に\n支配が弱まった国は？',
        answer: '周',
        description: '紀元前11世紀におこり、後に春秋・戦国時代へと続いた。',
        questionAudio: 'audio/explain/04-3chinese_civilization.wav',
        questionDuration: 109,
        answerAudio: 'audio/explain/05-3chinese_civilization.wav',
        answerDuration: 27,
    },
    {
        id: 'q4',
        question: '紀元前6世紀に「仁」\nと「礼」を説いた人物は？',
        answer: '孔子',
        description: '家族の道徳が社会を安定させるとする儒学を始めた。',
        questionAudio: 'audio/explain/06-3chinese_civilization.wav',
        questionDuration: 106,
        answerAudio: 'audio/explain/07-3chinese_civilization.wav',
        answerDuration: 30,
    },
    {
        id: 'q5',
        question: '孔子の言行を弟子が\nまとめた書物は？',
        answer: '論語',
        description: '儒学の古典として、東アジア一帯に広く普及した。',
        questionAudio: 'audio/explain/08-3chinese_civilization.wav',
        questionDuration: 78,
        answerAudio: 'audio/explain/09-3chinese_civilization.wav',
        answerDuration: 29,
    },
];
