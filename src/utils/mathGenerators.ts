import { TaskItem, CharacterType } from '../types';

export function rand(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffle<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export function generateOptions(correctAnswer: number, count: number): number[] {
    const options = new Set<number>([correctAnswer]);
    while (options.size < count) {
        let offset = rand(-5, 5);
        if (offset === 0) offset = 1;
        let wrong = correctAnswer + offset;
        if (wrong >= 0 && !options.has(wrong)) {
            options.add(wrong);
        }
    }
    return shuffle(Array.from(options));
}

export function genMathAddSub(): TaskItem {
    const isAdd = Math.random() > 0.5;
    let a, b, answer;
    if (isAdd) {
        a = rand(10, 89);
        b = rand(1, 100 - a);
        answer = a + b;
    } else {
        a = rand(20, 100);
        b = rand(1, a - 1);
        answer = a - b;
    }

    return {
        type: 'math',
        character: 'hedgehog',
        title: 'Ежик считает запасы',
        question: `${a} ${isAdd ? '+' : '-'} ${b} = ?`,
        answer: answer,
        options: generateOptions(answer, 4)
    };
}

export function genMathMult(): TaskItem {
    const a = rand(2, 5);
    const b = rand(2, 10);
    const answer = a * b;
    return {
        type: 'math',
        character: 'bear',
        title: 'Медведь умножает бочонки',
        question: `${a} × ${b} = ?`,
        answer: answer,
        options: generateOptions(answer, 4)
    };
}

export function genMathDiv(): TaskItem {
    // Деление таблицы до 5
    const b = rand(2, 5);
    const answer = rand(2, 9);
    const a = b * answer;
    return {
        type: 'math',
        character: 'hare',
        title: 'Заяц делит морковки',
        question: `${a} : ${b} = ?`,
        answer: answer,
        options: generateOptions(answer, 4)
    };
}

export function genMathCombo(): TaskItem {
    // В одной строчке: a + b * c
    // Второй класс в России: умножение приоритетнее, счет до 100, умножение до 5
    const b = rand(2, 5);
    const c = rand(2, 9);
    const multRes = b * c;

    // a подберем так, чтобы сложение было до 100
    const a = rand(1, 100 - multRes);
    const answer = a + multRes;

    // Решаем где будет сложение - a + b*c или b*c + a
    const isFirst = Math.random() > 0.5;
    const question = isFirst ? `${a} + ${b} × ${c} = ?` : `${b} × ${c} + ${a} = ?`;

    return {
        type: 'math',
        character: 'owl', // Пусть Сова дает хитрые математические задачки
        title: 'Хитрая математика от Совы',
        question: question,
        answer: answer,
        options: generateOptions(answer, 4)
    };
}

export function getRandomMathTask(): TaskItem {
    const generators = [genMathAddSub, genMathMult, genMathDiv, genMathCombo];
    return generators[rand(0, generators.length - 1)]();
}
