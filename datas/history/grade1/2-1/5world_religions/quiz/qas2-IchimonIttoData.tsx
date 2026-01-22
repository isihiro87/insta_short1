// 保存用ファイル - qas2.md
// フォルダ: datas/history/grade1/2-1/5world_religions/quiz
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
        question: 'ユダヤ教・キリスト教・\nイスラーム共通の聖地はどこ？',
        answer: 'エルサレム',
        description: '三つの宗教にとって重要な場所であり、信仰が交差する。',
        questionAudio: 'audio/explain/10-5world_religions.wav',
        questionDuration: 127,
        answerAudio: 'audio/explain/11-5world_religions.wav',
        answerDuration: 33,
    },
    {
        id: 'q2',
        question: 'キリスト教を国教とした\n古代の大帝国は何帝国？',
        answer: 'ローマ帝国',
        description: '4世紀末に国教化され、ヨーロッパ各地に広まった。',
        questionAudio: 'audio/explain/12-5world_religions.wav',
        questionDuration: 115,
        answerAudio: 'audio/explain/13-5world_religions.wav',
        answerDuration: 40,
    },
    {
        id: 'q3',
        question: 'メッカにあるイスラーム\n最高の聖地は何という神殿？',
        answer: 'カーバ神殿',
        description: '信徒はここに向かって、1日に5回の礼拝を行う。',
        questionAudio: 'audio/explain/14-5world_religions.wav',
        questionDuration: 106,
        answerAudio: 'audio/explain/15-5world_religions.wav',
        answerDuration: 38,
    },
    {
        id: 'q4',
        question: 'インドで仏教を吸収して\n成立した多神教は？',
        answer: 'ヒンドゥー教',
        description: 'アーリヤ人の宗教が土着信仰を吸収して広まった。',
        questionAudio: 'audio/explain/16-5world_religions.wav',
        questionDuration: 128,
        answerAudio: 'audio/explain/17-5world_religions.wav',
        answerDuration: 37,
    },
];
