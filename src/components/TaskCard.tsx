import React, { useState, useEffect } from 'react';
import { TaskItem } from '../types';
import { vibrateSuccess, vibrateError } from '../utils/haptics';

interface Props {
    task: TaskItem;
    onSuccess: (grade: number) => void;
    onNext: () => void;
    isManual?: boolean;
}

const TaskCard: React.FC<Props> = ({ task, onSuccess, onNext, isManual = false }) => {
    const [attemptsUsed, setAttemptsUsed] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState<Set<string | number>>(new Set());
    const [isSuccess, setIsSuccess] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [showCorrect, setShowCorrect] = useState(false);

    // Reset attempts on new task
    useEffect(() => {
        setAttemptsUsed(0);
        setWrongAnswers(new Set());
        setInputValue('');
        setShowCorrect(false);
    }, [task, isManual]);

    const handleAnswer = (opt: string | number) => {
        if (isSuccess || wrongAnswers.has(opt)) return;

        const isCorrect = String(opt).trim().toLowerCase() === String(task.answer).trim().toLowerCase();

        if (isCorrect) {
            vibrateSuccess();
            setIsSuccess(true);
            let grade = Math.max(2, 5 - attemptsUsed);
            onSuccess(grade);
            setTimeout(() => {
                onNext();
                setIsSuccess(false);
                setInputValue('');
            }, 1500);
        } else {
            vibrateError();
            const newAttemptsUsed = attemptsUsed + 1;
            setAttemptsUsed(newAttemptsUsed);
            setWrongAnswers(new Set(wrongAnswers).add(opt));

            if (isManual && newAttemptsUsed >= 3) {
                setShowCorrect(true);
                onSuccess(2);
                setTimeout(() => {
                    onNext();
                    setShowCorrect(false);
                    setInputValue('');
                }, 2500);
            }
        }
    };

    return (
        <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '20px',
                borderRadius: '20px',
                boxShadow: '0 8px 0 #bcaaa4',
                textAlign: 'center',
                width: '100%',
                marginBottom: '20px'
            }}>
                <div style={{ fontSize: '1.2rem', color: '#555', marginBottom: '10px' }}>
                    {task.title}
                </div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '15px' }}>
                    {task.question}
                </div>

                <div style={{
                    marginTop: '20px',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    minHeight: '30px',
                    color: isSuccess ? '#2e7d32' : (showCorrect || attemptsUsed > 0 ? '#c62828' : 'transparent')
                }}>
                    {isSuccess ? 'Молодец! Правильно! 🎉' :
                        showCorrect ? `Правильный ответ: ${task.answer}` :
                            (attemptsUsed > 0 && attemptsUsed < 3 ? 'Ой, попробуй еще раз! 🤔' : '...')}
                </div>
            </div>

            {isManual ? (
                <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && inputValue.trim() && !isSuccess && !showCorrect) {
                                handleAnswer(inputValue.trim());
                            }
                        }}
                        disabled={isSuccess || showCorrect}
                        placeholder="Ваш ответ"
                        style={{
                            flex: 1,
                            padding: '15px',
                            fontSize: '1.5rem',
                            borderRadius: '15px',
                            border: '2px solid #bcaaa4',
                            textAlign: 'center',
                            width: '100%',
                            boxSizing: 'border-box'
                        }}
                    />
                    <button
                        onClick={() => inputValue.trim() && handleAnswer(inputValue.trim())}
                        disabled={!inputValue.trim() || isSuccess || showCorrect}
                        style={{
                            background: (!inputValue.trim() || isSuccess || showCorrect) ? '#e0e0e0' : '#aed581',
                            color: '#3e2723',
                            border: 'none',
                            borderRadius: '15px',
                            padding: '15px 20px',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            cursor: (!inputValue || isSuccess || showCorrect) ? 'default' : 'pointer',
                            boxShadow: (!inputValue || isSuccess || showCorrect) ? 'none' : '0 6px 0 #81c784',
                            transition: 'transform 0.1s, box-shadow 0.1s',
                        }}
                    >
                        ✓
                    </button>
                </div>
            ) : (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px',
                    width: '100%'
                }}>
                    {task.options.map((opt, i) => {
                        const isWrong = wrongAnswers.has(opt);
                        return (
                            <button
                                key={i}
                                onClick={() => handleAnswer(opt)}
                                disabled={isSuccess || isWrong}
                                style={{
                                    background: isWrong ? '#ffcdd2' : '#ffffff',
                                    color: isWrong ? '#c62828' : '#3e2723',
                                    border: 'none',
                                    borderRadius: '15px',
                                    padding: '20px 10px',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    boxShadow: isWrong ? 'none' : '0 6px 0 #bcaaa4',
                                    cursor: (isSuccess || isWrong) ? 'default' : 'pointer',
                                    transition: 'transform 0.1s, box-shadow 0.1s',
                                    transform: isWrong ? 'translateY(6px)' : 'none',
                                    opacity: isSuccess && opt !== task.answer ? 0.5 : 1
                                }}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default TaskCard;
