// 保存用ファイル - qas.md
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
        question: 'CPUと主記憶の速度差を吸収するためのメモリは？',
        answer: 'キャッシュメモリ',
        description: '高速なSRAMを使用し、CPUの待ち時間を減らします。',
        questionAudio: 'audio/explain/00-cache_memory.wav',
        questionDuration: 111,
        answerAudio: 'audio/explain/01-cache_memory.wav',
        answerDuration: 38,
    },
    {
        id: 'q2',
        question: 'キャッシュメモリに\nデータが存在する確率を何という？',
        answer: 'ヒット率',
        description: 'この値が高いほど、高速なメモリから読み出せる効率が上がります。',
        questionAudio: 'audio/explain/02-cache_memory.wav',
        questionDuration: 97,
        answerAudio: 'audio/explain/03-cache_memory.wav',
        answerDuration: 34,
    },
    {
        id: 'q3',
        question: 'データが主記憶に\n存在する確率は？',
        answer: 'NFP（Not Found Probability）',
        description: '1からヒット率を引いた値で、主記憶へのアクセス頻度を示します。',
        questionAudio: 'audio/explain/04-cache_memory.wav',
        questionDuration: 78,
        answerAudio: 'audio/explain/05-cache_memory.wav',
        answerDuration: 35,
    },
    {
        id: 'q4',
        question: 'キャッシュと主記憶の\n両方に同時に書き込む方式は？',
        answer: 'ライトスルー方式',
        description: 'データの一貫性は保たれますが、書き込み速度は低速です。',
        questionAudio: 'audio/explain/06-cache_memory.wav',
        questionDuration: 101,
        answerAudio: 'audio/explain/07-cache_memory.wav',
        answerDuration: 50,
    },
    {
        id: 'q5',
        question: 'キャッシュのみ書き込み\n後で主記憶へ反映する方式は？',
        answer: 'ライトバック方式',
        description: '主記憶へのアクセス回数が減るため、処理が高速になります。',
        questionAudio: 'audio/explain/08-cache_memory.wav',
        questionDuration: 123,
        answerAudio: 'audio/explain/09-cache_memory.wav',
        answerDuration: 49,
    },
];
