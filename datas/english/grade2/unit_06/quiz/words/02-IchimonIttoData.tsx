// 保存用ファイル - words_02.md（プレゼンテーション用語2）
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
        question: 'comment',
        answer: '批評、コメント',
        description: '動詞で「コメントする」、make a commentも同義',
        questionAudio: 'audio/explain/en/13-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/13-words.wav',
        answerDuration: 55,
    },
    {
        id: 'q2',
        question: 'feedback',
        answer: '意見、フィードバック',
        description: 'feed(与える)+back(返す)→反応を返すこと',
        questionAudio: 'audio/explain/en/14-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/14-words.wav',
        answerDuration: 57,
    },
    {
        id: 'q3',
        question: 'speaker',
        answer: '話す人、演説者',
        description: 'speak(話す)+-er(人)→話す人、スピーカー',
        questionAudio: 'audio/explain/en/15-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/15-words.wav',
        answerDuration: 65,
    },
    {
        id: 'q4',
        question: 'delivery',
        answer: '話しぶり',
        description: 'deliver(届ける)の名詞形。配達の意味も',
        questionAudio: 'audio/explain/en/16-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/16-words.wav',
        answerDuration: 36,
    },
    {
        id: 'q5',
        question: 'letter',
        answer: '文字、手紙',
        description: '「文字」と「手紙」両方の意味を持つ',
        questionAudio: 'audio/explain/en/17-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/17-words.wav',
        answerDuration: 51,
    },
    {
        id: 'q6',
        question: 'contact',
        answer: '接触',
        description: 'eye contactで「アイコンタクト」、動詞で「連絡する」',
        questionAudio: 'audio/explain/en/18-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/18-words.wav',
        answerDuration: 34,
    },
];
