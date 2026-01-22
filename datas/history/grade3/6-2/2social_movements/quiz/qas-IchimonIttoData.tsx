// 保存用ファイル - qas.md
// フォルダ: datas/history/grade3/6-2/2social_movements/quiz
// 生成日: 2026-01-22

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
        question: '1925年に成立した、\n25歳以上の全男子に選挙権を与えた法律を何という？',
        answer: '普通選挙法',
        description: '納税額による制限を撤廃し、有権者数はそれまでの約4倍に増えた。',
        questionAudio: 'audio/explain/00-2social_movements.wav',
        questionDuration: 203,
        answerAudio: 'audio/explain/01-2social_movements.wav',
        answerDuration: 45,
    },
    {
        id: 'q2',
        question: '普通選挙法と同時に制定\nされた、思想を取り締まる法律は？',
        answer: '治安維持法',
        description: '共産主義や国体の変革を目的とする結社を厳しく取り締まった。',
        questionAudio: 'audio/explain/02-2social_movements.wav',
        questionDuration: 133,
        answerAudio: 'audio/explain/03-2social_movements.wav',
        answerDuration: 43,
    },
    {
        id: 'q3',
        question: '1920年に日本で初めて\n開催された労働者の祭典は？',
        answer: 'メーデー',
        description: '労働条件の改善や権利の主張を目的として、集会やデモが行われた。',
        questionAudio: 'audio/explain/04-2social_movements.wav',
        questionDuration: 134,
        answerAudio: 'audio/explain/05-2social_movements.wav',
        answerDuration: 30,
    },
    {
        id: 'q4',
        question: '労働組合の全国組織として、1921年に結成された組織は？',
        answer: '日本労働総同盟',
        description: '労働運動の激化を背景に、ストライキなどの争議を指導した。',
        questionAudio: 'audio/explain/06-2social_movements.wav',
        questionDuration: 163,
        answerAudio: 'audio/explain/07-2social_movements.wav',
        answerDuration: 56,
    },
    {
        id: 'q5',
        question: '農村で小作人が地主に\n小作料の減額などを求めた争いは？',
        answer: '小作争議',
        description: '1922年には、全国組織として日本農民組合が結成された。',
        questionAudio: 'audio/explain/08-2social_movements.wav',
        questionDuration: 132,
        answerAudio: 'audio/explain/09-2social_movements.wav',
        answerDuration: 39,
    },
];
