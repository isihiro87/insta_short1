// 保存用ファイル - qas2.md
// フォルダ: datas/history/grade1/2-1/4greece_rome/quiz
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
        question: 'ローマ市内に造られた\n巨大な円形闘技場は？',
        answer: 'コロッセオ',
        description: '剣闘士の試合などが行われた、ローマ帝国の高度な建築技術の象徴。',
        questionAudio: 'audio/explain/10-4greece_rome.wav',
        questionDuration: 99,
        answerAudio: 'audio/explain/11-4greece_rome.wav',
        answerDuration: 34,
    },
    {
        id: 'q2',
        question: 'ローマで行われた、皇帝が支配する政治の仕組みを何という？',
        answer: '帝政',
        description: '皇帝が国を支配する政治で、紀元前30年ごろから始まった。',
        questionAudio: 'audio/explain/12-4greece_rome.wav',
        questionDuration: 138,
        answerAudio: 'audio/explain/13-4greece_rome.wav',
        answerDuration: 31,
    },
    {
        id: 'q3',
        question: 'ローマ帝国が各地に建設した、水を運ぶ橋を何という？',
        answer: '水道橋',
        description: 'アーチ構造を利用し、遠方から都市へ水を供給した。',
        questionAudio: 'audio/explain/14-4greece_rome.wav',
        questionDuration: 137,
        answerAudio: 'audio/explain/15-4greece_rome.wav',
        answerDuration: 41,
    },
    {
        id: 'q4',
        question: 'アテネの丘(アクロポリス)に建てられた、守護神をまつる神殿は？',
        answer: 'パルテノン神殿',
        description: 'ギリシャ文明の全盛期を象徴する、アクロポリスに建てられた神殿。',
        questionAudio: 'audio/explain/16-4greece_rome.wav',
        questionDuration: 112,
        answerAudio: 'audio/explain/17-4greece_rome.wav',
        answerDuration: 46,
    },
    {
        id: 'q5',
        question: 'ギリシャのポリス連合軍が撃退した西アジアの国はどこ？\n(紀元前5世紀)',
        answer: 'ペルシャ',
        description: '紀元前5世紀にギリシャに侵攻したが、ポリス連合軍に撃退された。',
        questionAudio: 'audio/explain/18-4greece_rome.wav',
        questionDuration: 117,
        answerAudio: 'audio/explain/19-4greece_rome.wav',
        answerDuration: 30,
    },
];
