import React from 'react';

interface Props {
    sessionScore: number;
    sessionCount: number;
    onContinue: () => void;
    onHome: () => void;
}

const Certificate: React.FC<Props> = ({ sessionScore, sessionCount, onContinue, onHome }) => {
    const average = sessionScore / sessionCount;

    let title = "";
    let message = "";
    let medalColor = "";
    let ribbonColor = ""; // fallback if we don't use tricolor for the medal itself

    if (average === 5) {
        title = "ГРАМОТА ОТЛИЧНИКУ! 🥇";
        message = "Идеальный результат! Так держать, ты настоящий молодец!";
        medalColor = "#ffd700"; // Gold
    } else if (average >= 4) {
        title = "ПОЧЕТНАЯ ГРАМОТА 🥈";
        message = "Хороший результат! Ты молодец, но всегда есть к чему стремиться!";
        medalColor = "#c0c0c0"; // Silver
    } else if (average >= 3) {
        title = "СЕРТИФИКАТ 🥉";
        message = "Удовлетворительно. Нужно больше стараться и быть внимательнее!";
        medalColor = "#cd7f32"; // Bronze
    } else {
        title = "СПРАВКА 📝";
        message = "Материал не усвоен. Тебе нужно серьезно подучить правила и попробовать снова!";
        medalColor = "#9e9e9e"; // Grey
    }

    return (
        <div style={{
            background: 'url("https://www.transparenttextures.com/patterns/cream-paper.png"), linear-gradient(to bottom right, #fffde7, #fff9c4)',
            padding: '40px 30px',
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            textAlign: 'center',
            marginTop: '20px',
            maxWidth: '500px',
            width: '90%',
            position: 'relative',
            border: '2px solid #d7ccc8',
            overflow: 'hidden'
        }}>
            {/* Триколор сверху */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '15px',
                background: 'linear-gradient(to bottom, #ffffff 33%, #0039a6 33%, #0039a6 66%, #d52b1e 66%)'
            }} />

            <h2 style={{
                fontSize: '2rem',
                color: '#b71c1c',
                margin: '20px 0',
                fontFamily: '"Georgia", serif',
                textTransform: 'uppercase',
                letterSpacing: '2px'
            }}>
                {title}
            </h2>

            <p style={{
                fontSize: '1.4rem',
                color: '#3e2723',
                marginBottom: '30px',
                fontFamily: '"Georgia", serif',
                fontStyle: 'italic',
                lineHeight: '1.5'
            }}>
                Награждается ученик Лесной Школы за прохождение {sessionCount} заданий со средним баллом:
                <strong style={{ display: 'block', fontSize: '2.5rem', color: '#ff6f00', marginTop: '10px' }}>
                    {average.toFixed(1)}
                </strong>
            </p>

            <p style={{ fontSize: '1.2rem', color: '#5d4037', marginBottom: '40px', padding: '0 20px' }}>
                {message}
            </p>

            {/* Печать */}
            <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: medalColor,
                margin: '0 auto 40px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5), 0 4px 8px rgba(0,0,0,0.2)',
                border: '3px dashed rgba(255,255,255,0.5)',
                position: 'relative'
            }}>
                {/* Ленточки под печатью */}
                <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '20px',
                    width: '20px',
                    height: '40px',
                    background: '#d52b1e',
                    transform: 'rotate(15deg)',
                    zIndex: -1
                }} />
                <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    right: '20px',
                    width: '20px',
                    height: '40px',
                    background: '#0039a6',
                    transform: 'rotate(-15deg)',
                    zIndex: -1
                }} />

                <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fff', textAlign: 'center', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
                    ЛЕСНАЯ<br />ШКОЛА
                </span>
            </div>

            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                <button
                    onClick={onHome}
                    style={{
                        background: '#e0e0e0',
                        color: '#3e2723',
                        border: 'none',
                        borderRadius: '15px',
                        padding: '15px 25px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 4px 0 #bdbdbd',
                        transition: 'transform 0.1s, box-shadow 0.1s'
                    }}
                >
                    В меню
                </button>
                <button
                    onClick={onContinue}
                    style={{
                        background: '#aed581',
                        color: '#3e2723',
                        border: 'none',
                        borderRadius: '15px',
                        padding: '15px 25px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 4px 0 #81c784',
                        transition: 'transform 0.1s, box-shadow 0.1s'
                    }}
                >
                    Ещё 10!
                </button>
            </div>
        </div>
    );
};

export default Certificate;
