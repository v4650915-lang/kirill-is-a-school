import React from 'react';

interface Props {
    children: React.ReactNode;
    currentGrade: number | null;
    totalScore: number;
    tasksCompleted: number;
    onGoHome: () => void;
}

const Layout: React.FC<Props> = ({ children, currentGrade, totalScore, tasksCompleted, onGoHome }) => {
    const avgScore = tasksCompleted === 0 ? '0.0' : (totalScore / tasksCompleted).toFixed(1);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: '#e0f7fa',
            color: '#3e2723'
        }}>
            <header style={{
                backgroundColor: '#8d6e63',
                color: 'white',
                padding: '15px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                position: 'sticky',
                top: 0,
                zIndex: 10,
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px'
            }}>
                <button
                    style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        background: 'rgba(255, 255, 255, 0.2)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        color: 'white',
                        padding: '10px 15px',
                        borderRadius: '15px',
                        transition: 'background 0.2s'
                    }}
                    onClick={onGoHome}
                    onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                    onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                >
                    ← На главную
                </button>
                <div style={{ display: 'flex', gap: '15px', fontSize: '1.1rem' }}>
                    <div style={{
                        background: '#ffb74d',
                        padding: '5px 10px',
                        borderRadius: '20px',
                        color: '#333',
                        fontWeight: 'bold'
                    }}>
                        Оценка: {currentGrade !== null ? currentGrade : '-'}
                    </div>
                    <div style={{
                        background: '#ffb74d',
                        padding: '5px 10px',
                        borderRadius: '20px',
                        color: '#333',
                        fontWeight: 'bold'
                    }}>
                        Средний балл: {avgScore}
                    </div>
                </div>
            </header>

            <main style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                paddingBottom: '40px',
                background: 'linear-gradient(to bottom, #e0f7fa 60%, #aed581 40%)'
            }}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
