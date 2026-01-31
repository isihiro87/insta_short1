// 保存用ファイル - words_compare.md（比較級・最上級）
// フォルダ: datas/english/grade2/unit_06/quiz/words
// 生成日: 2026-01-28

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
        question: 'old',
        answer: '古い',
        description: '古い（基本）',
        questionAudio: 'audio/explain/en/00-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/00-words.wav',
        answerDuration: 26,
    },
    {
        id: 'q2',
        question: 'large',
        answer: '広い、大きい',
        description: 'eで終わる語は -r / -st',
        questionAudio: 'audio/explain/en/01-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/01-words.wav',
        answerDuration: 53,
    },
    {
        id: 'q3',
        question: 'big',
        answer: '大きい',
        description: '子音を重ねて -er / -est',
        questionAudio: 'audio/explain/en/02-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/02-words.wav',
        answerDuration: 29,
    },
    {
        id: 'q4',
        question: 'easy',
        answer: '簡単な',
        description: 'yをiに変えて -er / -est',
        questionAudio: 'audio/explain/en/03-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/03-words.wav',
        answerDuration: 35,
    },
    {
        id: 'q5',
        question: 'popular',
        answer: '人気のある',
        description: 'more popular - most popular',
        questionAudio: 'audio/explain/en/04-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/04-words.wav',
        answerDuration: 37,
    },
    {
        id: 'q6',
        question: 'good',
        answer: 'よい',
        description: 'good - better - best',
        questionAudio: 'audio/explain/en/05-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/05-words.wav',
        answerDuration: 24,
    },
];
