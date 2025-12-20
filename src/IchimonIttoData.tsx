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
    title: '中2歴史\n明治時代の国境',
    audio: 'audio/explain/00-meijiishin2_title.wav',
    duration: 90, // Approx 3s
};

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '1869年に蝦夷地から\n改称された地名は？',
        answer: '北海道',
        description: '開拓使が置かれ、\n開発が進められた。',
        questionAudio: 'audio/explain/00-kokkyou.wav',
        questionDuration: 172, // 5.714s
        answerAudio: 'audio/explain/01-kokkyou.wav',
        answerDuration: 36, // 1.173s
    },
    {
        id: 'q2',
        question: '北海道の開拓と北方の\n警備を担った兵士は？',
        answer: '屯田兵',
        description: '農業をしながら\n訓練を受けた人々。',
        questionAudio: 'audio/explain/02-kokkyou.wav',
        questionDuration: 105, // 3.498s
        answerAudio: 'audio/explain/03-kokkyou.wav',
        answerDuration: 36, // 1.189s
    },
    {
        id: 'q3',
        question: '1875年にロシアと\n結んだ領土の条約は？',
        answer: '樺太・千島交換条約',
        description: '千島を日本領、\n樺太をロシア領とした。',
        questionAudio: 'audio/explain/04-kokkyou.wav',
        questionDuration: 114, // 3.789s
        answerAudio: 'audio/explain/05-kokkyou.wav',
        answerDuration: 77, // 2.549s
    },
    {
        id: 'q4',
        question: '1876年に領有が確定した\n太平洋の島々は？',
        answer: '小笠原諸島',
        description: '政府が領有を宣言し\n欧米に通告した。',
        questionAudio: 'audio/explain/06-kokkyou.wav',
        questionDuration: 131, // 4.354s
        answerAudio: 'audio/explain/07-kokkyou.wav',
        answerDuration: 42, // 1.394s
    },
    {
        id: 'q5',
        question: '1879年に琉球藩を\n廃止して置かれた県は？',
        answer: '沖縄県',
        description: 'これに抗議する清と\n対立が生じた。',
        questionAudio: 'audio/explain/08-kokkyou.wav',
        questionDuration: 122, // 4.058s
        answerAudio: 'audio/explain/09-kokkyou.wav',
        answerDuration: 34, // 1.104s
    },
    {
        id: 'q6',
        question: '琉球を日本領に組み込んだ\n一連の過程は？',
        answer: '琉球処分',
        description: '軍隊の力を背景に\n沖縄県を設置した。',
        questionAudio: 'audio/explain/10-kokkyou.wav',
        questionDuration: 91, // 3.024s
        answerAudio: 'audio/explain/11-kokkyou.wav',
        answerDuration: 40, // 1.333s
    },
    {
        id: 'q7',
        question: '歯舞・色丹・国後・\n択捉の4島の総称は？',
        answer: '北方領土',
        description: '日本固有の領土だが\nロシアが不法占拠。',
        questionAudio: 'audio/explain/12-kokkyou.wav',
        questionDuration: 139, // 4.602s
        answerAudio: 'audio/explain/13-kokkyou.wav',
        answerDuration: 40, // 1.333s
    },
];
