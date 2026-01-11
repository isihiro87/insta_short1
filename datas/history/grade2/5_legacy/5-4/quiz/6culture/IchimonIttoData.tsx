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
        question: '岡倉天心と協力し、\n日本美術を復興させた人は？',
        answer: 'フェノロサ',
        description: 'アメリカ人。伝統的美術の価値を見直した。',
        questionAudio: 'audio/explain/00-culture.wav',
        questionDuration: 113, // 3.773s
        answerAudio: 'audio/explain/01-culture.wav',
        answerDuration: 34, // 1.144s
    },
    {
        id: 'q2',
        question: '「無我」を描き、近代\n日本画を切り開いた画家は？',
        answer: '横山大観',
        description: '欧米の手法を取り入れた日本画を確立した。',
        questionAudio: 'audio/explain/02-culture.wav',
        questionDuration: 96, // 3.213s
        answerAudio: 'audio/explain/03-culture.wav',
        answerDuration: 45, // 1.488s
    },
    {
        id: 'q3',
        question: '印象派の画風を伝え、\n「読書」を描いた洋画家は？',
        answer: '黒田清輝',
        description: '仏に留学し、明るい画風を日本に紹介した。',
        questionAudio: 'audio/explain/04-culture.wav',
        questionDuration: 110, // 3.669s
        answerAudio: 'audio/explain/05-culture.wav',
        answerDuration: 43, // 1.442s
    },
    {
        id: 'q4',
        question: '「荒城の月」や「花」を\n作曲した人物は？',
        answer: '滝廉太郎',
        description: '日本語に合う洋楽を作り、道を開いた。',
        questionAudio: 'audio/explain/06-culture.wav',
        questionDuration: 102, // 3.402s
        answerAudio: 'audio/explain/07-culture.wav',
        answerDuration: 40, // 1.32s
    },
    {
        id: 'q5',
        question: '話し言葉で文章を書く、\n明治の新しい文体は？',
        answer: '言文一致',
        description: '二葉亭四迷の小説をきっかけに広まった。',
        questionAudio: 'audio/explain/08-culture.wav',
        questionDuration: 102, // 3.4s
        answerAudio: 'audio/explain/09-culture.wav',
        answerDuration: 42, // 1.384s
    },
    {
        id: 'q6',
        question: '「たけくらべ」などを\n執筆した女性小説家は？',
        answer: '樋口一葉',
        description: '個人の感情を重視するロマン主義で活躍した。',
        questionAudio: 'audio/explain/10-culture.wav',
        questionDuration: 97, // 3.229s
        answerAudio: 'audio/explain/11-culture.wav',
        answerDuration: 41, // 1.373s
    },
    {
        id: 'q7',
        question: '「坊っちゃん」などを\n発表した国民的作家は？',
        answer: '夏目漱石',
        description: '欧米文化に向き合う知識人の視点で描いた。',
        questionAudio: 'audio/explain/12-culture.wav',
        questionDuration: 92, // 3.08s
        answerAudio: 'audio/explain/13-culture.wav',
        answerDuration: 45, // 1.493s
    },
    {
        id: 'q8',
        question: '破傷風の血清療法を\n発見した細菌学者は？',
        answer: '北里柴三郎',
        description: '世界的に最先端の研究を行い、業績を残した。',
        questionAudio: 'audio/explain/14-culture.wav',
        questionDuration: 96, // 3.2s
        answerAudio: 'audio/explain/15-culture.wav',
        answerDuration: 52, // 1.733s
    },
    {
        id: 'q9',
        question: '黄熱病を研究し、自らも\n感染して亡くなったのは？',
        answer: '野口英世',
        description: '世界的に活躍し、多くの功績を残した科学者。',
        questionAudio: 'audio/explain/16-culture.wav',
        questionDuration: 102, // 3.402s
        answerAudio: 'audio/explain/17-culture.wav',
        answerDuration: 42, // 1.408s
    },
];
