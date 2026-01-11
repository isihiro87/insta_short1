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

export const ichimonIttoData: IchimonIttoScene[] = [
    {
        id: 'q1',
        question: '14世紀にイタリアで始まった文芸復興は？',
        answer: 'ルネサンス',
        description: '古代ギリシャ・ローマの文化を再生した。',
        questionAudio: 'audio/explain/00-europe_change.wav',
        questionDuration: 94, // 3.133s
        answerAudio: 'audio/explain/01-europe_change.wav',
        answerDuration: 37, // 1.219s
    },
    {
        id: 'q2',
        question: '教皇が販売した、\n罪が許されるとする札は？',
        answer: '免罪符（贖宥状）',
        description: '宗教改革のきっかけ。教会の資金集め。',
        questionAudio: 'audio/explain/02-europe_change.wav',
        questionDuration: 108, // 3.603s
        answerAudio: 'audio/explain/03-europe_change.wav',
        answerDuration: 62, // 2.064s
    },
    {
        id: 'q3',
        question: '16世紀にルターらが\n始めた教会の改革は？',
        answer: '宗教改革',
        description: '聖書を信仰の中心に置くことを主張した。',
        questionAudio: 'audio/explain/04-europe_change.wav',
        questionDuration: 102, // 3.389s
        answerAudio: 'audio/explain/05-europe_change.wav',
        answerDuration: 48, // 1.589s
    },
    {
        id: 'q4',
        question: '聖書を重視し\n教皇に抗議した新教徒は？',
        answer: 'プロテスタント',
        description: '聖書を自分で読み理解することを重視した。',
        questionAudio: 'audio/explain/06-europe_change.wav',
        questionDuration: 96, // 3.213s
        answerAudio: 'audio/explain/07-europe_change.wav',
        answerDuration: 42, // 1.389s
    },
    {
        id: 'q5',
        question: '海外布教のため\nカトリックが作った組織は？',
        answer: 'イエズス会',
        description: 'ザビエルを派遣。アジアなどで布教した。',
        questionAudio: 'audio/explain/08-europe_change.wav',
        questionDuration: 88, // 2.933s
        answerAudio: 'audio/explain/09-europe_change.wav',
        answerDuration: 31, // 1.029s
    },
    {
        id: 'q6',
        question: '遠洋航海を可能にした、\n方位を示す道具は？',
        answer: '羅針盤',
        description: '三大発明の一つ。中国から伝わり実用化。',
        questionAudio: 'audio/explain/10-europe_change.wav',
        questionDuration: 104, // 3.464s
        answerAudio: 'audio/explain/11-europe_change.wav',
        answerDuration: 34, // 1.128s
    },
    {
        id: 'q7',
        question: '知識の普及を助けた、\n文字の印刷技術は？',
        answer: '活版印刷',
        description: '本の製作費を下げ、聖書の普及を助けた。',
        questionAudio: 'audio/explain/12-europe_change.wav',
        questionDuration: 103, // 3.448s
        answerAudio: 'audio/explain/13-europe_change.wav',
        answerDuration: 45, // 1.509s
    },
];
