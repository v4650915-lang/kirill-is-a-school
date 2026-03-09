import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import MainMenu from './pages/MainMenu';
import SubjectPage from './pages/SubjectPage';
import { SubjectType } from './types';

function App() {
  const [currentRoute, setCurrentRoute] = useState<'menu' | SubjectType>('menu');

  // Глобальное состояние сессии
  const [currentGrade, setCurrentGrade] = useState<number | null>(null);
  const [totalScore, setTotalScore] = useState<number>(0);
  const [tasksCompleted, setTasksCompleted] = useState<number>(0);

  const handleGrade = (grade: number) => {
    setCurrentGrade(grade);
    setTotalScore(prev => prev + grade);
    setTasksCompleted(prev => prev + 1);
  };

  const handleGoHome = () => {
    setCurrentRoute('menu');
  };

  return (
    <Layout
      currentGrade={currentGrade}
      totalScore={totalScore}
      tasksCompleted={tasksCompleted}
      onGoHome={handleGoHome}
    >
      {currentRoute === 'menu' && (
        <MainMenu onSelectSubject={(subj) => setCurrentRoute(subj)} />
      )}

      {currentRoute !== 'menu' && (
        <SubjectPage
          subject={currentRoute}
          onGrade={handleGrade}
          onHome={handleGoHome}
        />
      )}
    </Layout>
  );
}

export default App;
