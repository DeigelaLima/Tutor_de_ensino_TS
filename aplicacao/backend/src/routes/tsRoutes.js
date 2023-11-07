const { Router } = require("express");
const TsController = require("../app/controllers/TsController");
const bodyParser = require('body-parser')
const typeBody =  bodyParser.text({type:"*/*"})

const tsRouter = Router();

tsRouter.get('/exercises', TsController.getAllExercises)
tsRouter.get('/exercises/:id', TsController.getExerciseByCategoryId)

tsRouter.get('/exercise/:id', TsController.getExerciseById)
tsRouter.get('/exerciseRefactored/:id', TsController.getExerciseRefactoredById)

tsRouter.put('/exercise/:id', typeBody, TsController.refactorExercise)


module.exports = tsRouter;