const { Router } = require("express");
const TsController = require("../app/controllers/TsController");
const bodyParser = require('body-parser')
const typeBody =  bodyParser.text({type:"*/*"})

const tsRouter = Router();

tsRouter.get('/exercises/:id', TsController.getExerciseById)
tsRouter.put('/exercises/:id', typeBody, TsController.refactorExercise)

module.exports = tsRouter;