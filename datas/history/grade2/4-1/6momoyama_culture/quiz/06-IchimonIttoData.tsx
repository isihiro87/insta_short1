// 保存用ファイル - 06-qas.md
// フォルダ: datas/history/4-1/6momoyama_culture
// 生成日: 2026-01-09

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
        question: '大名や豪商の富を\n背景とした豪華な文化の名称は？',
        answer: '桃山文化',
        description: '全国統一を進めた権力者や豪商の力を背景に生まれた、力強く華やかな文化。',
        questionAudio: 'audio/explain/00-6momoyama_culture.wav',
        questionDuration: 122,
        answerAudio: 'audio/explain/01-6momoyama_culture.wav',
        answerDuration: 41,
    },
    {
        id: 'q2',
        question: '秀吉に仕え、質素な\n「わび茶」を完成させた人物は？',
        answer: '千利休',
        description: '堺の商人で、茶の湯を精神修養の場として芸術的に高めた。',
        questionAudio: 'audio/explain/02-6momoyama_culture.wav',
        questionDuration: 130,
        answerAudio: 'audio/explain/03-6momoyama_culture.wav',
        answerDuration: 40,
    },
    {
        id: 'q3',
        question: '欧州の文化が日本の\n芸術や風俗に与えた影響は？',
        answer: '南蛮文化',
        description: 'パンや時計、活版印刷などの実用的な技術も多く伝わった。',
        questionAudio: 'audio/explain/04-6momoyama_culture.wav',
        questionDuration: 114,
        answerAudio: 'audio/explain/05-6momoyama_culture.wav',
        answerDuration: 40,
    },
    {
        id: 'q4',
        question: '狩野永徳が描いた、\n力強い唐獅子が特徴の障壁画は？',
        answer: '唐獅子図屏風',
        description: '金箔や鮮やかな色彩を使い、支配者の威信を象徴する代表作。',
        questionAudio: 'audio/explain/06-6momoyama_culture.wav',
        questionDuration: 136,
        answerAudio: 'audio/explain/07-6momoyama_culture.wav',
        answerDuration: 48,
    },
    {
        id: 'q5',
        question: '白壁が美しく「白鷺城」\nとも呼ばれる兵庫県の城は？',
        answer: '姫路城',
        description: '5層の大天守を持ち、桃山文化の影響を受けた壮麗な城。',
        questionAudio: 'audio/explain/08-6momoyama_culture.wav',
        questionDuration: 140,
        answerAudio: 'audio/explain/09-6momoyama_culture.wav',
        answerDuration: 36,
    },
    {
        id: 'q6',
        question: '三味線に合わせて語り、\n人々の人気を集めた芸能は？',
        answer: '浄瑠璃',
        description: '恋愛や物語を主題とし、平和を謳歌する民衆の間で流行した。',
        questionAudio: 'audio/explain/10-6momoyama_culture.wav',
        questionDuration: 125,
        answerAudio: 'audio/explain/11-6momoyama_culture.wav',
        answerDuration: 32,
    },
];
