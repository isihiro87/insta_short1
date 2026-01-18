// 保存用ファイル - qas.md
// フォルダ: datas/history/grade1/2-1/2ancient_civilizations/quiz
// 生成日: 2026-01-16

// タイトル情報（学年・教科）
export const titleData = '中1　歴史';

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
        question: '大河のほとりで発達した、都市や文字を持つ社会を何という？',
        answer: '文明',
        description: '都市や文字、金属器などが発明され、国家が形成された。',
        questionAudio: 'audio/explain/00-2ancient_civilizations.wav',
        questionDuration: 84,
        answerAudio: 'audio/explain/01-2ancient_civilizations.wav',
        answerDuration: 31,
    },
    {
        id: 'q2',
        question: 'チグリス・ユーフラテス川流域で発達したのは何文明？',
        answer: 'メソポタミア文明',
        description: '紀元前3000年頃までに多くの都市国家が生まれた。',
        questionAudio: 'audio/explain/02-2ancient_civilizations.wav',
        questionDuration: 85,
        answerAudio: 'audio/explain/03-2ancient_civilizations.wav',
        answerDuration: 52,
    },
    {
        id: 'q3',
        question: 'メソポタミアで粘土板に\n刻まれたのは何文字？',
        answer: 'くさび形文字',
        description: '記録のために用いられ、後に鉄器も普及した。',
        questionAudio: 'audio/explain/04-2ancient_civilizations.wav',
        questionDuration: 78,
        answerAudio: 'audio/explain/05-2ancient_civilizations.wav',
        answerDuration: 44,
    },
    {
        id: 'q4',
        question: '「目には目を」で知られるバビロニアの法律を何という？',
        answer: 'ハンムラビ法典',
        description: 'ハンムラビ王が整えた、身分により刑罰に差がある法律。',
        questionAudio: 'audio/explain/06-2ancient_civilizations.wav',
        questionDuration: 91,
        answerAudio: 'audio/explain/07-2ancient_civilizations.wav',
        answerDuration: 44,
    },
    {
        id: 'q5',
        question: 'ナイル川流域で\n発達したのは何文明？',
        answer: 'エジプト文明',
        description: '紀元前3000年頃に統一国家ができ、王が支配した。',
        questionAudio: 'audio/explain/08-2ancient_civilizations.wav',
        questionDuration: 74,
        answerAudio: 'audio/explain/09-2ancient_civilizations.wav',
        answerDuration: 41,
    },
];
