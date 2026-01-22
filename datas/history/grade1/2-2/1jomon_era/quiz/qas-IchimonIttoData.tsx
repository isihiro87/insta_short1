// 保存用ファイル - qas.md
// フォルダ: datas/history/grade1/2-2/1jomon_era/quiz
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
        question: '表面に縄目のような\n文様がある土器の名前は？',
        answer: '縄文土器',
        description: '低温で焼かれたため黒褐色で厚手のものが多い。',
        questionAudio: 'audio/explain/00-1jomon_era.wav',
        questionDuration: 93,
        answerAudio: 'audio/explain/01-1jomon_era.wav',
        answerDuration: 40,
    },
    {
        id: 'q2',
        question: '打製石器を使い移動\nしながら生活したのは何時代？',
        answer: '旧石器時代',
        description: 'マンモスなどの大型動物を追って、人々は移動しながら生活していた。',
        questionAudio: 'audio/explain/02-1jomon_era.wav',
        questionDuration: 110,
        answerAudio: 'audio/explain/03-1jomon_era.wav',
        answerDuration: 44,
    },
    {
        id: 'q3',
        question: '1万数千年前から土器\nを使い始めた時代名は？',
        answer: '縄文時代',
        description: '温暖化により海面が上昇し、現在の日本列島の形になった。',
        questionAudio: 'audio/explain/04-1jomon_era.wav',
        questionDuration: 107,
        answerAudio: 'audio/explain/05-1jomon_era.wav',
        answerDuration: 37,
    },
    {
        id: 'q4',
        question: '縄文人が地面を掘り\n柱を立てて造った家は？',
        answer: 'たて穴住居',
        description: '食料を得やすい場所に集まり、定住するようになった。',
        questionAudio: 'audio/explain/06-1jomon_era.wav',
        questionDuration: 100,
        answerAudio: 'audio/explain/07-1jomon_era.wav',
        answerDuration: 43,
    },
    {
        id: 'q5',
        question: '食べ終わった後の貝殻や\n魚の骨を捨てた場所は？',
        answer: '貝塚',
        description: '当時の人々の食べ物や生活を知る貴重な資料となる。',
        questionAudio: 'audio/explain/08-1jomon_era.wav',
        questionDuration: 102,
        answerAudio: 'audio/explain/09-1jomon_era.wav',
        answerDuration: 32,
    },
    {
        id: 'q6',
        question: '祈りや魔よけのために\n作られた土の人形は？',
        answer: '土偶',
        description: '女性をかたどったものが多く、豊かな収穫や安産を祈ったとされる。',
        questionAudio: 'audio/explain/10-1jomon_era.wav',
        questionDuration: 88,
        answerAudio: 'audio/explain/11-1jomon_era.wav',
        answerDuration: 29,
    },
];
