// 保存用ファイル - words_06.md（プレゼンテーション用語1）
// フォルダ: datas/english/grade2/unit_06/quiz/words
// 生成日: 2026-01-26

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
        question: 'topic',
        answer: '話題、トピック',
        description: "Today's topic is...「今日の話題は…」",
        questionAudio: 'audio/explain/en/06-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/06-words.wav',
        answerDuration: 54,
    },
    {
        id: 'q2',
        question: 'slide',
        answer: 'スライド',
        description: 'PowerPointの1枚1枚がslide',
        questionAudio: 'audio/explain/en/07-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/07-words.wav',
        answerDuration: 32,
    },
    {
        id: 'q3',
        question: 'content',
        answer: '中身、内容',
        description: 'con（共に）+ tain（含む）→中に含むもの',
        questionAudio: 'audio/explain/en/08-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/08-words.wav',
        answerDuration: 54,
    },
    {
        id: 'q4',
        question: 'data',
        answer: '資料、データ',
        description: '複数形扱い。datumの複数形',
        questionAudio: 'audio/explain/en/09-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/09-words.wav',
        answerDuration: 51,
    },
    {
        id: 'q5',
        question: 'graph',
        answer: 'グラフ、図表',
        description: 'bar graph（棒グラフ）、pie graph（円グラフ）',
        questionAudio: 'audio/explain/en/10-words.wav',
        questionDuration: 2,
        answerAudio: 'audio/explain/ja/10-words.wav',
        answerDuration: 54,
    },
    {
        id: 'q6',
        question: 'result',
        answer: '結果',
        description: 'as a result「結果として」もセットで覚える',
        questionAudio: 'audio/explain/en/11-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/11-words.wav',
        answerDuration: 28,
    },
    {
        id: 'q7',
        question: 'conclusion',
        answer: '結論、結び',
        description: 'in conclusion「結論として」で締めくくりに使う',
        questionAudio: 'audio/explain/en/12-words.wav',
        questionDuration: 3,
        answerAudio: 'audio/explain/ja/12-words.wav',
        answerDuration: 56,
    },
];
