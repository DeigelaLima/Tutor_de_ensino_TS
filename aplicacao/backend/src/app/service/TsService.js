const exercises = require('../models/exercises')
const NotFound = require('./errors/NotFound')

class TsService {
    findExerciseById(id) {
        const exercise = exercises.allExercises.find(e => e.id == id);

        if (!exercise) {
            throw new NotFound('Exercise Not Found');
        }

        return exercise.text;
    }
    findExerciseRefactoredById(id) {
        const exercise = exercises.allExercises.find(e => e.id == id);

        if (!exercise) {
            throw new NotFound('Exercise Refactored Not Found');
        }

        return exercise.textRefactored;
    }
    
}

module.exports =  TsService 