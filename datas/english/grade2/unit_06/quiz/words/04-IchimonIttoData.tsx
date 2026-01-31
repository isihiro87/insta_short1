// 保存用ファイル - words_04.md（名詞・形容詞・動詞）
// フォルダ: datas/english/grade2/unit_06/quiz/words
// 生成日: 2026-01-28

// タイトル情報（学年・教科）
export const titleData = '中2　英語';

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
        question: 'skill',
        answer: '腕前、技術',
        description: 'skilled(熟練した)、skillful(上手な)も覚える',
        questionAudio: 'audio/explain/en/26-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/26-words.wav',
        answerDuration: 52,
    },
    {
        id: 'q2',
        question: 'strategy',
        answer: '戦略、作戦',
        description: 'strategic(戦略的な)が形容詞形',
        questionAudio: 'audio/explain/en/27-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/27-words.wav',
        answerDuration: 58,
    },
    {
        id: 'q3',
        question: 'clear',
        answer: 'はっきりした',
        description: 'clearly(明らかに)が副詞形、動詞で「片付ける」も',
        questionAudio: 'audio/explain/en/28-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/28-words.wav',
        answerDuration: 39,
    },
    {
        id: 'q4',
        question: 'such',
        answer: 'そのような',
        description: 'such a+形容詞+名詞の語順に注意',
        questionAudio: 'audio/explain/en/29-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/29-words.wav',
        answerDuration: 36,
    },
    {
        id: 'q5',
        question: 'than',
        answer: '…よりも',
        description: '比較級+thanで「〜より」の形で使う',
        questionAudio: 'audio/explain/en/30-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/30-words.wav',
        answerDuration: 31,
    },
];
