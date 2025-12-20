// import { SubjectTheme } from './components/rhythm/IchimonIttoBoard';

export interface IchimonIttoScene {
    id: string;
    question: string;
    answer: string;
    description?: string; // Optional explanation
    questionAudio: string;
    questionDuration: number;
    answerAudio: string;
    answerDuration: number;
}

export interface TitleScene {
    title: string;
    audio: string;
    duration: number;
}

export const titleData: TitleScene = {
    title: '中2歴史\n明治維新2',
    audio: 'audio/explain/00-meijiishin2_title.wav',
    duration: 90, // Approx 3s
};

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '1871年に欧米へ派遣\nされた大規模な使節団は？',
        answer: '岩倉使節団',
        description: '岩倉具視を全権大使とし、不平等条約の\n改正交渉などを行った。',
        questionAudio: 'audio/explain/00-meijiishin4.wav',
        questionDuration: 172, // 5.733s
        answerAudio: 'audio/explain/01-meijiishin4.wav',
        answerDuration: 43, // 1.429s
    },
    {
        id: 'q2',
        question: '岩倉使節団に同行した\n当時7歳の最年少留学生は？',
        answer: '津田梅子',
        description: '帰国後、日本の女子教育の発展に\n大きく貢献した。',
        questionAudio: 'audio/explain/02-meijiishin4.wav',
        questionDuration: 126, // 4.203s
        answerAudio: 'audio/explain/03-meijiishin4.wav',
        answerDuration: 37, // 1.235s
    },
    {
        id: 'q3',
        question: '1871年に日本と清が\n結んだ対等な条約は？',
        answer: '日清修好条規',
        description: 'お互いに対等な立場で結ばれた、\n近代日本初の本格的な条約。',
        questionAudio: 'audio/explain/04-meijiishin4.wav',
        questionDuration: 131, // 4.363s
        answerAudio: 'audio/explain/05-meijiishin4.wav',
        answerDuration: 53, // 1.768s
    },
    {
        id: 'q4',
        question: '武力で朝鮮に開国を\nせまろうとする当時の主張は？',
        answer: '征韓論',
        description: '西郷隆盛や板垣退助らが、朝鮮との\n国交拒否を背景に主張した。',
        questionAudio: 'audio/explain/06-meijiishin4.wav',
        questionDuration: 110, // 3.659s
        answerAudio: 'audio/explain/07-meijiishin4.wav',
        answerDuration: 36, // 1.195s
    },
    {
        id: 'q5',
        question: '1875年に朝鮮の首都近く\nで起きた武力衝突事件は？',
        answer: '江華島事件',
        description: '日本の軍艦が朝鮮の沿岸を無断で\n測量したことがきっかけで起きた。',
        questionAudio: 'audio/explain/08-meijiishin4.wav',
        questionDuration: 142, // 4.749s
        answerAudio: 'audio/explain/09-meijiishin4.wav',
        answerDuration: 41, // 1.373s
    },
    {
        id: 'q6',
        question: '江華島事件の翌年日本が\n朝鮮と結んだ条約は？',
        answer: '日朝修好条規',
        description: '朝鮮を開国させたが、日本側に有利な\n不平等条約だった。',
        questionAudio: 'audio/explain/10-meijiishin4.wav',
        questionDuration: 124, // 4.139s
        answerAudio: 'audio/explain/11-meijiishin4.wav',
        answerDuration: 55, // 1.835s
    },
];
