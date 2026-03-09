import { TaskItem } from '../types';
import { rand, shuffle } from './mathGenerators';

function generateStringOptions(correctAnswer: string, dictionary: string[]): string[] {
    const options = new Set<string>([correctAnswer]);
    while (options.size < 4) {
        options.add(dictionary[rand(0, dictionary.length - 1)]);
    }
    return shuffle(Array.from(options));
}

export function genRussianLetter(): TaskItem {
    const words = [
        { word: 'М_локо', answer: 'о', options: ['о', 'а', 'е', 'и'] },
        { word: 'С_бака', answer: 'о', options: ['о', 'а', 'у', 'ы'] },
        { word: 'Д_ревня', answer: 'е', options: ['е', 'и', 'я', 'а'] },
        { word: 'Ду_', answer: 'б', options: ['б', 'п', 'д', 'т'] },
        { word: 'Гри_', answer: 'б', options: ['б', 'п', 'в', 'ф'] },
        { word: 'Тр_ва', answer: 'а', options: ['а', 'о', 'е', 'и'] },
        { word: 'Л_са (животное)', answer: 'и', options: ['и', 'е', 'я', 'а'] }
    ];
    const item = words[rand(0, words.length - 1)];
    return {
        type: 'russian',
        character: 'owl',
        title: 'Сова проверяет грамотность',
        question: item.word,
        answer: item.answer,
        options: shuffle([...item.options])
    };
}

export function genRussianOdd(): TaskItem {
    const groups = [
        { words: ['Стол', 'Стул', 'Диван', 'Яблоко'], answer: 'Яблоко' },
        { words: ['Кошка', 'Собака', 'Корова', 'Воробей'], answer: 'Воробей' },
        { words: ['Красный', 'Синий', 'Зеленый', 'Громко'], answer: 'Громко' },
        { words: ['Бегать', 'Прыгать', 'Плавать', 'Красивый'], answer: 'Красивый' }
    ];
    const item = groups[rand(0, groups.length - 1)];
    return {
        type: 'russian',
        character: 'owl',
        title: 'Что здесь лишнее?',
        question: item.words.join(', '),
        answer: item.answer,
        options: shuffle([...item.words])
    };
}

export function genRussianSyllables(): TaskItem {
    const words = [
        { syllables: ['БА', 'КА', 'СО'], answer: 'СОБАКА' },
        { syllables: ['ЛО', 'КО', 'МО'], answer: 'МОЛОКО' },
        { syllables: ['ШИ', 'НА', 'МА'], answer: 'МАШИНА' },
        { syllables: ['РЕ', 'ВО', 'ДЕ'], answer: 'ДЕРЕВО' }
    ];
    const item = words[rand(0, words.length - 1)];
    return {
        type: 'russian',
        character: 'owl',
        title: 'Собери слово из слогов',
        question: item.syllables.join(' - '),
        answer: item.answer,
        options: generateStringOptions(item.answer, ['СОБАКА', 'МОЛОКО', 'МАШИНА', 'ДЕРЕВО', 'КАБАН', 'КОЛЕСО'])
    };
}

export function getRandomRussianTask(): TaskItem {
    const generators = [genRussianLetter, genRussianOdd, genRussianSyllables];
    return generators[rand(0, generators.length - 1)]();
}
