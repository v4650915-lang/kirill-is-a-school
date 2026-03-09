export type SubjectType = 'math' | 'math-manual' | 'russian' | 'russian-manual';
export type CharacterType = 'hedgehog' | 'bear' | 'hare' | 'owl';

export interface TaskItem {
    type: SubjectType;
    character: CharacterType;
    title: string;
    question: string;
    answer: string | number;
    options: (string | number)[];
}
