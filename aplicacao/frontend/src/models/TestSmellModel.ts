export interface TestSmell {
    id: number;
    name?: string;
    description?: string;
    exercise?: Exercise;
}

export interface Exercise {
    idSmell?: number[];
    categoryId?: number;
    categoryName?: String;
    text?: string;
    textRefactored?: string;
}