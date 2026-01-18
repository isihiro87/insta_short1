// 保存用ファイル - qas2.md
// フォルダ: datas/history/grade1/2-1/3chinese_civilization/quiz
// 生成日: 2026-01-17

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
        question: '紀元前3世紀に初めて\n中国を統一した王は？',
        answer: '始皇帝',
        description: '秦の王として、文字・貨幣・計量単位などを統一した。',
        questionAudio: 'audio/explain/10-3chinese_civilization.wav',
        questionDuration: 105,
        answerAudio: 'audio/explain/11-3chinese_civilization.wav',
        answerDuration: 38,
    },
    {
        id: 'q2',
        question: '始皇帝が北方民族の\n侵入を防ぐために築いたのは？',
        answer: '万里の長城',
        description: '各地の長城をつなぎ合わせ、大規模な防壁とした。',
        questionAudio: 'audio/explain/12-3chinese_civilization.wav',
        questionDuration: 114,
        answerAudio: 'audio/explain/13-3chinese_civilization.wav',
        answerDuration: 44,
    },
    {
        id: 'q3',
        question: '秦の次に中国を統一し\n大帝国となった国は？',
        answer: '漢',
        description: '紀元前2世紀には朝鮮半島から中央アジアまで拡大した。',
        questionAudio: 'audio/explain/14-3chinese_civilization.wav',
        questionDuration: 111,
        answerAudio: 'audio/explain/15-3chinese_civilization.wav',
        answerDuration: 21,
    },
    {
        id: 'q4',
        question: '中国と西方を結んだ\n東西交易路の名称は？',
        answer: 'シルクロード',
        description: '絹の道とも呼ばれ、仏教などが中国にもたらされた。',
        questionAudio: 'audio/explain/16-3chinese_civilization.wav',
        questionDuration: 105,
        answerAudio: 'audio/explain/17-3chinese_civilization.wav',
        answerDuration: 37,
    },
    {
        id: 'q5',
        question: '始皇帝の墓のそばに\n埋められた兵士の焼き物は？',
        answer: '兵馬俑',
        description: '兵士や馬をかたどった等身大の像が約7000体並んでいた。',
        questionAudio: 'audio/explain/18-3chinese_civilization.wav',
        questionDuration: 101,
        answerAudio: 'audio/explain/19-3chinese_civilization.wav',
        answerDuration: 33,
    },
];
