import { Router } from "express";
import { loginController, registerController } from "../controllers/auth.controllers";
import { verifyToken } from "../middlewares/auth.middleware";
import { loginSchema, registerSchema } from "../validation/auth.validations";
const validator = require("express-joi-validation").createValidator()

const router = Router()

router.route('/register').post(validator.body(registerSchema), registerController)

router.route('/login').post(validator.body(loginSchema), loginController)

// test route
router.route('/test').get(verifyToken, (req: any, res: any) => {
    res.send('request passed')
})
export default router;