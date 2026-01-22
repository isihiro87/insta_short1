// 保存用ファイル - qas.md
// フォルダ: datas/fe_contents/computer_components/address_mode
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
        question: '命令のアドレス部をもとに、処理対象データのある場所を求める方式は？',
        answer: 'アドレス指定方式',
        description: '命令のアドレス部から、実効アドレスを求める方法の総称です。',
        questionAudio: 'audio/explain/00-address_mode.wav',
        questionDuration: 145,
        answerAudio: 'audio/explain/01-address_mode.wav',
        answerDuration: 52,
    },
    {
        id: 'q2',
        question: '計算によって求められた\n最終的なアドレスを何という？',
        answer: '実効アドレス',
        description: '命令のアドレス部をもとに計算して得られる、実際に参照される番地です。',
        questionAudio: 'audio/explain/02-address_mode.wav',
        questionDuration: 109,
        answerAudio: 'audio/explain/03-address_mode.wav',
        answerDuration: 44,
    },
    {
        id: 'q3',
        question: 'アドレス部にデータ\nそのものが入っている方式は？',
        answer: '即値アドレス指定方式',
        description: 'データそのものが命令に含まれるため、データを取り出すためのメモリ参照が不要です。',
        questionAudio: 'audio/explain/04-address_mode.wav',
        questionDuration: 87,
        answerAudio: 'audio/explain/05-address_mode.wav',
        answerDuration: 66,
    },
    {
        id: 'q4',
        question: 'アドレス部の値が\nそのまま実効アドレスとなる方式は？',
        answer: '直接アドレス指定方式',
        description: '指定された番地を直接参照してデータを取り出す方式です。',
        questionAudio: 'audio/explain/06-address_mode.wav',
        questionDuration: 104,
        answerAudio: 'audio/explain/07-address_mode.wav',
        answerDuration: 67,
    },
    {
        id: 'q5',
        question: '指定番地にある値が\n次のアドレスを示す方式は？',
        answer: '間接アドレス指定方式',
        description: 'アドレス取得・データ参照の二段階の手順を踏んでデータにアクセスする方式です。',
        questionAudio: 'audio/explain/08-address_mode.wav',
        questionDuration: 106,
        answerAudio: 'audio/explain/09-address_mode.wav',
        answerDuration: 66,
    },
    {
        id: 'q6',
        question: 'アドレス部の値と\nプログラムカウンタを足す方式は？',
        answer: '相対アドレス指定方式',
        description: 'プログラムカウンタの値を基準に、相対的な位置で場所を特定します。',
        questionAudio: 'audio/explain/10-address_mode.wav',
        questionDuration: 94,
        answerAudio: 'audio/explain/11-address_mode.wav',
        answerDuration: 67,
    },
    {
        id: 'q7',
        question: 'アドレス部の値と\n指標レジスタの和を用いる方式は？',
        answer: '指標アドレス指定方式',
        description: '配列のような連続したデータを順番に処理するのに適します。',
        questionAudio: 'audio/explain/12-address_mode.wav',
        questionDuration: 105,
        answerAudio: 'audio/explain/13-address_mode.wav',
        answerDuration: 63,
    },
    {
        id: 'q8',
        question: 'アドレス部の値と\n基底レジスタの和を用いる方式は？',
        answer: '基底アドレス指定方式',
        description: 'プログラムの開始位置が変わっても、基底レジスタの値を変えることで正しく実行できる方式です。',
        questionAudio: 'audio/explain/14-address_mode.wav',
        questionDuration: 105,
        answerAudio: 'audio/explain/15-address_mode.wav',
        answerDuration: 63,
    },
];
