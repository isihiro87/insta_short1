// 保存用ファイル - 03-qas.md
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
        question: '1543年に種子島へ\n伝来した新しい武器は？',
        answer: '鉄砲',
        description: 'ポルトガル人が伝え、戦国大名の戦い方や城の造りを一変させた。',
        questionAudio: 'audio/explain/00-3nanban_trade.wav',
        questionDuration: 123,
        answerAudio: 'audio/explain/01-3nanban_trade.wav',
        answerDuration: 31,
    },
    {
        id: 'q2',
        question: '1549年にキリスト教を日本に伝えた人物は？',
        answer: 'ザビエル',
        description: 'イエズス会の宣教師で、鹿児島から平戸、京都などを巡り布教した。',
        questionAudio: 'audio/explain/02-3nanban_trade.wav',
        questionDuration: 122,
        answerAudio: 'audio/explain/03-3nanban_trade.wav',
        answerDuration: 34,
    },
    {
        id: 'q3',
        question: '南欧人との間で行われた\n貿易の名称は？',
        answer: '南蛮貿易',
        description: 'ポルトガル人やスペイン人との取引で、銀や生糸が主な品目であった。',
        questionAudio: 'audio/explain/04-3nanban_trade.wav',
        questionDuration: 97,
        answerAudio: 'audio/explain/05-3nanban_trade.wav',
        answerDuration: 42,
    },
    {
        id: 'q4',
        question: '貿易の利益を得るため\n改宗した戦国大名は？',
        answer: 'キリシタン大名',
        description: '九州地方に多く現れ、領地に教会を建てたり使節を送ったりした。',
        questionAudio: 'audio/explain/06-3nanban_trade.wav',
        questionDuration: 100,
        answerAudio: 'audio/explain/07-3nanban_trade.wav',
        answerDuration: 47,
    },
    {
        id: 'q5',
        question: '刀鍛冶の技術で鉄砲生産地となった近江の都市は？',
        answer: '国友',
        description: '現在の滋賀県に位置し、堺と並び戦国時代の鉄砲需要を支えた。',
        questionAudio: 'audio/explain/08-3nanban_trade.wav',
        questionDuration: 115,
        answerAudio: 'audio/explain/09-3nanban_trade.wav',
        answerDuration: 34,
    },
    {
        id: 'q6',
        question: '南蛮貿易で輸入された\n衣料の高級原料は？',
        answer: '生糸',
        description: '中国産のものがポルトガル船で運ばれ、日本国内で珍重された。',
        questionAudio: 'audio/explain/10-3nanban_trade.wav',
        questionDuration: 99,
        answerAudio: 'audio/explain/11-3nanban_trade.wav',
        answerDuration: 28,
    },
];
