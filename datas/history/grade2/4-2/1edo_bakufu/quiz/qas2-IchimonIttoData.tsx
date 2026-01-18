// 保存用ファイル - qas2.md
// フォルダ: datas/history/grade2/4-2/1edo_bakufu/quiz
// 生成日: 2026-01-16

// タイトル情報（学年・教科）
export const titleData = '中2　歴史';

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
        question: '大名が領地と江戸を\n1年おきに往復する制度は？',
        answer: '参勤交代',
        description: '第3代将軍の徳川家光が制度化し、大名に義務付けた。',
        questionAudio: 'audio/explain/16-1edo_bakufu.wav',
        questionDuration: 101,
        answerAudio: 'audio/explain/17-1edo_bakufu.wav',
        answerDuration: 44,
    },
    {
        id: 'q2',
        question: '天皇や公家を統制する\nために定めた法律は？',
        answer: '禁中並公家諸法度',
        description: '天皇の役割を学問第一と規定し、政治的権力を制限した。',
        questionAudio: 'audio/explain/18-1edo_bakufu.wav',
        questionDuration: 97,
        answerAudio: 'audio/explain/19-1edo_bakufu.wav',
        answerDuration: 67,
    },
    {
        id: 'q3',
        question: '将軍に会える、1万石\n未満の将軍直属の家臣は？',
        answer: '旗本',
        description: '幕府の要職にも就き、将軍を支えた。',
        questionAudio: 'audio/explain/20-1edo_bakufu.wav',
        questionDuration: 125,
        answerAudio: 'audio/explain/21-1edo_bakufu.wav',
        answerDuration: 32,
    },
    {
        id: 'q4',
        question: '江戸幕府に常に\n置かれた最高職は？',
        answer: '老中',
        description: '譜代大名から選ばれ、月番交代で幕政を運営した。',
        questionAudio: 'audio/explain/22-1edo_bakufu.wav',
        questionDuration: 77,
        answerAudio: 'audio/explain/23-1edo_bakufu.wav',
        answerDuration: 32,
    },
    {
        id: 'q5',
        question: '幕府が直接支配した\n土地を何と呼ぶ？',
        answer: '幕領',
        description: '全国の要所に散らばり、合計は約400万石にのぼった。',
        questionAudio: 'audio/explain/24-1edo_bakufu.wav',
        questionDuration: 85,
        answerAudio: 'audio/explain/25-1edo_bakufu.wav',
        answerDuration: 31,
    },
    {
        id: 'q6',
        question: '家康をまつる、日光\nにある有名な建物は？',
        answer: '日光東照宮',
        description: '徳川秀忠が建て、家光が現在の豪華な姿に造りかえた。',
        questionAudio: 'audio/explain/26-1edo_bakufu.wav',
        questionDuration: 102,
        answerAudio: 'audio/explain/27-1edo_bakufu.wav',
        answerDuration: 49,
    },
];
