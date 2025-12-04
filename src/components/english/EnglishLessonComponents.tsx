import React from 'react';

export const RedText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span style={{ color: 'red', fontWeight: 'bold' }}>{children}</span>
);

export const FormulaContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.25em',
        fontSize: '1em',
        fontWeight: 'bold',
        color: '#333',
        backgroundColor: '#FFF59D', // Yellow 200
        padding: '0.25em 0.5em',
        borderRadius: '0.4em',
        width: '100%',
        justifyContent: 'center'
    }}>
        {children}
    </div>
);

export const FormulaItem: React.FC<{ children: React.ReactNode; variant?: 'default' | 'pink' | 'blue' }> = ({ children, variant = 'default' }) => {
    let bg = 'white';
    let border = '#ccc';
    let color = '#333';

    if (variant === 'pink') {
        bg = '#FFCDD2';
        border = '#E57373';
        color = '#D32F2F';
    } else if (variant === 'blue') {
        bg = '#B3E5FC'; // Light Blue 100
        border = '#4FC3F7'; // Light Blue 300
        color = '#0277BD'; // Light Blue 800
    }

    return (
        <div style={{ backgroundColor: bg, border: `2px solid ${border}`, padding: '0.1em 0.3em', borderRadius: '0.2em', color }}>
            {children}
        </div>
    );
};

export const FormulaText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div>{children}</div>
);

export const SentenceList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{ fontSize: '1em', textAlign: 'left', lineHeight: '1.8' }}>
        {children}
    </div>
);

export const CenteredList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{ textAlign: 'center', lineHeight: '1.6', fontSize: '1.2em', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', color: '#333' }}>
        {children}
    </div>
);

export const CrossedText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span style={{ position: 'relative', display: 'inline-block' }}>
        <span style={{ color: 'red', textDecoration: 'line-through', textDecorationThickness: '0.1em' }}>
            {children}
        </span>
    </span>
);

export const RedCross: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span style={{ position: 'relative', display: 'inline-block' }}>
        {children}
        <span style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'red',
            fontSize: '3em',
            fontWeight: '900',
            pointerEvents: 'none',
            opacity: 0.9
        }}>
            ×
        </span>
    </span>
);

// New Components for Refactoring (using relative units)
export const LessonLabel: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = '#555' }) => (
    <div style={{ fontSize: '0.6em', color, marginBottom: '0.2em' }}>{children}</div>
);

export const LessonText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{ fontSize: '1em' }}>{children}</div>
);

export const CorrectText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{ fontSize: '1em', color: '#388E3C', fontWeight: 'bold' }}>{children}</div>
);

export const IncorrectText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{ fontSize: '1em', color: '#D32F2F', textDecoration: 'line-through' }}>{children}</div>
);

export const BigEmphasisText: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = '#E91E63' }) => (
    <div style={{ fontSize: '2em', color }}>{children}</div>
);

export const Highlight: React.FC<{ children: React.ReactNode; color?: string }> = ({ children, color = '#E91E63' }) => (
    <span style={{ color, fontWeight: 'bold' }}>{children}</span>
);
