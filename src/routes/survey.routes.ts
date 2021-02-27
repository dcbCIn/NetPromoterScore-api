import { Router } from "express";
import { SurveyController } from "../controllers/SurveyController";

const surveyRouter = Router()
const surveyController = new SurveyController()

surveyRouter.post('/surveys', surveyController.create )
surveyRouter.get('/surveys', surveyController.show )

export default surveyRouter