// 保存用ファイル - words_05.md（熟語：データ・プレゼン表現）
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
        question: 'according to',
        answer: '…によれば',
        description: '「〜によると」プレゼンで情報源を示すときに',
        questionAudio: 'audio/explain/en/33-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/33-words.wav',
        answerDuration: 34,
    },
    {
        id: 'q2',
        question: 'as for',
        answer: '…について言えば',
        description: '話題を変えるときに使う表現',
        questionAudio: 'audio/explain/en/34-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/34-words.wav',
        answerDuration: 45,
    },
    {
        id: 'q3',
        question: 'in conclusion',
        answer: '最後に、結論として',
        description: 'プレゼンの締めくくりに使う定番表現',
        questionAudio: 'audio/explain/en/35-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/35-words.wav',
        answerDuration: 67,
    },
    {
        id: 'q4',
        question: 'such as',
        answer: '～のような…',
        description: '例を挙げるとき。for exampleと同じ用法',
        questionAudio: 'audio/explain/en/36-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/36-words.wav',
        answerDuration: 38,
    },
    {
        id: 'q5',
        question: 'more than',
        answer: '…より多くの',
        description: '「〜以上」の意味、less thanは「〜未満」',
        questionAudio: 'audio/explain/en/37-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/37-words.wav',
        answerDuration: 41,
    },
];
