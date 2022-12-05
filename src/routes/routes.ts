import { Router } from "express";
import articleRouter from "./article.routes"
import authRouter from "./auth.routes"
const router = Router()

router.use('/articles', articleRouter)
router.use('/auth', authRouter)


export default router