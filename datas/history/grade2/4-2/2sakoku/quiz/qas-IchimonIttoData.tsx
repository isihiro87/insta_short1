// 保存用ファイル - qas.md
// フォルダ: datas/history/grade2/4-2/2sakoku/quiz
// 生成日: 2026-01-17

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
        question: '江戸幕府が外国との\n交流を厳しく制限した政策を何という?',
        answer: '鎖国',
        description: '19世紀初めにこの言葉が使われるようになり、定着した。',
        questionAudio: 'audio/explain/00-2sakoku.wav',
        questionDuration: 132,
        answerAudio: 'audio/explain/01-2sakoku.wav',
        answerDuration: 33,
    },
    {
        id: 'q2',
        question: '幕府が海外渡航を\n許可した船に与えた証明書は？',
        answer: '朱印状',
        description: '渡航船の安全を保障し、偽物の船を排除するために用いられた。',
        questionAudio: 'audio/explain/02-2sakoku.wav',
        questionDuration: 109,
        answerAudio: 'audio/explain/03-2sakoku.wav',
        answerDuration: 37,
    },
    {
        id: 'q3',
        question: '朱印状を持って東南\nアジアで行われたのは何貿易？',
        answer: '朱印船貿易',
        description: '日本からは銀を輸出し、生糸や絹織物などを輸入した。',
        questionAudio: 'audio/explain/04-2sakoku.wav',
        questionDuration: 109,
        answerAudio: 'audio/explain/05-2sakoku.wav',
        answerDuration: 47,
    },
    {
        id: 'q4',
        question: '東南アジアに移住した\n日本人が作った集落は？',
        answer: '日本町',
        description: 'タイのアユタヤなどが代表的で、多くの日本人が生活した。',
        questionAudio: 'audio/explain/06-2sakoku.wav',
        questionDuration: 109,
        answerAudio: 'audio/explain/07-2sakoku.wav',
        answerDuration: 35,
    },
    {
        id: 'q5',
        question: '禁教を徹底するため\n人々を寺に登録させた制度を何という？',
        answer: '宗門改',
        description: '家族全員の宗派を宗門改帳に記録して厳しく管理した。',
        questionAudio: 'audio/explain/08-2sakoku.wav',
        questionDuration: 147,
        answerAudio: 'audio/explain/09-2sakoku.wav',
        answerDuration: 44,
    },
    {
        id: 'q6',
        question: '1612年に家康が\n幕領に対して出した命令は？',
        answer: '禁教令',
        description: '翌年には全国へと拡大され、キリスト教の弾圧が本格化した。',
        questionAudio: 'audio/explain/10-2sakoku.wav',
        questionDuration: 120,
        answerAudio: 'audio/explain/11-2sakoku.wav',
        answerDuration: 35,
    },
    {
        id: 'q7',
        question: '1637年に九州で起こった\n大規模な反乱を何という？',
        answer: '島原・天草一揆',
        description: '重税と迫害に苦しんだ人々が天草四郎を大将に蜂起した。',
        questionAudio: 'audio/explain/12-2sakoku.wav',
        questionDuration: 137,
        answerAudio: 'audio/explain/13-2sakoku.wav',
        answerDuration: 66,
    },
    {
        id: 'q8',
        question: '長崎に置かれた\n中国人の居住地区は？',
        answer: '唐人屋敷',
        description: '密貿易の防止と監視のため、清の商人を集めて住まわせました。',
        questionAudio: 'audio/explain/14-2sakoku.wav',
        questionDuration: 86,
        answerAudio: 'audio/explain/15-2sakoku.wav',
        answerDuration: 40,
    },
];
