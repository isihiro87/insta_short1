// 保存用ファイル - qas.md
// フォルダ: datas/history/grade1/2-2/2yayoi_era/quiz
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
        question: '稲作が伝わり金属器が\n普及したのは何時代？',
        answer: '弥生時代',
        description: '紀元前8世紀ごろに始まり、農耕の広まりによって社会が大きく変化した。',
        questionAudio: 'audio/explain/00-2yayoi_era.wav',
        questionDuration: 100,
        answerAudio: 'audio/explain/01-2yayoi_era.wav',
        answerDuration: 34,
    },
    {
        id: 'q2',
        question: '九州北部に伝わり\n東北まで広がった農業は？',
        answer: '稲作',
        description: '集団での農作業が行われるようになり、有力者や王が現れ始めた。',
        questionAudio: 'audio/explain/02-2yayoi_era.wav',
        questionDuration: 105,
        answerAudio: 'audio/explain/03-2yayoi_era.wav',
        answerDuration: 31,
    },
    {
        id: 'q3',
        question: '収穫した稲を収め、湿気やねずみを防ぐために建てられた倉庫は？',
        answer: '高床倉庫',
        description: '床を高くすることで風通しを良くし、収穫物を守った。',
        questionAudio: 'audio/explain/04-2yayoi_era.wav',
        questionDuration: 145,
        answerAudio: 'audio/explain/05-2yayoi_era.wav',
        answerDuration: 44,
    },
    {
        id: 'q4',
        question: '3世紀ごろ、30あまりの\n国をまとめた女王は？',
        answer: '卑弥呼',
        description: '呪術的な力を背景に、争いの多かった倭の国々を統治した。',
        questionAudio: 'audio/explain/06-2yayoi_era.wav',
        questionDuration: 113,
        answerAudio: 'audio/explain/07-2yayoi_era.wav',
        answerDuration: 29,
    },
    {
        id: 'q5',
        question: '卑弥呼が都を置いて\nいたとされる国は？',
        answer: '邪馬台国',
        description: 'その所在地については近畿説と九州説があり、現在も論争が続いている。',
        questionAudio: 'audio/explain/08-2yayoi_era.wav',
        questionDuration: 75,
        answerAudio: 'audio/explain/09-2yayoi_era.wav',
        answerDuration: 37,
    },
    {
        id: 'q6',
        question: '武器や工具、農具に\n用いられた金属器は？',
        answer: '鉄器',
        description: '大陸から伝わり、青銅器よりも硬く、実用的な道具として広く使われた。',
        questionAudio: 'audio/explain/10-2yayoi_era.wav',
        questionDuration: 128,
        answerAudio: 'audio/explain/11-2yayoi_era.wav',
        answerDuration: 28,
    },
];
