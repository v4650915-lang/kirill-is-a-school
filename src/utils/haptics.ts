export const vibrateSuccess = () => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(50); // Короткая вибрация
    }
};

export const vibrateError = () => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate([100, 50, 100]); // Двойная вибрация
    }
};
