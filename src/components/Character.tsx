import React from 'react';
import { CharacterType } from '../types';

interface Props {
    type: CharacterType;
    isAnimating: boolean;
}

const Character: React.FC<Props> = ({ type, isAnimating }) => {
    let svgContent = null;

    switch (type) {
        case 'hedgehog':
            svgContent = (
                <svg className="character-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <path d="M 20 70 Q 50 10 80 70 Z" fill="#8d6e63" />
                    <circle cx="25" cy="70" r="10" fill="#a1887f" />
                    <circle cx="45" cy="70" r="10" fill="#a1887f" />
                    <circle cx="65" cy="70" r="10" fill="#a1887f" />
                    <path d="M 70 75 Q 85 75 90 65 Q 95 80 75 85 Z" fill="#ffccbc" />
                    <circle cx="85" cy="65" r="3" fill="black" />
                    <circle cx="75" cy="70" r="2" fill="black" />
                    <circle cx="35" cy="40" r="5" fill="#f44336" />
                </svg>
            );
            break;
        case 'bear':
            svgContent = (
                <svg className="character-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <circle cx="50" cy="60" r="35" fill="#795548" />
                    <circle cx="25" cy="35" r="15" fill="#795548" />
                    <circle cx="75" cy="35" r="15" fill="#795548" />
                    <circle cx="50" cy="65" r="15" fill="#d7ccc8" />
                    <circle cx="50" cy="58" r="4" fill="black" />
                    <circle cx="40" cy="50" r="3" fill="black" />
                    <circle cx="60" cy="50" r="3" fill="black" />
                    <path d="M 45 68 Q 50 72 55 68" stroke="black" fill="transparent" strokeWidth="2" />
                </svg>
            );
            break;
        case 'hare':
            svgContent = (
                <svg className="character-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <ellipse cx="50" cy="70" rx="30" ry="25" fill="#eceff1" />
                    <ellipse cx="35" cy="30" rx="8" ry="25" fill="#eceff1" />
                    <ellipse cx="65" cy="30" rx="8" ry="25" fill="#eceff1" />
                    <circle cx="50" cy="75" r="5" fill="#ffcdd2" />
                    <circle cx="40" cy="65" r="3" fill="black" />
                    <circle cx="60" cy="65" r="3" fill="black" />
                </svg>
            );
            break;
        case 'owl':
            svgContent = (
                <svg className="character-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <ellipse cx="50" cy="60" rx="35" ry="30" fill="#8d6e63" />
                    <ellipse cx="35" cy="55" rx="12" ry="12" fill="white" />
                    <ellipse cx="65" cy="55" rx="12" ry="12" fill="white" />
                    <circle cx="35" cy="55" r="5" fill="black" />
                    <circle cx="65" cy="55" r="5" fill="black" />
                    <polygon points="45,65 55,65 50,75" fill="#ffb74d" />
                    <path d="M 15 60 Q 5 60 10 80 Z" fill="#795548" />
                    <path d="M 85 60 Q 95 60 90 80 Z" fill="#795548" />
                </svg>
            );
            break;
        default:
            return null;
    }

    return (
        <div style={{
            width: '150px',
            height: '150px',
            margin: '20px 0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            animation: isAnimating ? 'bounce 1s' : 'none'
        }}>
            {svgContent}
        </div>
    );
};

export default Character;
