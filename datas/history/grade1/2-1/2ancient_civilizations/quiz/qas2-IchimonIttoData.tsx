// 保存用ファイル - qas2.md
// フォルダ: datas/history/grade1/2-1/2ancient_civilizations/quiz
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
        question: 'エジプトで作られた\n1年365日の暦は？',
        answer: '太陽暦',
        description: '川のはんらん時期を知るための天文学から発達した。',
        questionAudio: 'audio/explain/10-2ancient_civilizations.wav',
        questionDuration: 106,
        answerAudio: 'audio/explain/11-2ancient_civilizations.wav',
        answerDuration: 34,
    },
    {
        id: 'q2',
        question: 'エジプトで死んだ王を\nまつる大きな石の建造物は？',
        answer: 'ピラミッド',
        description: 'ギザにあるものが有名で、高い測量技術が示されている。',
        questionAudio: 'audio/explain/12-2ancient_civilizations.wav',
        questionDuration: 99,
        answerAudio: 'audio/explain/13-2ancient_civilizations.wav',
        answerDuration: 32,
    },
    {
        id: 'q3',
        question: 'エジプトで発明された\n絵のような文字は？',
        answer: '象形文字',
        description: '神殿の壁画などに刻まれ、後のアルファベットの基となった。',
        questionAudio: 'audio/explain/14-2ancient_civilizations.wav',
        questionDuration: 72,
        answerAudio: 'audio/explain/15-2ancient_civilizations.wav',
        answerDuration: 40,
    },
    {
        id: 'q4',
        question: 'インダス川流域で\n栄えたのは何文明？',
        answer: 'インダス文明',
        description: '紀元前2500年頃、道路や水路が整備された都市ができた。',
        questionAudio: 'audio/explain/16-2ancient_civilizations.wav',
        questionDuration: 83,
        answerAudio: 'audio/explain/17-2ancient_civilizations.wav',
        answerDuration: 40,
    },
    {
        id: 'q5',
        question: '衰退したインダス文明\nの地に侵入した民族は？',
        answer: 'アーリヤ人',
        description: '中央アジアから入り、後のカースト制度の基盤を造った。',
        questionAudio: 'audio/explain/18-2ancient_civilizations.wav',
        questionDuration: 97,
        answerAudio: 'audio/explain/19-2ancient_civilizations.wav',
        answerDuration: 31,
    },
];
