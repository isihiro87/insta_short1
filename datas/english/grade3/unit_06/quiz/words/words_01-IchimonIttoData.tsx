// 保存用ファイル - 英単語クイズ（words_01）
// フォルダ: datas/english/grade3/unit_06/quiz/words
// 生成日: 2026-01-27

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
        question: 'donate',
        answer: '･･･を寄付する',
        description: '名詞donation(寄付)、donor(寄付者)も重要',
        questionAudio: 'audio/explain/en/00-words.wav',
        questionDuration: 30,
        answerAudio: 'audio/explain/ja/00-words.wav',
        answerDuration: 39,
    },
    {
        id: 'q2',
        question: 'supply',
        answer: '供給、必需品',
        description: '動詞で「供給する」、school suppliesで「学用品」',
        questionAudio: 'audio/explain/en/01-words.wav',
        questionDuration: 30,
        answerAudio: 'audio/explain/ja/01-words.wav',
        answerDuration: 60,
    },
    {
        id: 'q3',
        question: 'backpack',
        answer: 'バックパック、ランドセル',
        description: 'back(背中)+pack(荷物)の組み合わせ',
        questionAudio: 'audio/explain/en/02-words.wav',
        questionDuration: 30,
        answerAudio: 'audio/explain/ja/02-words.wav',
        answerDuration: 65,
    },
    {
        id: 'q4',
        question: 'unused',
        answer: '未使用の',
        description: 'un-(否定)+used(使われた)→使われていない',
        questionAudio: 'audio/explain/en/03-words.wav',
        questionDuration: 30,
        answerAudio: 'audio/explain/ja/03-words.wav',
        answerDuration: 35,
    },
    {
        id: 'q5',
        question: 'illiterate',
        answer: '読み書きのできない',
        description: 'il-(否定)+literate(読み書きできる)',
        questionAudio: 'audio/explain/en/04-words.wav',
        questionDuration: 30,
        answerAudio: 'audio/explain/ja/04-words.wav',
        answerDuration: 45,
    },
    {
        id: 'q6',
        question: 'survival',
        answer: '存続、生き残ること',
        description: '動詞survive(生き残る)の名詞形',
        questionAudio: 'audio/explain/en/05-words.wav',
        questionDuration: 30,
        answerAudio: 'audio/explain/ja/05-words.wav',
        answerDuration: 74,
    },
    {
        id: 'q7',
        question: 'trade',
        answer: '貿易',
        description: '動詞で「貿易する」、輸出入両方を含む',
        questionAudio: 'audio/explain/en/06-words.wav',
        questionDuration: 30,
        answerAudio: 'audio/explain/ja/06-words.wav',
        answerDuration: 30,
    },
];
