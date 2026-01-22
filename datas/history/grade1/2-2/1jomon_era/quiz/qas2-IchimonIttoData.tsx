// 保存用ファイル - qas2.md
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
        question: '日本が大陸と陸続き\nだった寒い時期を何という？',
        answer: '氷期',
        description: '海面が現在より100m以上低く動物も大陸から渡ることができた。',
        questionAudio: 'audio/explain/12-1jomon_era.wav',
        questionDuration: 104,
        answerAudio: 'audio/explain/13-1jomon_era.wav',
        answerDuration: 29,
    },
    {
        id: 'q2',
        question: '石器の材料として重宝\nされた黒いガラス質の石の名前は？',
        answer: '黒曜石',
        description: '原産地から100km以上離れた場所でも見つかっている。',
        questionAudio: 'audio/explain/14-1jomon_era.wav',
        questionDuration: 124,
        answerAudio: 'audio/explain/15-1jomon_era.wav',
        answerDuration: 39,
    },
    {
        id: 'q3',
        question: 'ナウマンゾウの化石が\n発見された長野県の湖は？',
        answer: '野尻湖',
        description: 'オオツノジカの化石も同じ地層から発見されている。',
        questionAudio: 'audio/explain/16-1jomon_era.wav',
        questionDuration: 102,
        answerAudio: 'audio/explain/17-1jomon_era.wav',
        answerDuration: 34,
    },
    {
        id: 'q4',
        question: '死者の手足を折り曲げて\n埋葬する方法は？',
        answer: '屈葬',
        description: '縄文時代に広く行われ、死者の霊を恐れたためと考えられている埋葬法。',
        questionAudio: 'audio/explain/18-1jomon_era.wav',
        questionDuration: 85,
        answerAudio: 'audio/explain/19-1jomon_era.wav',
        answerDuration: 31,
    },
    {
        id: 'q5',
        question: '旧石器時代の石器の材料となった香川県の石は？',
        answer: 'サヌカイト',
        description: '黒曜石と同様に、鋭い刃をもつ石器の材料として用いられた。',
        questionAudio: 'audio/explain/20-1jomon_era.wav',
        questionDuration: 110,
        answerAudio: 'audio/explain/21-1jomon_era.wav',
        answerDuration: 36,
    },
    {
        id: 'q6',
        question: '氷河時代に大陸から渡ってきた長い毛を持つゾウは？',
        answer: 'マンモス',
        description: '寒冷な気候に適応し、全身に長い毛を持つゾウの仲間。',
        questionAudio: 'audio/explain/22-1jomon_era.wav',
        questionDuration: 103,
        answerAudio: 'audio/explain/23-1jomon_era.wav',
        answerDuration: 32,
    },
];
