// 保存用ファイル - qas2.md
// フォルダ: datas/fe_contents/computer_components/cache_memory
// 生成日: 2026-01-22

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
        question: '主記憶を複数の区画に\n分け並列アクセスする技術は？',
        answer: 'メモリインタリーブ',
        description: 'バンクと呼ばれる単位に分け、連続データの転送を速めます。',
        questionAudio: 'audio/explain/10-cache_memory.wav',
        questionDuration: 112,
        answerAudio: 'audio/explain/11-cache_memory.wav',
        answerDuration: 46,
    },
    {
        id: 'q2',
        question: 'エラー訂正機能を持つ\nメモリの呼び名は？',
        answer: 'ECCメモリ',
        description: 'データの誤りを検出し、自動的に修復できるメモリです。',
        questionAudio: 'audio/explain/12-cache_memory.wav',
        questionDuration: 75,
        answerAudio: 'audio/explain/13-cache_memory.wav',
        answerDuration: 44,
    },
    {
        id: 'q3',
        question: 'ECCメモリで使われる\n誤り訂正符号の名前は？',
        answer: 'ハミング符号',
        description: '1ビットの誤りを訂正し、2ビットの誤りを検出可能です。',
        questionAudio: 'audio/explain/14-cache_memory.wav',
        questionDuration: 105,
        answerAudio: 'audio/explain/15-cache_memory.wav',
        answerDuration: 41,
    },
    {
        id: 'q4',
        question: '紫外線を使ってデータの\n一括消去を行うROMは？',
        answer: 'UV-EPROM',
        description: '専用の装置で光を当てることで、何度でも書き換えられます。',
        questionAudio: 'audio/explain/16-cache_memory.wav',
        questionDuration: 100,
        answerAudio: 'audio/explain/17-cache_memory.wav',
        answerDuration: 59,
    },
    {
        id: 'q5',
        question: '電気的にデータの消去・\n書き換えができるROMは？',
        answer: 'EEPROM',
        description: '電圧をかけることで、バイト単位での部分消去が可能です。',
        questionAudio: 'audio/explain/18-cache_memory.wav',
        questionDuration: 99,
        answerAudio: 'audio/explain/19-cache_memory.wav',
        answerDuration: 43,
    },
];
