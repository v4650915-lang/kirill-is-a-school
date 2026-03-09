import React from 'react';
import { SubjectType } from '../types';

interface Props {
    onSelectSubject: (subject: SubjectType) => void;
}

const MainMenu: React.FC<Props> = ({ onSelectSubject }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            gap: '20px',
            marginTop: '50px',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#3e2723', marginBottom: '20px' }}>Добро пожаловать в Лесную школу! 🌲</h1>

            {/* Математика */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.5)',
                padding: '20px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                width: '300px'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3e2723', textAlign: 'center' }}>
                    🧮 Математика
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        onClick={() => onSelectSubject('math')}
                        style={{
                            backgroundColor: '#ffb74d',
                            color: '#3e2723',
                            border: 'none',
                            borderRadius: '15px',
                            padding: '15px 5px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            boxShadow: '0 6px 0 #bcaaa4',
                            cursor: 'pointer',
                            flex: 1,
                            transition: 'transform 0.1s, box-shadow 0.1s'
                        }}
                    >
                        Выбор
                    </button>
                    <button
                        onClick={() => onSelectSubject('math-manual')}
                        style={{
                            backgroundColor: '#ff9800',
                            color: '#3e2723',
                            border: 'none',
                            borderRadius: '15px',
                            padding: '15px 5px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            boxShadow: '0 6px 0 #bcaaa4',
                            cursor: 'pointer',
                            flex: 1,
                            transition: 'transform 0.1s, box-shadow 0.1s'
                        }}
                    >
                        Сам решаю
                    </button>
                </div>
            </div>

            {/* Русский язык */}
            <div style={{
                background: 'rgba(255, 255, 255, 0.5)',
                padding: '20px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                width: '300px'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3e2723', textAlign: 'center' }}>
                    📚 Русский язык
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                        onClick={() => onSelectSubject('russian')}
                        style={{
                            backgroundColor: '#aed581',
                            color: '#3e2723',
                            border: 'none',
                            borderRadius: '15px',
                            padding: '15px 5px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            boxShadow: '0 6px 0 #81c784',
                            cursor: 'pointer',
                            flex: 1,
                            transition: 'transform 0.1s, box-shadow 0.1s'
                        }}
                    >
                        Выбор
                    </button>
                    <button
                        onClick={() => onSelectSubject('russian-manual')}
                        style={{
                            backgroundColor: '#9ccc65',
                            color: '#3e2723',
                            border: 'none',
                            borderRadius: '15px',
                            padding: '15px 5px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            boxShadow: '0 6px 0 #81c784',
                            cursor: 'pointer',
                            flex: 1,
                            transition: 'transform 0.1s, box-shadow 0.1s'
                        }}
                    >
                        Сам пишу
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
