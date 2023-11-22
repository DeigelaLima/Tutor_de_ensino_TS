const { Router } = require("express");
const cors = require("cors");
const TsController = require("../app/controllers/TsController");
const bodyParser = require('body-parser')
const typeBody =  bodyParser.text({type:"*/*"})

const tsRouter = Router();

const whitelist = [
    'http://localhost:8080',
    'http://localhost:3000',
    'https://tutor-de-ensino-ts.vercel.app'
  ];
  
  const corsOptions = {
    origin(origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };


tsRouter.use(cors(corsOptions));

tsRouter.get('/exercises', TsController.getAllExercises)
tsRouter.get('/exercises/:id', TsController.getExerciseByCategoryId)

tsRouter.get('/exercise/:id', TsController.getExerciseObjectById)
tsRouter.get('/exerciseRefactored/:id', TsController.getExerciseRefactoredById)

tsRouter.put('/exercise/:id', typeBody, TsController.refactorExercise)


module.exports = tsRouter;