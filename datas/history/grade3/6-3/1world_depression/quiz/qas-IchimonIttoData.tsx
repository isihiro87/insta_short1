// 保存用ファイル - qas.md
// フォルダ: datas/history/grade3/6-3/1world_depression/quiz
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
        question: '1929年に始まった\n世界的な不況を何という？',
        answer: '世界恐慌',
        description: 'ニューヨークの株価暴落をきっかけに、不況が世界中へと広がった。',
        questionAudio: 'audio/explain/00-1world_depression.wav',
        questionDuration: 124,
        answerAudio: 'audio/explain/01-1world_depression.wav',
        answerDuration: 42,
    },
    {
        id: 'q2',
        question: '世界恐慌のきっかけと\nなったアメリカの都市は？',
        answer: 'ニューヨーク',
        description: 'ウォール街の株式市場での株価暴落が、深刻な経済混乱の引き金となった。',
        questionAudio: 'audio/explain/02-1world_depression.wav',
        questionDuration: 89,
        answerAudio: 'audio/explain/03-1world_depression.wav',
        answerDuration: 33,
    },
    {
        id: 'q3',
        question: '世界恐慌に対して\nアメリカが実施した政策は？',
        answer: 'ニューディール\n(新規まき直し)',
        description: '公共事業の拡大や労働者の保護、農業生産の調整などを行い、景気回復を図った。',
        questionAudio: 'audio/explain/04-1world_depression.wav',
        questionDuration: 97,
        answerAudio: 'audio/explain/05-1world_depression.wav',
        answerDuration: 33,
    },
    {
        id: 'q4',
        question: '不況対策としてニューディール政策を行ったアメリカ大統領は？',
        answer: '(フランクリン・)\nローズベルト',
        description: 'ラジオを通じて国民に語りかけ、政府主導で経済の立て直しを進めた。',
        questionAudio: 'audio/explain/06-1world_depression.wav',
        questionDuration: 123,
        answerAudio: 'audio/explain/07-1world_depression.wav',
        answerDuration: 38,
    },
    {
        id: 'q5',
        question: '植民地などと経済圏を形成し、他国を排除する経済のしくみを何という？',
        answer: 'ブロック経済',
        description: 'イギリスやフランスなどが、自国と植民地の経済を守るために採用した。',
        questionAudio: 'audio/explain/08-1world_depression.wav',
        questionDuration: 169,
        answerAudio: 'audio/explain/09-1world_depression.wav',
        answerDuration: 37,
    },
];
