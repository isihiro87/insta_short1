// 保存用ファイル - 05-qas.md (1-6問目)
// フォルダ: datas/history/4-1/5hideyoshi_policy
// 生成日: 2026-01-08

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
        question: '秀吉が土地の面積や\n収穫量を全国で調査した政策は？',
        answer: '太閤検地',
        description: '統一した枡や物差しを用い、土地のよしあしを石高で表した。',
        questionAudio: 'audio/explain/00-5hideyoshi_policy.wav',
        questionDuration: 129,
        answerAudio: 'audio/explain/01-5hideyoshi_policy.wav',
        answerDuration: 42,
    },
    {
        id: 'q2',
        question: '秀吉が一揆を防ぐため\n百姓から武器を奪った政策は？',
        answer: '刀狩',
        description: '農民から武具を取り上げ農業に専念させ、兵農分離を加速させた。',
        questionAudio: 'audio/explain/02-5hideyoshi_policy.wav',
        questionDuration: 121,
        answerAudio: 'audio/explain/03-5hideyoshi_policy.wav',
        answerDuration: 35,
    },
    {
        id: 'q3',
        question: '武士と農民の身分が\n明確に区別された社会状態は？',
        answer: '兵農分離',
        description: '検地と刀狩により、武士は支配層、農民は生産層と固定された。',
        questionAudio: 'audio/explain/04-5hideyoshi_policy.wav',
        questionDuration: 110,
        answerAudio: 'audio/explain/05-5hideyoshi_policy.wav',
        answerDuration: 40,
    },
    {
        id: 'q4',
        question: '検地によって示された\n米の予想収穫量の単位は？',
        answer: '石高',
        description: '米の体積で表され、年貢の徴収や軍役の基準として用いられた。',
        questionAudio: 'audio/explain/06-5hideyoshi_policy.wav',
        questionDuration: 106,
        answerAudio: 'audio/explain/07-5hideyoshi_policy.wav',
        answerDuration: 33,
    },
    {
        id: 'q5',
        question: '1592年に秀吉が明の\n征服を目指し朝鮮へ出兵した戦いは？',
        answer: '文禄の役',
        description: '約15万人の大軍を派遣してソウルを占領したが、激しい抵抗に遭った。',
        questionAudio: 'audio/explain/08-5hideyoshi_policy.wav',
        questionDuration: 160,
        answerAudio: 'audio/explain/09-5hideyoshi_policy.wav',
        answerDuration: 41,
    },
    {
        id: 'q6',
        question: '朝鮮の水軍を率いて\n日本の補給路をたった英雄は？',
        answer: '李舜臣',
        description: '優れた戦略と軍船を駆使し、海戦において日本軍を苦しめた。',
        questionAudio: 'audio/explain/10-5hideyoshi_policy.wav',
        questionDuration: 111,
        answerAudio: 'audio/explain/11-5hideyoshi_policy.wav',
        answerDuration: 33,
    },
];
