import React from 'react';
import { AbsoluteFill, staticFile } from 'remotion';
import '../../slide.css';

// Import FontAwesome CSS if not already imported globally
// Assuming it's handled via a <link> tag in index.html or similar, 
// but for Remotion we might need to import it or use an SVG library.
// For now, I'll assume standard classNames work if the CSS is loaded, 
// OR I should replace <i> tags with actual SVG icons if FontAwesome isn't available.
// Given the user provided HTML with FA CDN link, I should probably add that link to public/index.html 
// or just use text/emoji/images for icons to be safe in Remotion.
// I'll use simple text/emoji replacements for icons where possible to avoid dependency issues,
// or assume the user has a way to load FA. 
// Let's use Emojis/Unicode for simplicity and robustness in this iteration.

type SlideLayout = 'title' | 'quiz' | 'rule' | 'reason' | 'answer' | 'practice' | 'summary';

interface SlideStyleBoardProps {
    layout: SlideLayout;
    title?: string;
    subtitle?: string;
    imageSrc?: string;
    japaneseText?: React.ReactNode;
    englishText?: React.ReactNode;
    quizContent?: React.ReactNode;
    hint?: string;
    formula?: React.ReactNode;
    summaryItems?: { text: React.ReactNode; subText?: string }[];
}

export const SlideStyleBoard: React.FC<SlideStyleBoardProps> = ({
    layout,
    title,
    subtitle,
    imageSrc,
    japaneseText,
    englishText,
    quizContent,
    hint,
    formula,
    summaryItems,
}) => {
    return (
        <AbsoluteFill className="slide-body">
            <div className="slide-container">
                {layout === 'title' && (
                    <div className="content-area">
                        <div className="title-layout">
                            {imageSrc && <img src={imageSrc} alt="Title" />}
                            <h1 className="slide-h1" dangerouslySetInnerHTML={{ __html: title || '' }} />
                            {subtitle && <p className="slide-subtitle">{subtitle}</p>}
                        </div>
                    </div>
                )}

                {layout === 'quiz' && (
                    <>
                        <h2 className="slide-title">{title}</h2>
                        <div className="content-area">
                            <div className="vertical-stack">
                                <div className="w-full">
                                    <p style={{ fontWeight: 'bold', marginBottom: '20px', fontSize: '40px' }}>{japaneseText}</p>
                                    <div className="quiz-box english-text">
                                        {quizContent}
                                    </div>
                                </div>
                                {imageSrc && (
                                    <div className="image-wrapper">
                                        <img src={imageSrc} alt="Quiz" />
                                    </div>
                                )}
                                {hint && (
                                    <p style={{ fontSize: '30px', textAlign: 'center', backgroundColor: '#fff', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', width: '100%' }}>
                                        💡 ヒント：<br />
                                        {hint}
                                    </p>
                                )}
                            </div>
                        </div>
                    </>
                )}

                {layout === 'rule' && (
                    <div style={{ backgroundColor: '#f0fdf4', height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, padding: '60px' }}>
                        <h2 className="slide-title">{title}</h2>
                        <div className="content-area" style={{ justifyContent: 'center' }}>
                            <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '40px' }}>{japaneseText}</p>
                            <div className="formula-container">
                                <div className="english-text formula-text">
                                    {formula}
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                                {englishText}
                                <p style={{ background: '#fff', display: 'inline-block', padding: '20px 40px', borderRadius: '60px', marginTop: '60px', boxShadow: '0 6px 12px rgba(0,0,0,0.1)', fontSize: '30px' }}>
                                    🎵 声に出してリズムで覚えよう！
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {layout === 'reason' && (
                    <>
                        <h2 className="slide-title">{title}</h2>
                        <div className="content-area">
                            <div className="vertical-stack">
                                <div className="w-full">
                                    <div style={{ fontSize: '36px' }}>{japaneseText}</div>
                                    <div style={{ marginTop: '30px', background: '#fff', padding: '30px', borderRadius: '24px', border: '3px solid #e2e8f0', fontSize: '36px' }}>
                                        {englishText}
                                    </div>
                                </div>

                                <div className="arrow-down">⬇️</div>

                                <div className="tile-grid">
                                    <div className="tile">
                                        <div className="content">
                                            <h3>元の形 (well)</h3>
                                            <p>良く好む</p>
                                        </div>
                                    </div>
                                    <div className="tile highlight-tile">
                                        <div className="big-icon">👍</div>
                                        <div className="content">
                                            <h3>変身！ (better)</h3>
                                            <p className="highlight">もっと良く好む</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {layout === 'answer' && (
                    <>
                        <h2 className="slide-title">{title}</h2>
                        <div className="content-area">
                            <p style={{ textAlign: 'center', marginBottom: '40px', fontSize: '40px' }}>{japaneseText}</p>

                            <div className="formula-container" style={{ backgroundColor: '#ecfccb', borderColor: '#84cc16', boxShadow: '0 12px 0 #4d7c0f', padding: '80px 30px' }}>
                                <div className="english-text formula-text" style={{ color: '#3f6212', fontSize: '60px' }}>
                                    {formula}
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', marginTop: '80px' }}>
                                <div style={{ fontSize: '100px', color: '#22c55e' }}>⭕</div>
                                <p style={{ marginTop: '40px', fontWeight: 'bold', fontSize: '40px' }}>{englishText}</p>
                            </div>
                        </div>
                    </>
                )}

                {layout === 'practice' && (
                    <>
                        <h2 className="slide-title">{title}</h2>
                        <div className="content-area">
                            <div className="vertical-stack" style={{ justifyContent: 'flex-start' }}>
                                <p style={{ marginBottom: '20px', width: '100%', fontSize: '40px' }}><strong>例題：</strong><br />{japaneseText}</p>

                                <ul className="practice-list">
                                    <li>
                                        <div className="english-text" style={{ fontSize: '40px', lineHeight: '1.8' }}>
                                            {englishText}
                                        </div>
                                    </li>
                                </ul>

                                {imageSrc && (
                                    <div className="image-wrapper" style={{ backgroundColor: '#fef3c7', height: '400px' }}>
                                        <img src={imageSrc} alt="Practice" />
                                    </div>
                                )}

                                <p style={{ fontSize: '32px', color: '#64748b', marginTop: '30px', background: '#fff', padding: '30px', borderRadius: '24px', width: '100%' }}>
                                    📝 <span style={{ fontWeight: 'bold' }}>ポイント：</span><br />
                                    {hint}
                                </p>
                            </div>
                        </div>
                    </>
                )}

                {layout === 'summary' && (
                    <>
                        <h2 className="slide-title">{title}</h2>
                        <div className="content-area">
                            <div className="summary-box">
                                <h3 style={{ fontSize: '48px', marginBottom: '60px', color: '#1e3a8a' }}>{subtitle}</h3>

                                {summaryItems?.map((item, index) => (
                                    <div key={index} className="summary-item">
                                        <span className="check-badge">✔</span>
                                        <div>
                                            <span className="english-text" style={{ fontSize: '40px', display: 'block', marginBottom: '10px' }}>{item.text}</span>
                                            {item.subText && <span style={{ fontSize: '30px', color: '#64748b' }}>{item.subText}</span>}
                                        </div>
                                    </div>
                                ))}

                                <div style={{ marginTop: '60px', fontWeight: 'bold', color: '#0ea5e9', background: '#fff', padding: '30px', borderRadius: '20px', fontSize: '36px' }}>
                                    {englishText}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </AbsoluteFill>
    );
};
