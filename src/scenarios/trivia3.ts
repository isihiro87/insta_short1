import { VideoScenario } from '../types/VideoPatterns';
import { generateStoryScene } from '../utils/scenarioHelper';

export const trivia3Scenario: VideoScenario = {
    id: 'trivia3',
    bgm: 'audio/Musunde_child.mp3',
    scenes: [
        // Scene 1: Intro (00-01) - Keeping Intro Pattern as is
        {
            id: 'scene-1-intro',
            type: 'intro',
            durationInFrames: 40 + 153 + 20,
            background: 'black',
            backgroundImage: 'images/desk_back.png',
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
                        fontSize: '110px',
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
        generateStoryScene(
            'scene-2-tech',
            'images/indus_rev1.png',
            [
                // Group 1
                [
                    { audio: '02-indut_rev.wav', text: '世界が変わったきっかけは、' },
                    { audio: '03-indut_rev.wav', text: 'ワットが改良した' }
                ],
                // Group 2
                [
                    { audio: '04-indut_rev.wav', text: '『蒸気機関』！' }
                ],
                // Group 3
                [
                    { audio: '05-indut_rev.wav', text: 'これのおかげで今まで手作りだったものが' }
                ],
                // Group 4
                [
                    { audio: '06-indut_rev.wav', text: '機械で『安く・大量に』作れるようになったんだ。' }
                ]
            ]
        ),

        // Scene 3: Terms (07-09)
        generateStoryScene(
            'scene-3-terms',
            'images/indus_rev2.png',
            [
                // Group 1
                [
                    { audio: '07-indut_rev.wav', text: '特に『綿織物』の生産が爆発的に増えたんだけど' }
                ],
                // Group 2
                [
                    { audio: '08-indut_rev.wav', text: 'こうやって工場に機械を置いて生産する仕組みを' }
                ],
                // Group 3
                [
                    { audio: '09-indut_rev.wav', text: '『工場制機械工業』って言うよ。' }
                ]
            ]
        ),

        // Scene 4: Social (10-15)
        generateStoryScene(
            'scene-4-social',
            'images/indus_rev3.png',
            [
                // Group 1
                [
                    { audio: '10-indut_rev.wav', text: 'でも、ここで格差が生まれる。' }
                ],
                // Group 2
                [
                    { audio: '11-indut_rev.wav', text: '工場や機械を持ってるお金持ちの『資本家』と、' }
                ],
                // Group 3
                [
                    { audio: '12-indut_rev.wav', text: 'そこで雇われて働く『労働者』。' }
                ],
                // Group 4
                [
                    { audio: '13-indut_rev.wav', text: 'この2つの関係がはっきりして、' },
                    { audio: '14-indut_rev.wav', text: '利益を第一にする' }
                ],
                // Group 5
                [
                    { audio: '15-indut_rev.wav', text: '『資本主義』という仕組みが発展したんだ。' }
                ]
            ]
        ),

        // Scene 5: Conclusion (16-18)
        generateStoryScene(
            'scene-5-conclusion',
            'images/indus_rev4.png',
            [
                // Group 1
                [
                    { audio: '16-indut_rev.wav', text: 'イギリスは大量生産された製品を世界中に輸出し、' }
                ],
                // Group 2
                [
                    { audio: '17-indut_rev.wav', text: '『世界の工場』と呼ばれる産業国に成長した。' }
                ],
                // Group 3
                [
                    { audio: '18-indut_rev.wav', text: '今の便利な生活も、ここから始まった！' }
                ]
            ]
        )
    ]
};
