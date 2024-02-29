const { readFileSync } = require('fs');
const paths = require('./path')
const descriptions = require('./descriptions')
const refactorationStep = require('./refactorationStep')

const allExercises = [
    {
        "id" : 1,
        "categoryId" : 1,
        "categoryName": "Ignored Test",
        "description": descriptions.de1,
        "refactoration": refactorationStep.refSmell1,
        "text" : readFileSync(paths.ignoreTestPath.exercise1, 'utf-8'),
        "textRefactored" : readFileSync(paths.ignoreTestPath.exercise1refactored, 'utf-8')
    },
    {
        "id" : 2,
        "categoryId" : 1,
        "categoryName": "Ignored Test",
        "description": descriptions.de2,
        "refactoration": refactorationStep.refSmell2,
        "text" : readFileSync(paths.ignoreTestPath.exercise2, 'utf-8'),
        "textRefactored" : readFileSync(paths.ignoreTestPath.exercise2refactored, 'utf-8')
    },
    {
        "id" : 3,
        "categoryId" : 1,
        "categoryName": "Ignored Test",
        "description": descriptions.de3,
        "refactoration": refactorationStep.refSmell3,
        "text" : readFileSync(paths.ignoreTestPath.exercise3, 'utf-8'),
        "textRefactored" : readFileSync(paths.ignoreTestPath.exercise3refactored, 'utf-8')
    },
    {
        "id" : 4,
        "categoryId" : 2,
        "categoryName": "Eager Test",
        "description": descriptions.de4,
        "refactoration": refactorationStep.refSmell4,
        "text" : readFileSync(paths.eagerTestPath.exercise1, 'utf-8'),
        "textRefactored" : readFileSync(paths.eagerTestPath.exercise1refactored, 'utf-8')
    },
    {
        "id" : 5,
        "categoryId" : 2,
        "categoryName": "Eager Test",
        "description": descriptions.de5,
        "refactoration": refactorationStep.refSmell5,
        "text" : readFileSync(paths.eagerTestPath.exercise2, 'utf-8'),
        "textRefactored" : readFileSync(paths.eagerTestPath.exercise2refactored, 'utf-8')
    },
    {
        "id" : 6,
        "categoryId" : 2,
        "categoryName": "Eager Test",
        "description": descriptions.de6,
        "refactoration": refactorationStep.refSmell6,
        "text" : readFileSync(paths.eagerTestPath.exercise3, 'utf-8'),
        "textRefactored" : readFileSync(paths.eagerTestPath.exercise3refactored, 'utf-8')
    },
    {
        "id" : 7,
        "categoryId" : 3,
        "categoryName": "Duplicate Assert",
        "description": descriptions.de7,
        "refactoration": refactorationStep.refSmell7,
        "text" : readFileSync(paths.duplicateAssertPath.exercise1, 'utf-8'),
        "textRefactored" : readFileSync(paths.duplicateAssertPath.exercise1refactored, 'utf-8')
    },
    {
        "id" : 8,
        "categoryId" : 3,
        "categoryName": "Duplicate Assert",
        "description": descriptions.de8,
        "refactoration": refactorationStep.refSmell8,
        "text" : readFileSync(paths.duplicateAssertPath.exercise2, 'utf-8'),
        "textRefactored" : readFileSync(paths.duplicateAssertPath.exercise2refactored, 'utf-8')
    },
    {
        "id" : 9,
        "categoryId" : 3,
        "categoryName": "Duplicate Assert",
        "description": descriptions.de9,
        "refactoration": refactorationStep.refSmell9,
        "text" : readFileSync(paths.duplicateAssertPath.exercise3, 'utf-8'),
        "textRefactored" : readFileSync(paths.duplicateAssertPath.exercise3refactored, 'utf-8')
    },
    {
        "id" : 10,
        "categoryId" : 4,
        "categoryName": "Assertion Roulette",
        "description": descriptions.de10,
        "refactoration": refactorationStep.refSmell10,
        "text" : readFileSync(paths.assertionRoulettePath.exercise1, 'utf-8'),
        "textRefactored" : readFileSync(paths.assertionRoulettePath.exercise1refactored, 'utf-8')
    },
    {
        "id" : 11,
        "categoryId" : 4,
        "categoryName": "Assertion Roulette",
        "description": descriptions.de11,
        "refactoration": refactorationStep.refSmell11,
        "text" : readFileSync(paths.assertionRoulettePath.exercise2, 'utf-8'),
        "textRefactored" : readFileSync(paths.assertionRoulettePath.exercise2refactored, 'utf-8')
    },
    {
        "id" : 12,
        "categoryId" : 4,
        "categoryName": "Assertion Roulette",
        "description": descriptions.de12,
        "refactoration": refactorationStep.refSmell12,
        "text" : readFileSync(paths.assertionRoulettePath.exercise3, 'utf-8'),
        "textRefactored" : readFileSync(paths.assertionRoulettePath.exercise3refactored, 'utf-8')
    }
]

module.exports = {allExercises}