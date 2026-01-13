import { CSSProperties } from 'react';

// Common Types
export type AudioAsset = {
    src: string;
    durationInFrames: number; // We still need explicit duration for Remotion to know sequence lengths ahead of time in some cases, or we calculate it.
    startFrame?: number; // Relative to scene start. If omitted, plays sequentially after previous audio.
};

export type TextItem = {
    text: string;
    startFrame: number; // Relative to scene start
    duration?: number;
    style?: 'title' | 'subtitle' | 'body' | 'impact' | 'custom';
    customStyle?: CSSProperties;
    // Specific visual overrides
    color?: string;
    fontSize?: number;
    x?: number;
    y?: number;
    rotate?: number;
    animation?: 'fade' | 'pop' | 'shake' | 'none';
    fontFamily?: string;
    textShadow?: string;
    outlineColor?: string;
    outlineWidth?: string;
};

export type ImageAsset = {
    src: string;
    startFrame: number;
    duration?: number; // If omitted, lasts until end of scene or next image
    style?: CSSProperties;
};

// --- Pattern Definitions ---

// 1. Generic Scene Base
export interface BaseSceneConfig {
    id: string;
    type: string;
    durationInFrames: number;
    background?: string; // Color or Image URL
}

// 2. Intro Pattern (Title + Impact)
export interface IntroSceneConfig extends BaseSceneConfig {
    type: 'intro';
    audio: AudioAsset[];
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    backgroundImageStyle?: CSSProperties;
    impactText?: {
        text: string;
        style?: CSSProperties;
        startFrame: number;
    }[];
}

// 3. Story Pattern (Linear narrative with changing images and text)
export interface StorySceneConfig extends BaseSceneConfig {
    type: 'story';
    audio: AudioAsset[]; // The backbone of the timing
    images: ImageAsset[];
    texts: TextItem[];
    backgroundImage?: string;
    backgroundImageStyle?: CSSProperties;
}

// 4. Quote Pattern
export interface QuoteSceneConfig extends BaseSceneConfig {
    type: 'quote';
    audio: AudioAsset[];
    backgroundImage?: string;
    quoteLines: {
        text: string;
        startFrame: number;
        highlight?: boolean;
    }[];
    author?: string;
}

// Union Type
export type SceneConfig = IntroSceneConfig | StorySceneConfig | QuoteSceneConfig;

export type VideoScenario = {
    id: string;
    scenes: SceneConfig[];
    bgm?: string;
};
