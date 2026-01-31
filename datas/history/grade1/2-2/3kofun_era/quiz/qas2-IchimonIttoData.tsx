// 保存用ファイル - qas2.md
// フォルダ: datas/history/grade1/2-2/3kofun_era/quiz
// 生成日: 2026-01-28

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
        question: '堺市にある日本最大級の\n前方後円墳は？',
        answer: '大仙古墳',
        description: '仁徳天皇の墓と伝えられ、全長約486mの非常に大きな古墳である。',
        questionAudio: 'audio/explain/14-3kofun_era.wav',
        questionDuration: 106,
        answerAudio: 'audio/explain/15-3kofun_era.wav',
        answerDuration: 39,
    },
    {
        id: 'q2',
        question: '渡来人が6世紀半ばに\n日本へ伝えた宗教は？',
        answer: '仏教',
        description: '百済から伝えられ、日本の文化や政治に大きな影響を与えた。',
        questionAudio: 'audio/explain/16-3kofun_era.wav',
        questionDuration: 104,
        answerAudio: 'audio/explain/17-3kofun_era.wav',
        answerDuration: 31,
    },
    {
        id: 'q3',
        question: '鉄の原料を輸入していた\n朝鮮半島の地域は？',
        answer: '伽耶地域',
        description: '日本では任那(みまな)とも呼ばれ、鉄資源の供給地として重要だった。',
        questionAudio: 'audio/explain/18-3kofun_era.wav',
        questionDuration: 99,
        answerAudio: 'audio/explain/19-3kofun_era.wav',
        answerDuration: 37,
    },
    {
        id: 'q4',
        question: '稲荷山古墳の鉄剣に\n刻まれた大王の名は？',
        answer: 'ワカタケル大王',
        description: '中国の歴史書に記された「武」と同一人物と考えられています。',
        questionAudio: 'audio/explain/20-3kofun_era.wav',
        questionDuration: 94,
        answerAudio: 'audio/explain/21-3kofun_era.wav',
        answerDuration: 49,
    },
    {
        id: 'q5',
        question: '渡来人が書類作成や\n記録のために伝えた文字は？',
        answer: '漢字',
        description: '中国の歴史書に記された「武」と同一人物と考えられている。',
        questionAudio: 'audio/explain/22-3kofun_era.wav',
        questionDuration: 103,
        answerAudio: 'audio/explain/23-3kofun_era.wav',
        answerDuration: 26,
    },
    {
        id: 'q6',
        question: '倭の五王の活動が記録\nされている中国の歴史書は？',
        answer: '宋書',
        description: '武が自らの祖先の功績を述べた文書を皇帝に送ったことが記されている。',
        questionAudio: 'audio/explain/24-3kofun_era.wav',
        questionDuration: 108,
        answerAudio: 'audio/explain/25-3kofun_era.wav',
        answerDuration: 31,
    },
];
