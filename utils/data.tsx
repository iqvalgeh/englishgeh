// Category.ts
class Category {
    id: string;
    title: string;
    color: string;

    constructor(id: string, title: string, color: string) {
        this.id = id;
        this.title = title;
        this.color = color;
    }
}



export const CATEGORIES: Category[] = [
    new Category("c1", "Unit 1", "#ffc7ff"),
    new Category("c2", "Unit 2", "#FFB6C1"),
    new Category("c3", "Unit 3", "#f5d142"),
    new Category("c4", "Unit 4", "#f5a442"),
    new Category("c5", "Unit 5", "#b9ffb0"),
    new Category("c6", "Unit 6", "#41d95d"),
    new Category("c7", "Unit 7", "#47fced"),
    new Category("c8", "Unit 8", "#9eecff"),
    new Category("c9", "Unit 9", "#368dff"),
    new Category("c10", "Extra", "marine"),
];

interface QuizData {
    question: string;
    answer: string;
}

export const quizDats: QuizData[] = [
    {
        question: "What is the capital of India?",
        answer: "Delhi",
    },
    {
        question: "Largest animal in the world?",
        answer: "Blue whale",
    },
    {
        question: "Test",
        answer: "Blue whale",
    },
    {
        question: "Largest animal in the world?",
        answer: "Blue whale",
    },
];
