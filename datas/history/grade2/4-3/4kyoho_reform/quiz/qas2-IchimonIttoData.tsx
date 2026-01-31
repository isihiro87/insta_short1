// 保存用ファイル - qas2.md
// フォルダ: datas/history/grade2/4-3/4kyoho_reform/quiz
// 生成日: 2026-01-30

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
        question: '問屋が農民に道具や金を貸して製品を作らせる工業を何という？',
        answer: '問屋制家内工業',
        description: '18世紀ごろから発達した、商人(問屋)が農民に原料や資金を貸し与え、生産を行わせる形態。',
        questionAudio: 'audio/explain/12-4kyoho_reform.wav',
        questionDuration: 137,
        answerAudio: 'audio/explain/13-4kyoho_reform.wav',
        answerDuration: 53,
    },
    {
        id: 'q2',
        question: '工場を建て人を雇い、\n分業で製品を生産するやり方は？',
        answer: '工場制手工業',
        description: 'マニュファクチュアとも呼ばれ、近代工業の基礎となった。',
        questionAudio: 'audio/explain/14-4kyoho_reform.wav',
        questionDuration: 130,
        answerAudio: 'audio/explain/15-4kyoho_reform.wav',
        answerDuration: 50,
    },
    {
        id: 'q3',
        question: '貨幣経済の浸透で土地を手放し、借りて耕す農民を何という？',
        answer: '小作人',
        description: '農村に貧富の差が広がる中で生まれた、土地を持たず地主から借りて耕作する農民。',
        questionAudio: 'audio/explain/16-4kyoho_reform.wav',
        questionDuration: 149,
        answerAudio: 'audio/explain/17-4kyoho_reform.wav',
        answerDuration: 33,
    },
    {
        id: 'q4',
        question: '没落した百姓から土地を\n買い集め、裕福になった層は？',
        answer: '地主',
        description: '没落した農民を小作人として使い、農村での支配を強めた。',
        questionAudio: 'audio/explain/18-4kyoho_reform.wav',
        questionDuration: 125,
        answerAudio: 'audio/explain/19-4kyoho_reform.wav',
        answerDuration: 30,
    },
    {
        id: 'q5',
        question: '多くの村が団結し、年貢の軽減などを要求した行動を何という？',
        answer: '百姓一揆',
        description: '18世紀以降に激増し、代表者が円形に署名することもあった。',
        questionAudio: 'audio/explain/20-4kyoho_reform.wav',
        questionDuration: 149,
        answerAudio: 'audio/explain/21-4kyoho_reform.wav',
        answerDuration: 41,
    },
    {
        id: 'q6',
        question: '都市で米の買い占めなどに対し、商人を襲った行動は？',
        answer: '打ちこわし',
        description: '米価高騰に苦しむ庶民が、商店を破壊して食料を奪った。',
        questionAudio: 'audio/explain/22-4kyoho_reform.wav',
        questionDuration: 123,
        answerAudio: 'audio/explain/23-4kyoho_reform.wav',
        answerDuration: 34,
    },
    {
        id: 'q7',
        question: '一揆で首謀者を特定\nさせないために使われた署名は？',
        answer: 'からかさ連判状',
        description: '円形に署名することで、指導者が誰か分からないようにした。',
        questionAudio: 'audio/explain/24-4kyoho_reform.wav',
        questionDuration: 105,
        answerAudio: 'audio/explain/25-4kyoho_reform.wav',
        answerDuration: 51,
    },
];
