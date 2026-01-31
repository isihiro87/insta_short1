// 保存用ファイル - qas.md
// フォルダ: datas/history/grade1/2-2/3kofun_era/quiz
// 生成日: 2026-01-28

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
        question: '巨大な墓が各地で盛んに\n造られたのは何時代？',
        answer: '古墳時代',
        description: '3世紀後半から6世紀末ごろまで続き、各地に強い力をもつ勢力が現れた。',
        questionAudio: 'audio/explain/00-3kofun_era.wav',
        questionDuration: 104,
        answerAudio: 'audio/explain/01-3kofun_era.wav',
        answerDuration: 35,
    },
    {
        id: 'q2',
        question: '奈良盆地を中心に\n現れた強大な勢力は？',
        answer: '大和政権',
        description: '王や豪族が結びついてでき、日本列島の広い範囲に影響を及ぼした。',
        questionAudio: 'audio/explain/02-3kofun_era.wav',
        questionDuration: 94,
        answerAudio: 'audio/explain/03-3kofun_era.wav',
        answerDuration: 39,
    },
    {
        id: 'q3',
        question: '円形と方形を組み合わせた日本独自の大きな墓は？',
        answer: '前方後円墳',
        description: '大和政権に従った全国の豪族も、この形の墓を造った。',
        questionAudio: 'audio/explain/04-3kofun_era.wav',
        questionDuration: 106,
        answerAudio: 'audio/explain/05-3kofun_era.wav',
        answerDuration: 47,
    },
    {
        id: 'q4',
        question: '大和政権の頂点に\n立つ王を何と呼んだ？',
        answer: '大王',
        description: '5世紀後半には九州から東北地方南部まで影響力を広げた。',
        questionAudio: 'audio/explain/06-3kofun_era.wav',
        questionDuration: 88,
        answerAudio: 'audio/explain/07-3kofun_era.wav',
        answerDuration: 30,
    },
    {
        id: 'q5',
        question: '古墳の表面に並べられた\n人や動物の焼き物は？',
        answer: '埴輪',
        description: '墓の周囲を区切るためや、死者の権威を示すために置かれた。',
        questionAudio: 'audio/explain/08-3kofun_era.wav',
        questionDuration: 99,
        answerAudio: 'audio/explain/09-3kofun_era.wav',
        answerDuration: 29,
    },
    {
        id: 'q6',
        question: '大陸から移り住み技術や\n文化を伝えた人々は？',
        answer: '渡来人',
        description: '朝鮮半島の戦乱などを背景に日本へ移り住み、さまざまな技術を伝えた。',
        questionAudio: 'audio/explain/10-3kofun_era.wav',
        questionDuration: 104,
        answerAudio: 'audio/explain/11-3kofun_era.wav',
        answerDuration: 31,
    },
    {
        id: 'q7',
        question: '渡来人が伝えた高温で\n焼く硬い黒色の土器は？',
        answer: '須恵器',
        description: 'ろくろを使い、斜面を利用したかまどで高温で焼かれた。',
        questionAudio: 'audio/explain/12-3kofun_era.wav',
        questionDuration: 101,
        answerAudio: 'audio/explain/13-3kofun_era.wav',
        answerDuration: 32,
    },
];
