// 保存用ファイル - words_03.md（数・調査・スポーツ）
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
        question: 'survey',
        answer: '調査',
        description: '動詞で「調査する」、アンケート調査の意味も',
        questionAudio: 'audio/explain/en/19-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/19-words.wav',
        answerDuration: 29,
    },
    {
        id: 'q2',
        question: 'percent',
        answer: 'パーセント',
        description: 'per(〜につき)+cent(100)→100につき',
        questionAudio: 'audio/explain/en/20-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/20-words.wav',
        answerDuration: 34,
    },
    {
        id: 'q3',
        question: 'half',
        answer: '半分、2分の1',
        description: '複数形はhalves、half an hourで「30分」',
        questionAudio: 'audio/explain/en/21-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/21-words.wav',
        answerDuration: 62,
    },
    {
        id: 'q4',
        question: 'quiz',
        answer: 'クイズ',
        description: '小テストの意味も、quiz showで「クイズ番組」',
        questionAudio: 'audio/explain/en/22-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/22-words.wav',
        answerDuration: 30,
    },
    {
        id: 'q5',
        question: 'trivia',
        answer: '雑学的な知識',
        description: 'trivial(些細な)の名詞形、雑学クイズに',
        questionAudio: 'audio/explain/en/23-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/23-words.wav',
        answerDuration: 54,
    },
    {
        id: 'q6',
        question: 'court',
        answer: 'コート',
        description: 'スポーツのコート。「裁判所」の意味もある',
        questionAudio: 'audio/explain/en/24-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/24-words.wav',
        answerDuration: 27,
    },
    {
        id: 'q7',
        question: 'curling',
        answer: 'カーリング',
        description: 'curl(巻く)+ing、氷上でストーンを滑らせる競技',
        questionAudio: 'audio/explain/en/25-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/25-words.wav',
        answerDuration: 33,
    },
];
