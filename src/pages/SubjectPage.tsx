import React, { useState, useEffect } from 'react';
import { SubjectType, TaskItem, CharacterType } from '../types';
import Character from '../components/Character';
import TaskCard from '../components/TaskCard';
import Certificate from '../components/Certificate';
import { getRandomMathTask } from '../utils/mathGenerators';
import { getRandomRussianTask } from '../utils/russianGenerators';

interface Props {
    subject: SubjectType;
    onGrade: (grade: number) => void;
    onHome: () => void;
}

const SubjectPage: React.FC<Props> = ({ subject, onGrade, onHome }) => {
    const [task, setTask] = useState<TaskItem | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [sessionCount, setSessionCount] = useState(0);
    const [sessionScore, setSessionScore] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const generateTask = () => {
        if (subject === 'math' || subject === 'math-manual') {
            setTask(getRandomMathTask());
        } else {
            setTask(getRandomRussianTask());
        }
    };

    useEffect(() => {
        setSessionCount(0);
        setSessionScore(0);
        setShowModal(false);
        generateTask();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subject]);

    const handleSuccess = (grade: number) => {
        setIsAnimating(true);
        setSessionScore(prev => prev + grade);
        onGrade(grade);
    };

    const handleNext = () => {
        setIsAnimating(false);
        const newCount = sessionCount + 1;
        setSessionCount(newCount);

        if (newCount > 0 && newCount % 10 === 0) {
            setShowModal(true);
            try {
                const audio = new Audio('/sounds/bell.mp3');
                audio.play().catch(e => console.log('Audio playback prevented by browser', e));
            } catch (e) {
                console.log('Audio error', e);
            }
        } else {
            generateTask();
        }
    };

    const handleContinue = () => {
        setShowModal(false);
        setSessionCount(0);
        setSessionScore(0);
        generateTask();
    };

    if (!task) return <div>Загрузка...</div>;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {showModal ? (
                <Certificate
                    sessionScore={sessionScore}
                    sessionCount={sessionCount}
                    onContinue={handleContinue}
                    onHome={onHome}
                />
            ) : (
                <>
                    <Character type={task.character} isAnimating={isAnimating} />
                    <TaskCard
                        task={task}
                        onSuccess={handleSuccess}
                        onNext={handleNext}
                        isManual={subject === 'math-manual' || subject === 'russian-manual'}
                    />
                </>
            )}
        </div>
    );
};

export default SubjectPage;
