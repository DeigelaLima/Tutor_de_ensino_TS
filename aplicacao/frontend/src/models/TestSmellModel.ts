export interface TestSmell {
    id: number;
    name?: string;
    description?: string;
    exercise?: Exercise;
}

export interface Exercise {
    idSmell?: number[];
    exercise?: string;
}