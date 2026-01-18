// 保存用ファイル - qas.md
// フォルダ: datas/history/grade2/4-2/1edo_bakufu/quiz
// 生成日: 2026-01-15

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
        question: '1603年に\n徳川家康が開いたのは\n何幕府？',
        answer: '江戸幕府',
        description: '約260年間にわたり全国を支配し、安定した社会を築いた。',
        questionAudio: 'audio/explain/00-1edo_bakufu.wav',
        questionDuration: 111,
        answerAudio: 'audio/explain/01-1edo_bakufu.wav',
        answerDuration: 34,
    },
    {
        id: 'q2',
        question: '1600年に家康が\n石田三成らを破ったのは\n何の戦い？',
        answer: '関ヶ原の戦い',
        description: 'この勝利により、家康は全国支配の実権を握った。',
        questionAudio: 'audio/explain/02-1edo_bakufu.wav',
        questionDuration: 128,
        answerAudio: 'audio/explain/03-1edo_bakufu.wav',
        answerDuration: 49,
    },
    {
        id: 'q3',
        question: '将軍と大名が\n土地と人々を支配した\n仕組みを何という？',
        answer: '幕藩体制',
        description: '将軍と各大名が主従関係を結び、統治を行う体制のこと。',
        questionAudio: 'audio/explain/04-1edo_bakufu.wav',
        questionDuration: 121,
        answerAudio: 'audio/explain/05-1edo_bakufu.wav',
        answerDuration: 44,
    },
    {
        id: 'q4',
        question: '将軍から1万石以上の\n領地をもらった武士を\n何という？',
        answer: '大名',
        description: 'その領地と、領地を支配する仕組みを藩と呼ぶ。',
        questionAudio: 'audio/explain/06-1edo_bakufu.wav',
        questionDuration: 118,
        answerAudio: 'audio/explain/07-1edo_bakufu.wav',
        answerDuration: 30,
    },
    {
        id: 'q5',
        question: '徳川家の一族である\n大名を何という？',
        answer: '親藩',
        description: '尾張・紀伊・水戸の御三家は、特に高い家格を持っていた。',
        questionAudio: 'audio/explain/08-1edo_bakufu.wav',
        questionDuration: 87,
        answerAudio: 'audio/explain/09-1edo_bakufu.wav',
        answerDuration: 30,
    },
    {
        id: 'q6',
        question: '関ヶ原以前から\n徳川家に従っていた\n大名を何という？',
        answer: '譜代大名',
        description: '江戸に近い要所に配置され、幕府の要職に任命された。',
        questionAudio: 'audio/explain/10-1edo_bakufu.wav',
        questionDuration: 117,
        answerAudio: 'audio/explain/11-1edo_bakufu.wav',
        answerDuration: 40,
    },
    {
        id: 'q7',
        question: '関ヶ原の戦い以降に\n従うようになった\n大名を何という？',
        answer: '外様大名',
        description: '江戸から遠い地方に配置され、幕政には参加できなかった。',
        questionAudio: 'audio/explain/12-1edo_bakufu.wav',
        questionDuration: 117,
        answerAudio: 'audio/explain/13-1edo_bakufu.wav',
        answerDuration: 40,
    },
    {
        id: 'q8',
        question: '大名を統制するために\n幕府が定めた法律を\n何という？',
        answer: '武家諸法度',
        description: '城の修理や大名同士の無断の結婚などを禁止した。',
        questionAudio: 'audio/explain/14-1edo_bakufu.wav',
        questionDuration: 118,
        answerAudio: 'audio/explain/15-1edo_bakufu.wav',
        answerDuration: 40,
    },
];
