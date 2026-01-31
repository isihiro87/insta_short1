// 保存用ファイル - qas.md
// フォルダ: datas/history/grade2/4-3/4kyoho_reform/quiz
// 生成日: 2026-01-30

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
        question: '江戸幕府の\n第8代将軍は誰？',
        answer: '徳川吉宗',
        description: '紀伊徳川家出身で、新田開発や倹約を進め、幕政の立て直しを行った。',
        questionAudio: 'audio/explain/00-4kyoho_reform.wav',
        questionDuration: 73,
        answerAudio: 'audio/explain/01-4kyoho_reform.wav',
        answerDuration: 45,
    },
    {
        id: 'q2',
        question: '徳川吉宗が行った\n幕政の改革の名前は？',
        answer: '享保の改革',
        description: '1716年に始まり、幕府の財政立て直しを目的とした改革。',
        questionAudio: 'audio/explain/02-4kyoho_reform.wav',
        questionDuration: 99,
        answerAudio: 'audio/explain/03-4kyoho_reform.wav',
        answerDuration: 51,
    },
    {
        id: 'q3',
        question: '米価の安定に苦心した\n吉宗は何と呼ばれた？',
        answer: '米将軍',
        description: '米の価格安定を図り、武士の生活の安定を目指した。',
        questionAudio: 'audio/explain/04-4kyoho_reform.wav',
        questionDuration: 100,
        answerAudio: 'audio/explain/05-4kyoho_reform.wav',
        answerDuration: 38,
    },
    {
        id: 'q4',
        question: '参勤交代の負担を減らす代わりに米を納めさせた制度は？',
        answer: '上げ米の制',
        description: '大名に1万石につき100石の米を納めさせ、幕府財政の回復を図った。',
        questionAudio: 'audio/explain/06-4kyoho_reform.wav',
        questionDuration: 120,
        answerAudio: 'audio/explain/07-4kyoho_reform.wav',
        answerDuration: 40,
    },
    {
        id: 'q5',
        question: '1742年に制定された\n裁判の基準となる法律は？',
        answer: '公事方御定書',
        description: '過去の判例をまとめ、裁判の公正化と迅速化を目的として制定された。',
        questionAudio: 'audio/explain/08-4kyoho_reform.wav',
        questionDuration: 126,
        answerAudio: 'audio/explain/09-4kyoho_reform.wav',
        answerDuration: 51,
    },
    {
        id: 'q6',
        question: '民衆の意見を聞くために\n設置された投書箱は？',
        answer: '目安箱',
        description: '庶民の意見を政策に反映させ、小石川養生所や町火消しの設置などにつながった。',
        questionAudio: 'audio/explain/10-4kyoho_reform.wav',
        questionDuration: 95,
        answerAudio: 'audio/explain/11-4kyoho_reform.wav',
        answerDuration: 38,
    },
];
