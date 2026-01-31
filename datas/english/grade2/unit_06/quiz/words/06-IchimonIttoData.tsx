// 保存用ファイル - words_06.md（熟語：好み・比較表現）
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
        question: 'feel like ...ing',
        answer: '…したい気がする',
        description: 'I feel like eating.「食べたい気分」',
        questionAudio: 'audio/explain/en/38-words.wav',
        questionDuration: 4,
        answerAudio: 'audio/explain/ja/38-words.wav',
        answerDuration: 46,
    },
    {
        id: 'q2',
        question: 'like ... better than',
        answer: '～よりも…が好きだ',
        description: '比較級を使わない比較表現',
        questionAudio: 'audio/explain/en/39-words.wav',
        questionDuration: 4,
        answerAudio: 'audio/explain/ja/39-words.wav',
        answerDuration: 63,
    },
    {
        id: 'q3',
        question: 'like ... the best',
        answer: '…がいちばん好きだ',
        description: '最上級を使わない最上表現',
        questionAudio: 'audio/explain/en/40-words.wav',
        questionDuration: 4,
        answerAudio: 'audio/explain/ja/40-words.wav',
        answerDuration: 49,
    },
    {
        id: 'q4',
        question: 'as ... as',
        answer: '～と同じくらい…',
        description: '同等比較「〜と同じくらい」の基本形',
        questionAudio: 'audio/explain/en/41-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/41-words.wav',
        answerDuration: 45,
    },
    {
        id: 'q5',
        question: 'not as ... as',
        answer: '～ほど…ではない',
        description: '「〜ほど〜ない」否定の同等比較',
        questionAudio: 'audio/explain/en/42-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/42-words.wav',
        answerDuration: 62,
    },
];
