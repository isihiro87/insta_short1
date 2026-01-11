// 保存用ファイル - qas2.md
// フォルダ: datas/history/grade3/6-1/3versailles
// 生成日: 2026-01-11

// タイトル情報（学年・教科）
export const titleData = '中3　歴史';

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
        question: '1919年に制定された\nドイツの民主的な憲法は？',
        answer: 'ワイマール憲法',
        description: '生存権（社会権）や男女普通選挙を世界で初めて認めた憲法。',
        questionAudio: 'audio/explain/10-3versailles.wav',
        questionDuration: 125,
        answerAudio: 'audio/explain/11-3versailles.wav',
        answerDuration: 45,
    },
    {
        id: 'q2',
        question: '1921年からの会議で結ばれた\n海軍の軍制限は？',
        answer: 'ワシントン海軍軍縮条約',
        description: '主力艦の保有比率を定め、太平洋の現状維持を確認した条約。',
        questionAudio: 'audio/explain/12-3versailles.wav',
        questionDuration: 128,
        answerAudio: 'audio/explain/13-3versailles.wav',
        answerDuration: 69,
    },
    {
        id: 'q3',
        question: '国際連盟の本部が\n置かれた都市は？',
        answer: 'ジュネーブ',
        description: '永世中立国であるスイスに位置し、国際協力の中心拠点となった。',
        questionAudio: 'audio/explain/14-3versailles.wav',
        questionDuration: 72,
        answerAudio: 'audio/explain/15-3versailles.wav',
        answerDuration: 32,
    },
    {
        id: 'q4',
        question: 'ワシントン会議の結果、\n解消された日本の関係は？',
        answer: '日英同盟',
        description: 'アメリカの意向もあり、太平洋地域での勢力均衡のために廃止された。',
        questionAudio: 'audio/explain/16-3versailles.wav',
        questionDuration: 116,
        answerAudio: 'audio/explain/17-3versailles.wav',
        answerDuration: 42,
    },
    {
        id: 'q5',
        question: '国際連盟で日本が\n就いた重要な役職は？',
        answer: '常任理事国',
        description: 'イギリス・フランス・イタリアと共に、世界の指導的な立場を担った。',
        questionAudio: 'audio/explain/18-3versailles.wav',
        questionDuration: 93,
        answerAudio: 'audio/explain/19-3versailles.wav',
        answerDuration: 44,
    },
];
