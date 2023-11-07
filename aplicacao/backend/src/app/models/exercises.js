const { readFileSync } = require('fs');
const paths = require('./path')

const allExercises = [
    {
        "id" : 1,
        "text" : readFileSync(paths.ignoreTestPath.exercise1, 'utf-8'),
        "textRefactored" : readFileSync(paths.ignoreTestPath.exercise1refactored, 'utf-8')
    },
    {
        "id" : 2,
        "text" : readFileSync(paths.ignoreTestPath.exercise2, 'utf-8'),
        "textRefactored" : readFileSync(paths.ignoreTestPath.exercise2refactored, 'utf-8')
    },
    {
        "id" : 3,
        "text" : readFileSync(paths.ignoreTestPath.exercise3, 'utf-8'),
        "textRefactored" : readFileSync(paths.ignoreTestPath.exercise3refactored, 'utf-8')
    },
    {
        "id" : 4,
        "text" : readFileSync(paths.eagerTestPath.exercise1, 'utf-8'),
        "textRefactored" : readFileSync(paths.eagerTestPath.exercise1refactored, 'utf-8')
    },
    {
        "id" : 5,
        "text" : readFileSync(paths.eagerTestPath.exercise2, 'utf-8'),
        "textRefactored" : readFileSync(paths.eagerTestPath.exercise2refactored, 'utf-8')
    },
    {
        "id" : 6,
        "text" : readFileSync(paths.eagerTestPath.exercise3, 'utf-8'),
        "textRefactored" : readFileSync(paths.eagerTestPath.exercise3refactored, 'utf-8')
    },
    {
        "id" : 7,
        "text" : readFileSync(paths.duplicateAssertPath.exercise1, 'utf-8'),
        "textRefactored" : readFileSync(paths.duplicateAssertPath.exercise1refactored, 'utf-8')
    },
    {
        "id" : 8,
        "text" : readFileSync(paths.duplicateAssertPath.exercise2, 'utf-8'),
        "textRefactored" : readFileSync(paths.duplicateAssertPath.exercise2refactored, 'utf-8')
    },
    {
        "id" : 9,
        "text" : readFileSync(paths.duplicateAssertPath.exercise3, 'utf-8'),
        "textRefactored" : readFileSync(paths.duplicateAssertPath.exercise3refactored, 'utf-8')
    },
    {
        "id" : 10,
        "text" : readFileSync(paths.assertionRoulettePath.exercise1, 'utf-8'),
        "textRefactored" : readFileSync(paths.assertionRoulettePath.exercise1refactored, 'utf-8')
    },
    {
        "id" : 11,
        "text" : readFileSync(paths.assertionRoulettePath.exercise2, 'utf-8'),
        "textRefactored" : readFileSync(paths.assertionRoulettePath.exercise2refactored, 'utf-8')
    },
    {
        "id" : 12,
        "text" : readFileSync(paths.assertionRoulettePath.exercise3, 'utf-8'),
        "textRefactored" : readFileSync(paths.assertionRoulettePath.exercise3refactored, 'utf-8')
    }
]

module.exports = {allExercises}