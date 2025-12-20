import { VideoScenario } from '../types/VideoPatterns';

export const industryRevScenario: VideoScenario = {
    id: 'industry-revolution',
    bgm: 'audio/Musunde_child.mp3',
    scenes: [
        // Scene 1: Intro (00-01)
        {
            id: 'scene-1-intro',
            type: 'intro',
            durationInFrames: 40 + 153 + 20, // Sum + buffer
            background: 'black',
            backgroundImage: 'images/industry_01_intro.png',
            backgroundImageStyle: { objectFit: 'contain' },
            title: '中2歴史',
            subtitle: '産業革命',
            audio: [
                { src: 'audio/explain/00-indut_rev.wav', durationInFrames: 40 },
                { src: 'audio/explain/01-indut_rev.wav', durationInFrames: 153 }
            ],
            impactText: [
                {
                    text: '朝3時から夜10時まで!?',
                    startFrame: 60,
                    style: {
                        fontSize: '110px', // 90 -> 110
                        color: 'red',
                        fontFamily: 'Reggae One',
                        top: '60%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) rotate(-5deg)',
                        textShadow: '3px 3px 0px white',
                        width: '90%',
                        textAlign: 'center'
                    }
                }
            ]
        },
        // Scene 2: Tech (02-06)
        {
            id: 'scene-2-tech',
            type: 'story',
            durationInFrames: 66 + 54 + 36 + 102 + 105 + 20,
            background: '#f0e9d6',
            audio: [
                { src: 'audio/explain/02-indut_rev.wav', durationInFrames: 66 },
                { src: 'audio/explain/03-indut_rev.wav', durationInFrames: 54 },
                { src: 'audio/explain/04-indut_rev.wav', durationInFrames: 36 },
                { src: 'audio/explain/05-indut_rev.wav', durationInFrames: 102 },
                { src: 'audio/explain/06-indut_rev.wav', durationInFrames: 105 }
            ],
            images: [
                { src: 'images/industry_02_watt.png', startFrame: 0, duration: 66 + 54, style: { objectFit: 'contain' } },
                { src: 'images/industry_03_steam.png', startFrame: 66 + 54, style: { objectFit: 'contain' } }
            ],
            texts: [
                { text: '世界が変わったきっかけ', startFrame: 10, fontSize: 72, y: -150 }, // 60 -> 72
                { text: 'ワットの改良', startFrame: 66 + 10, fontSize: 96, y: -50 }, // 80 -> 96
                { text: '蒸気機関', startFrame: 66 + 54, duration: 36 + 102 + 105, fontSize: 144, color: 'gold', y: 50 }, // 120 -> 144
                { text: '安く・大量に！', startFrame: 66 + 54 + 36 + 10, fontSize: 120, color: 'white', y: 250 } // 100 -> 120
            ]
        },
        // Scene 3: Terms (07-09)
        {
            id: 'scene-3-terms',
            type: 'story',
            durationInFrames: 102 + 111 + 75 + 20,
            background: '#f0e9d6',
            audio: [
                { src: 'audio/explain/07-indut_rev.wav', durationInFrames: 102 },
                { src: 'audio/explain/08-indut_rev.wav', durationInFrames: 111 },
                { src: 'audio/explain/09-indut_rev.wav', durationInFrames: 75 }
            ],
            images: [
                { src: 'images/industry_04_factory.png', startFrame: 0, style: { objectFit: 'contain' } }
            ],
            texts: [
                { text: '綿織物が爆発的増加', startFrame: 10, fontSize: 84, y: -150 }, // 70 -> 84
                { text: '工場制機械工業', startFrame: 102 + 10, fontSize: 108, color: 'yellow', fontFamily: 'Reggae One', y: 0 }, // 90 -> 108
                { text: '超重要ワード！', startFrame: 102 + 111, fontSize: 96, color: 'red', rotate: 10, y: 200 } // 80 -> 96
            ]
        },
        // Scene 4: Social (10-15)
        {
            id: 'scene-4-social',
            type: 'story',
            durationInFrames: 78 + 93 + 72 + 72 + 60 + 81 + 20,
            background: '#f0e9d6',
            audio: [
                { src: 'audio/explain/10-indut_rev.wav', durationInFrames: 78 },
                { src: 'audio/explain/11-indut_rev.wav', durationInFrames: 93 },
                { src: 'audio/explain/12-indut_rev.wav', durationInFrames: 72 },
                { src: 'audio/explain/13-indut_rev.wav', durationInFrames: 72 },
                { src: 'audio/explain/14-indut_rev.wav', durationInFrames: 60 },
                { src: 'audio/explain/15-indut_rev.wav', durationInFrames: 81 }
            ],
            images: [
                { src: 'images/industry_05_capitalist.png', startFrame: 0, duration: 78 + 93, style: { objectFit: 'contain' } },
                { src: 'images/industry_06_social_gap.png', startFrame: 78 + 93, style: { objectFit: 'contain' } }
            ],
            texts: [
                { text: '格差の誕生', startFrame: 10, fontSize: 96, y: -200 }, // 80 -> 96
                { text: '資本家 (金持ち)', startFrame: 78 + 10, fontSize: 96, x: -150, y: -50, color: '#fdd' }, // 80 -> 96
                { text: '労働者 (雇われる)', startFrame: 78 + 93 + 10, fontSize: 96, x: 150, y: 50, color: '#ddf' }, // 80 -> 96
                { text: '利益が第一！', startFrame: 78 + 93 + 72 + 72 + 10, fontSize: 108, color: 'gold', y: 200 }, // 90 -> 108
                { text: '『資本主義』', startFrame: 78 + 93 + 72 + 72 + 60 + 10, fontSize: 156, color: 'red', fontFamily: 'Reggae One' } // 130 -> 156
            ]
        },
        // Scene 5: Conclusion (16-18)
        {
            id: 'scene-5-conclusion',
            type: 'story',
            durationInFrames: 120 + 96 + 96 + 60,
            background: '#f0e9d6',
            audio: [
                { src: 'audio/explain/16-indut_rev.wav', durationInFrames: 120 },
                { src: 'audio/explain/17-indut_rev.wav', durationInFrames: 96 },
                { src: 'audio/explain/18-indut_rev.wav', durationInFrames: 96 }
            ],
            images: [
                { src: 'images/industry_07_world_factory.png', startFrame: 0, style: { objectFit: 'contain' } }
            ],
            texts: [
                { text: 'イギリス無双', startFrame: 10, fontSize: 120, y: -150 }, // 100 -> 120
                { text: '『世界の工場』', startFrame: 120 + 10, fontSize: 132, color: 'gold', fontFamily: 'Reggae One' }, // 110 -> 132
                { text: '今の生活の原点', startFrame: 120 + 96 + 10, fontSize: 96, y: 200 } // 80 -> 96
            ]
        }
    ]
};
