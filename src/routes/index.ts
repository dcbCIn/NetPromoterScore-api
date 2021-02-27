import { Router } from 'express'

import surveyRouter from './survey.routes'
import userRouter from './user.routes'


const router = Router()

router.use(userRouter)
router.use(surveyRouter)

export default router
