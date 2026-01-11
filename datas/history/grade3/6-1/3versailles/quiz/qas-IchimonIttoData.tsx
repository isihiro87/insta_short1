// 保存用ファイル - qas.md
// フォルダ: datas/history/grade3/6-1/3versailles
// 生成日: 2026-01-11

// タイトル情報（学年・教科）
export const titleData = '中3　歴史';

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
        question: '1919年に結ばれた\n大戦の講和条約は？',
        answer: 'ベルサイユ条約',
        description: 'パリ講和会議で調印され、敗戦国ドイツに厳しい条件を課した条約。',
        questionAudio: 'audio/explain/00-3versailles.wav',
        questionDuration: 111,
        answerAudio: 'audio/explain/01-3versailles.wav',
        answerDuration: 48,
    },
    {
        id: 'q2',
        question: 'ウィルソンの提案で\n設立された国際平和組織は？',
        answer: '国際連盟',
        description: '1920年に発足し、世界平和と国際協調を目的とした史上初の組織。',
        questionAudio: 'audio/explain/02-3versailles.wav',
        questionDuration: 100,
        answerAudio: 'audio/explain/03-3versailles.wav',
        answerDuration: 42,
    },
    {
        id: 'q3',
        question: '各民族が自らの政治を\n決定すべきという原則は？',
        answer: '民族自決',
        description: 'ウィルソンが提唱し、東ヨーロッパ諸国の独立の根拠となった考え。',
        questionAudio: 'audio/explain/04-3versailles.wav',
        questionDuration: 114,
        answerAudio: 'audio/explain/05-3versailles.wav',
        answerDuration: 44,
    },
    {
        id: 'q4',
        question: '国際連盟の設立を\n提唱したアメリカ大統領は？',
        answer: 'ウィルソン',
        description: '「十四か条の平和原則」を発表し、戦後の国際秩序を示した。',
        questionAudio: 'audio/explain/06-3versailles.wav',
        questionDuration: 103,
        answerAudio: 'audio/explain/07-3versailles.wav',
        answerDuration: 30,
    },
    {
        id: 'q5',
        question: '国際連盟で事務次長を\n務めた日本人は？',
        answer: '新渡戸稲造',
        description: '「武士道」の著者としても知られ、国際平和のために尽力した。',
        questionAudio: 'audio/explain/08-3versailles.wav',
        questionDuration: 91,
        answerAudio: 'audio/explain/09-3versailles.wav',
        answerDuration: 42,
    },
];
