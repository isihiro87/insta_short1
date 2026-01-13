import { StorySceneConfig, AudioAsset, ImageAsset, TextItem } from '../types/VideoPatterns';
// @ts-ignore
import audioDurations from '../../audio_durations.json';

type AudioKey = keyof typeof audioDurations;

export type DialogueStep = {
    audio: string; // Filename like "02-indut_rev.wav"
    text: string;
    overrideY?: number;
};

export type DialogueGroup = DialogueStep[];

const FPS = 30;
const BASE_Y = 500;
const LINE_HEIGHT_PER_ROW = 110; // 85px font + gap
const CHARS_PER_LINE = 12;

// Helper to wrap text
function wrapText(text: string, limit: number): { wrapped: string; lines: number } {
    if (text.includes('\n')) {
        return { wrapped: text, lines: text.split('\n').length };
    }
    let result = '';
    let currentLine = '';
    let lineCount = 1;

    for (let i = 0; i < text.length; i++) {
        currentLine += text[i];
        if (currentLine.length >= limit && i < text.length - 1) {
            result += currentLine + '\n';
            currentLine = '';
            lineCount++;
        }
    }
    result += currentLine;
    return { wrapped: result, lines: lineCount };
}

export function generateStoryScene(
    id: string,
    imageSrc: string,
    groups: DialogueGroup[],
    baseAudioPath: string = 'audio/explain/'
): StorySceneConfig {
    const audioAssets: AudioAsset[] = [];
    const textItems: TextItem[] = [];

    // Global cursor for audio (relative to scene start)
    let currentFrame = 0;

    groups.forEach((group) => {
        // Calculate durations for this group first to determine persistence
        const groupStepsWithDurations = group.map(step => {
            const durationSec = (audioDurations as Record<string, number>)[step.audio];
            if (durationSec === undefined) {
                console.warn(`Duration not found for ${step.audio}`);
            }
            const durationFrames = Math.ceil((durationSec || 0) * FPS);
            return { ...step, durationFrames };
        });

        // Calculate total duration of the remaining part of the group for each step
        // Step 1 text lasts: Step 1 dur + Step 2 dur + ...
        let groupStartY = BASE_Y;

        groupStepsWithDurations.forEach((step, index) => {
            // Audio
            audioAssets.push({
                src: baseAudioPath + step.audio,
                durationInFrames: step.durationFrames,
                // Sequential
            });

            // Text
            // Calculate how long this text stays: Sum of this step and all subsequent steps in this group
            let textDuration = 0;
            for (let i = index; i < groupStepsWithDurations.length; i++) {
                textDuration += groupStepsWithDurations[i].durationFrames;
            }

            // Formatting
            const { wrapped, lines } = wrapText(step.text, CHARS_PER_LINE);

            // Y Position
            const y = step.overrideY ?? groupStartY;

            // Add text item
            textItems.push({
                text: wrapped,
                startFrame: currentFrame,
                duration: textDuration,
                fontSize: 85,
                y: y,
                fontFamily: 'Noto Sans JP',
                outlineWidth: '8px',
                outlineColor: 'black',
                color: 'white',
                textShadow: 'none'
            });

            // Increment Y for next item in group
            // If current item has 2 lines, next item starts 2 lines down?
            // User logic: Line 1 Y=500. Line 2 Y=720. 
            // 720 - 500 = 220. 220 / 110 = 2.
            // So yes, increment by lines * LINE_HEIGHT
            groupStartY += lines * LINE_HEIGHT_PER_ROW;

            // Advance audio cursor
            currentFrame += step.durationFrames;
        });
    });

    const totalDuration = currentFrame + 20; // +20 buffer

    return {
        id,
        type: 'story',
        durationInFrames: totalDuration,
        backgroundImage: 'images/desk_back.png',
        audio: audioAssets,
        images: [
            {
                src: imageSrc,
                startFrame: 0,
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '864px',
                    top: '25%',
                    left: 0,
                    objectFit: 'cover'
                }
            }
        ],
        texts: [
            // Header (Always present)
            { text: '中2歴史', startFrame: 0, fontSize: 50, y: -800, color: 'white', outlineWidth: '5px', outlineColor: 'black', fontFamily: 'Noto Sans JP' },
            { text: '産業革命', startFrame: 0, fontSize: 80, y: -700, color: 'gold', outlineWidth: '5px', outlineColor: 'black', fontFamily: 'Noto Sans JP', textShadow: 'none' },
            // Generated Subtitles
            ...textItems
        ]
    };
}
