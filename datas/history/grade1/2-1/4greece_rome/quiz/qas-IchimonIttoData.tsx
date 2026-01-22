// 保存用ファイル - qas.md
// フォルダ: datas/history/grade1/2-1/4greece_rome/quiz
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
        question: 'ギリシャで形成された\n都市国家を何という？',
        answer: 'ポリス',
        description: 'アテネやスパルタが代表的で、市民（成年男性）が中心となった。',
        questionAudio: 'audio/explain/00-4greece_rome.wav',
        questionDuration: 89,
        answerAudio: 'audio/explain/01-4greece_rome.wav',
        answerDuration: 30,
    },
    {
        id: 'q2',
        question: 'アテネで行われた、市民全員が参加して行う政治を何という？',
        answer: '(直接)民主政',
        description: '民会を中心とするこの体制は、現代民主主義の起源。',
        questionAudio: 'audio/explain/02-4greece_rome.wav',
        questionDuration: 142,
        answerAudio: 'audio/explain/03-4greece_rome.wav',
        answerDuration: 36,
    },
    {
        id: 'q3',
        question: 'マケドニアの王で東方\n遠征を行った人物は？',
        answer: 'アレクサンドロス大王',
        description: 'ペルシャを征服し、インド西北部（インダス川流域）まで領土を広げた。',
        questionAudio: 'audio/explain/04-4greece_rome.wav',
        questionDuration: 98,
        answerAudio: 'audio/explain/05-4greece_rome.wav',
        answerDuration: 55,
    },
    {
        id: 'q4',
        question: 'ギリシャ文化と\nオリエント文化が融合した文化は？',
        answer: 'ヘレニズム',
        description: 'アレクサンドロス大王の遠征により各地域に広まった。',
        questionAudio: 'audio/explain/06-4greece_rome.wav',
        questionDuration: 97,
        answerAudio: 'audio/explain/07-4greece_rome.wav',
        answerDuration: 36,
    },
    {
        id: 'q5',
        question: '古代ローマで行われた、\n王がいない政治を何という？',
        answer: '共和政',
        description: '紀元前6世紀に王政を廃止して始まった、王のいない政治。',
        questionAudio: 'audio/explain/08-4greece_rome.wav',
        questionDuration: 119,
        answerAudio: 'audio/explain/09-4greece_rome.wav',
        answerDuration: 35,
    },
];
