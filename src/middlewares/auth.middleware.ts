import jwt from "jsonwebtoken"
import { Response } from "express"

const config: any = process.env

export const verifyToken = (req: any, res: Response, next: any) => {
    let token = req.body.token || req.query.token || req.headers["authorization"]

    if (!token) {
        return res.status(403).json({ success: false, data: "A token is required for authentication" })
    }

    try {
        token = token.split(" ")[1]
        const decoded = jwt.verify(token, config.TOKEN_KEY)
        req.user = decoded
    } catch (error) {
        return res.status(401).json({ success: false, data: "Invalid token" })
    }
    return next()
}