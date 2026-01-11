// 保存用ファイル - 05-qas2.md (7-11問目)
// フォルダ: datas/history/4-1/5hideyoshi_policy
// 生成日: 2026-01-08

// タイトル情報（学年・教科）
export const titleData = '中2　歴史';

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
        question: '朝鮮出兵で伝わり、\n佐賀で始まった磁器は？',
        answer: '有田焼',
        description: '佐賀県で始まり、後に欧州へも輸出される日本代表の磁器となった。',
        questionAudio: 'audio/explain/12-5hideyoshi_policy.wav',
        questionDuration: 106,
        answerAudio: 'audio/explain/13-5hideyoshi_policy.wav',
        answerDuration: 35,
    },
    {
        id: 'q2',
        question: '李舜臣が水軍で用いた鉄甲船の名は？',
        answer: '亀甲船',
        description: '防御力に優れ、接近戦を得意とした朝鮮水軍の主力船。',
        questionAudio: 'audio/explain/14-5hideyoshi_policy.wav',
        questionDuration: 92,
        answerAudio: 'audio/explain/15-5hideyoshi_policy.wav',
        answerDuration: 38,
    },
    {
        id: 'q3',
        question: '検地により土地を耕作する権利を保障された身分は？',
        answer: '百姓',
        description: '検地帳に登録されることで、土地を守る一方、年貢の義務を負った。',
        questionAudio: 'audio/explain/16-5hideyoshi_policy.wav',
        questionDuration: 105,
        answerAudio: 'audio/explain/17-5hideyoshi_policy.wav',
        answerDuration: 31,
    },
    {
        id: 'q4',
        question: '1597年に再び朝鮮へ\n大軍を派遣した二度目の戦いは？',
        answer: '慶長の役',
        description: '苦戦が続く中、秀吉の病死をきっかけに全軍が日本へ撤退した。',
        questionAudio: 'audio/explain/18-5hideyoshi_policy.wav',
        questionDuration: 146,
        answerAudio: 'audio/explain/19-5hideyoshi_policy.wav',
        answerDuration: 40,
    },
    {
        id: 'q5',
        question: '秀吉が検地の際に\n基準として統一した計量器は？',
        answer: '京ます',
        description: '地域で異なっていた枡の大きさを揃え、公平な税制を確立した。',
        questionAudio: 'audio/explain/20-5hideyoshi_policy.wav',
        questionDuration: 112,
        answerAudio: 'audio/explain/21-5hideyoshi_policy.wav',
        answerDuration: 33,
    },
];
