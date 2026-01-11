// 保存用ファイル - 04-qas.md
// フォルダ: datas/history/4-1/3nanban_trade
// 生成日: 2026-01-06

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
        question: '九州の大名が教皇のもと\nへ派遣した少年使節は？',
        answer: '天正遣欧使節',
        description: '伊東マンショら4人が参加し、日本の存在を欧州に広く知らせた。',
        questionAudio: 'audio/explain/12-3nanban_trade.wav',
        questionDuration: 115,
        answerAudio: 'audio/explain/13-3nanban_trade.wav',
        answerDuration: 55,
    },
    {
        id: 'q2',
        question: '南蛮貿易において日本から\n輸出された主な品は？',
        answer: '銀',
        description: '当時の日本は世界有数の産地で、石見銀山などがその供給源となった。',
        questionAudio: 'audio/explain/14-3nanban_trade.wav',
        questionDuration: 105,
        answerAudio: 'audio/explain/15-3nanban_trade.wav',
        answerDuration: 23,
    },
    {
        id: 'q3',
        question: '宣教師が持ち込み「平家物語」等を印刷した技術は？',
        answer: '活版印刷術',
        description: '金属の活字を用いた印刷機で、本文はローマ字で綴られた。',
        questionAudio: 'audio/explain/16-3nanban_trade.wav',
        questionDuration: 130,
        answerAudio: 'audio/explain/17-3nanban_trade.wav',
        answerDuration: 51,
    },
    {
        id: 'q4',
        question: '1580年にイエズス会に\n寄進された港町は？',
        answer: '長崎',
        description: '肥前の領主大村氏が寄進し、南蛮貿易の国内最大の拠点となった。',
        questionAudio: 'audio/explain/18-3nanban_trade.wav',
        questionDuration: 113,
        answerAudio: 'audio/explain/19-3nanban_trade.wav',
        answerDuration: 34,
    },
    {
        id: 'q5',
        question: 'ザビエルが鹿児島に上陸する\n契機となった日本人は？',
        answer: 'アンジロウ',
        description: 'マレー半島でザビエルに出会い、日本への布教を強く勧めた人物。',
        questionAudio: 'audio/explain/20-3nanban_trade.wav',
        questionDuration: 109,
        answerAudio: 'audio/explain/21-3nanban_trade.wav',
        answerDuration: 31,
    },
    {
        id: 'q6',
        question: '天正遣欧使節が持ち帰った\n最新の世界地図帳は？',
        answer: '世界の舞台',
        description: 'オルテリウスが制作した地図帳で、当時の日本人の世界像を広げた。',
        questionAudio: 'audio/explain/22-3nanban_trade.wav',
        questionDuration: 112,
        answerAudio: 'audio/explain/23-3nanban_trade.wav',
        answerDuration: 43,
    },
];
