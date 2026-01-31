// 保存用ファイル - words_06.md（人・家族）
// フォルダ: datas/english/grade3/unit_06/quiz/words
// 生成日: 2026-01-29

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
        question: 'son',
        answer: '息子',
        description: '⇔daughter(娘)、sun(太陽)と同じ発音',
        questionAudio: 'audio/explain/en/36-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/36-words.wav',
        answerDuration: 29,
    },
    {
        id: 'q2',
        question: 'daughter',
        answer: '娘',
        description: '⇔son(息子)、発音は「ドーター」',
        questionAudio: 'audio/explain/en/37-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/37-words.wav',
        answerDuration: 30,
    },
    {
        id: 'q3',
        question: 'exception',
        answer: '例外',
        description: 'except(〜を除いて)の名詞形',
        questionAudio: 'audio/explain/en/38-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/38-words.wav',
        answerDuration: 28,
    },
    {
        id: 'q4',
        question: 'fact',
        answer: '現実、事実',
        description: 'in factで「実際に」、as a matter of factも同義',
        questionAudio: 'audio/explain/en/39-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/39-words.wav',
        answerDuration: 58,
    },
];
