//const exercises = require('../models/exercises')
const NotFound = require('./errors/NotFound')
const exercises = require('../models/exercises');

class TsService {

    listExercises() {
        return exercises.allExercises
    }

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

    findExercisesByCategoryId(id) {
        const exercisesByCategory = exercises.allExercises.filter((e) => e.categoryId == id);

        return exercisesByCategory;
    }
}

module.exports =  TsService 