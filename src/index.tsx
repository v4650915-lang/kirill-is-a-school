import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Глобальные стили
const style = document.createElement('style');
style.textContent = `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #e0f7fa;
        color: #3e2723;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
        40% {transform: translateY(-30px);}
        60% {transform: translateY(-15px);}
    }
`;
document.head.appendChild(style);
