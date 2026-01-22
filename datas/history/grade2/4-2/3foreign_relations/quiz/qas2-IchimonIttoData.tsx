// 保存用ファイル - qas2.md
// フォルダ: datas/history/grade2/4-2/3foreign_relations/quiz
// 生成日: 2026-01-18

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
        question: '長崎でオランダ人が滞在を許された場所はどこ？',
        answer: '出島',
        description: '人工島内に閉じ込められ、原則として外出は禁止されていました。',
        questionAudio: 'audio/explain/10-3foreign_relations.wav',
        questionDuration: 102,
        answerAudio: 'audio/explain/11-3foreign_relations.wav',
        answerDuration: 30,
    },
    {
        id: 'q2',
        question: '対馬藩が朝鮮の釜山に\n設けた役人の居留地は？',
        answer: '倭館',
        description: 'ここを拠点に、朝鮮にんじんや木綿などの輸入が行われた。',
        questionAudio: 'audio/explain/14-3foreign_relations.wav',
        questionDuration: 111,
        answerAudio: 'audio/explain/15-3foreign_relations.wav',
        answerDuration: 28,
    },
    {
        id: 'q3',
        question: '銀の代わりに日本が長崎貿易で輸出した海産物は？',
        answer: '俵物',
        description: '干しあわびやなまこなどを俵に詰めた中国向けの輸出品。',
        questionAudio: 'audio/explain/16-3foreign_relations.wav',
        questionDuration: 123,
        answerAudio: 'audio/explain/17-3foreign_relations.wav',
        answerDuration: 36,
    },
    {
        id: 'q4',
        question: '朝鮮から将軍の代替わりごとに派遣された使節は？',
        answer: '朝鮮通信使',
        description: '学者や芸術家も含まれ、日本の学者らと文化交流を行った。',
        questionAudio: 'audio/explain/18-3foreign_relations.wav',
        questionDuration: 110,
        answerAudio: 'audio/explain/19-3foreign_relations.wav',
        answerDuration: 51,
    },
];
