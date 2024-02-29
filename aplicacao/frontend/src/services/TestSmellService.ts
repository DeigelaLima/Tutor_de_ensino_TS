
import { TestSmells } from '../testSmellsTypes';


export function getTestSmellById(id: number) {
    const testSmell = TestSmells.find((ts) => ts.id === id);
    return testSmell;
}

export function getTestSmells() {
    return TestSmells
}