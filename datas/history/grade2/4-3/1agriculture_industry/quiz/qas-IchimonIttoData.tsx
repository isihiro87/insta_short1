// 保存用ファイル - qas.md
// フォルダ: datas/history/grade2/4-3/1agriculture_industry/quiz
// 生成日: 2026-01-24

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
        question: '江戸幕府や藩が年貢増収のために進めた農地開発を何という？',
        answer: '新田開発',
        description: '用水路の整備や干拓により、耕地面積は秀吉時代の約2倍に拡大した。',
        questionAudio: 'audio/explain/00-1agriculture_industry.wav',
        questionDuration: 134,
        answerAudio: 'audio/explain/01-1agriculture_industry.wav',
        answerDuration: 47,
    },
    {
        id: 'q2',
        question: '鉄製で土を深く耕すことができる農具は？',
        answer: '備中ぐわ',
        description: '先が分かれた形状をしており、従来の平ぐわよりも効率よく深く耕すことができた。',
        questionAudio: 'audio/explain/02-1agriculture_industry.wav',
        questionDuration: 93,
        answerAudio: 'audio/explain/03-1agriculture_industry.wav',
        answerDuration: 40,
    },
    {
        id: 'q3',
        question: '稲からもみを効率的に\n取り外すための農具は？',
        answer: '千歯こき',
        description: '従来のこきばしに代わって用いられ、脱穀作業を大幅に効率化した。',
        questionAudio: 'audio/explain/04-1agriculture_industry.wav',
        questionDuration: 92,
        answerAudio: 'audio/explain/05-1agriculture_industry.wav',
        answerDuration: 39,
    },
    {
        id: 'q4',
        question: 'いわしを原料とする肥料は？',
        answer: '干鰯',
        description: '商品作物の栽培を支えた、江戸時代を代表する高い効果をもつ肥料。',
        questionAudio: 'audio/explain/06-1agriculture_industry.wav',
        questionDuration: 58,
        answerAudio: 'audio/explain/07-1agriculture_industry.wav',
        answerDuration: 29,
    },
    {
        id: 'q5',
        question: '現金を得るために\n栽培された作物を何という？',
        answer: '商品作物',
        description: '木綿や菜種などが代表で、農家の貨幣収入源となった。',
        questionAudio: 'audio/explain/08-1agriculture_industry.wav',
        questionDuration: 97,
        answerAudio: 'audio/explain/09-1agriculture_industry.wav',
        answerDuration: 49,
    },
    {
        id: 'q6',
        question: '千葉県九十九里浜で\n盛んに行われた漁は？',
        answer: 'いわし漁',
        description: '地引き網漁が広まり、干鰯の原料となるいわしが大量に水揚げされた。',
        questionAudio: 'audio/explain/10-1agriculture_industry.wav',
        questionDuration: 91,
        answerAudio: 'audio/explain/11-1agriculture_industry.wav',
        answerDuration: 31,
    },
];
