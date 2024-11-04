export interface TestSmell {
    id: number;
    name?: string;
    description?: string;
    exercise?: Exercise;
}

export interface Exercise {
    idSmell?: number[];
    categoryId?: number;
    categoryName?: string;
    text?: string;
    textRefactored?: string;
}