import { Router } from "express";
import articleRouter from "./article.routes"
const router = Router()

router.use('/articles', articleRouter)


export default router