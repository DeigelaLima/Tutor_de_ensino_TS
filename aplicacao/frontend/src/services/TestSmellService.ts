import { TestSmells } from '../testSmellsTypes';  

export function getTestSmellById(id: number) {
    const testSmell = TestSmells.value.find((ts) => ts.id === id);
    return testSmell;
}

export function getTestSmells() {
    return TestSmells.value;
}