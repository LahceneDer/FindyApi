import { Router } from "express";
import { getArticlesController } from "../controllers/article.controllers";
const router = Router()

router.route('/').get(getArticlesController)

export default router