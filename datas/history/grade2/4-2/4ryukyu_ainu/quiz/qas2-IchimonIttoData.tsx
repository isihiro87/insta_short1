// 保存用ファイル - qas2.md
// フォルダ: datas/history/grade2/4-2/4ryukyu_ainu/quiz
// 生成日: 2026-01-21

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
        question: '江戸時代の北海道や\n千島列島、樺太の呼び方は？',
        answer: '蝦夷地',
        description: 'アイヌ民族が多く暮らし、和人の居住地とは区別されていた。',
        questionAudio: 'audio/explain/10-4ryukyu_ainu.wav',
        questionDuration: 117,
        answerAudio: 'audio/explain/11-4ryukyu_ainu.wav',
        answerDuration: 28,
    },
    {
        id: 'q2',
        question: 'アイヌとの交易を独占し蝦夷地の窓口となった藩は？',
        answer: '松前藩',
        description: '幕府からアイヌの人々との交易の独占権を認められた。',
        questionAudio: 'audio/explain/12-4ryukyu_ainu.wav',
        questionDuration: 125,
        answerAudio: 'audio/explain/13-4ryukyu_ainu.wav',
        answerDuration: 36,
    },
    {
        id: 'q3',
        question: '1669年に、不公平な交易に不満を持って蜂起したアイヌの首長は？',
        answer: 'シャクシャイン',
        description: '和人の経済的支配に対して、アイヌ民族を率いて蜂起した。',
        questionAudio: 'audio/explain/14-4ryukyu_ainu.wav',
        questionDuration: 169,
        answerAudio: 'audio/explain/15-4ryukyu_ainu.wav',
        answerDuration: 33,
    },
    {
        id: 'q4',
        question: '蝦夷地で漁業や狩猟を営み、独自の文化を築いた民族は？',
        answer: 'アイヌ民族',
        description: '自然や動物を敬う信仰を持ち、和人と交易を行っていた。',
        questionAudio: 'audio/explain/16-4ryukyu_ainu.wav',
        questionDuration: 134,
        answerAudio: 'audio/explain/17-4ryukyu_ainu.wav',
        answerDuration: 38,
    },
];
