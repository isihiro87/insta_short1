// 保存用ファイル - qas.md
// フォルダ: datas/history/grade2/4-2/3foreign_relations/quiz
// 生成日: 2026-01-18

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
        question: '出島で貿易を行い、世界情勢を幕府に伝えた国は？',
        answer: 'オランダ',
        description: 'キリスト教の布教を行わず、幕府に従ったため、貿易が許された。',
        questionAudio: 'audio/explain/00-3foreign_relations.wav',
        questionDuration: 144,
        answerAudio: 'audio/explain/01-3foreign_relations.wav',
        answerDuration: 30,
    },
    {
        id: 'q2',
        question: '朝鮮との外交窓口\nとなったのは何藩？',
        answer: '対馬藩',
        description: '朝鮮との交渉の窓口を務め、貿易を行った。',
        questionAudio: 'audio/explain/02-3foreign_relations.wav',
        questionDuration: 90,
        answerAudio: 'audio/explain/03-3foreign_relations.wav',
        answerDuration: 33,
    },
    {
        id: 'q3',
        question: 'オランダが幕府に提出\nした海外情報の報告書は？',
        answer: 'オランダ風説書',
        description: '幕府が海外情勢を知る重要な手がかりとなった。',
        questionAudio: 'audio/explain/04-3foreign_relations.wav',
        questionDuration: 108,
        answerAudio: 'audio/explain/05-3foreign_relations.wav',
        answerDuration: 52,
    },
    {
        id: 'q4',
        question: '長崎で貿易を行い、独自\nの居住地を与えられた国は？',
        answer: '清',
        description: '明に代わって中国を支配した、女真族による王朝。',
        questionAudio: 'audio/explain/06-3foreign_relations.wav',
        questionDuration: 135,
        answerAudio: 'audio/explain/07-3foreign_relations.wav',
        answerDuration: 25,
    },
    {
        id: 'q5',
        question: '長崎に住む中国人を収容\nするために幕府が造った施設は？',
        answer: '唐人屋敷',
        description: '1689年に完成し、高い塀と堀で周囲が囲まれていた。',
        questionAudio: 'audio/explain/08-3foreign_relations.wav',
        questionDuration: 133,
        answerAudio: 'audio/explain/09-3foreign_relations.wav',
        answerDuration: 41,
    },
];
