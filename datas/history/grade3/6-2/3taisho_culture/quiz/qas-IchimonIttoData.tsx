// 保存用ファイル - qas.md
// フォルダ: datas/history/grade3/6-2/3taisho_culture/quiz
// 生成日: 2026-01-25

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
        question: '1925年に開始され、\n新たな情報源となったのは？',
        answer: 'ラジオ放送',
        description: '東京・名古屋・大阪で放送が始まり、ニュースや娯楽を全国に伝えた。',
        questionAudio: 'audio/explain/00-3taisho_culture.wav',
        questionDuration: 147,
        answerAudio: 'audio/explain/01-3taisho_culture.wav',
        answerDuration: 40,
    },
    {
        id: 'q2',
        question: '1冊1円で販売され、\n文学全集を普及させた書籍は？',
        answer: '円本',
        description: '改造社などが刊行し、高価だった活字文化を一般の人々に広めた。',
        questionAudio: 'audio/explain/02-3taisho_culture.wav',
        questionDuration: 131,
        answerAudio: 'audio/explain/03-3taisho_culture.wav',
        answerDuration: 29,
    },
    {
        id: 'q3',
        question: '1923年9月1日に発生\nした大震災を何という？',
        answer: '関東大震災',
        description: '社会が大きな混乱に陥り、朝鮮人や社会主義者らが殺害される事件も起きた。',
        questionAudio: 'audio/explain/04-3taisho_culture.wav',
        questionDuration: 143,
        answerAudio: 'audio/explain/05-3taisho_culture.wav',
        answerDuration: 47,
    },
    {
        id: 'q4',
        question: '大正時代、バスの集金や\n案内を担当した女性は？',
        answer: 'バスガール',
        description: '電話交換手などと並び、女性の社会進出を象徴する職業の一つとなった。',
        questionAudio: 'audio/explain/06-3taisho_culture.wav',
        questionDuration: 134,
        answerAudio: 'audio/explain/07-3taisho_culture.wav',
        answerDuration: 35,
    },
    {
        id: 'q5',
        question: '『羅生門』『蜘蛛の糸』を書いた作家は？',
        answer: '芥川龍之介',
        description: '古典を題材にした作品や、子ども向けの優れた短編作品を多く残した。',
        questionAudio: 'audio/explain/08-3taisho_culture.wav',
        questionDuration: 108,
        answerAudio: 'audio/explain/09-3taisho_culture.wav',
        answerDuration: 51,
    },
];
