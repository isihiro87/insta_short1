// 保存用ファイル - qas.md
// フォルダ: datas/history/grade1/2-1/5world_religions/quiz
// 生成日: 2026-01-21

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
        question: '仏教・キリスト教・\nイスラームを合わせて何という？',
        answer: '三大宗教',
        description: '地域や民族をこえて、世界中で広く信仰されている。',
        questionAudio: 'audio/explain/00-5world_religions.wav',
        questionDuration: 116,
        answerAudio: 'audio/explain/01-5world_religions.wav',
        answerDuration: 45,
    },
    {
        id: 'q2',
        question: '紀元前5世紀頃のインドで仏教を開いたのはだれ？',
        answer: 'シャカ',
        description: '修行によりさとりを開き、心の安らぎを得る道を説いた。',
        questionAudio: 'audio/explain/02-5world_religions.wav',
        questionDuration: 103,
        answerAudio: 'audio/explain/03-5world_religions.wav',
        answerDuration: 28,
    },
    {
        id: 'q3',
        question: 'パレスチナで神の愛による救いを説いたのはだれ？',
        answer: 'イエス',
        description: 'ユダヤ教を基に教えを広め、後にキリスト教となった。',
        questionAudio: 'audio/explain/04-5world_religions.wav',
        questionDuration: 93,
        answerAudio: 'audio/explain/05-5world_religions.wav',
        answerDuration: 29,
    },
    {
        id: 'q4',
        question: '7世紀のアラビア半島でイスラームを始めたのはだれ？',
        answer: 'ムハンマド',
        description: '唯一神アッラーのお告げを受けたとする預言者。',
        questionAudio: 'audio/explain/06-5world_religions.wav',
        questionDuration: 98,
        answerAudio: 'audio/explain/07-5world_religions.wav',
        answerDuration: 35,
    },
    {
        id: 'q5',
        question: 'イスラームの聖典を何という？',
        answer: 'クルアーン(コーラン)',
        description: 'ムハンマドが受けた神の啓示をまとめた聖典。',
        questionAudio: 'audio/explain/08-5world_religions.wav',
        questionDuration: 61,
        answerAudio: 'audio/explain/09-5world_religions.wav',
        answerDuration: 31,
    },
];
