import { Request, Response } from "express"
import userModel from "../models/user.model"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"



export const registerController = async (req: Request, res: Response) => {
    try {
        const { username, password, email } = req.body

        // check if user exists
        const userExists = await userModel.exists({ email })
        if (userExists) {
            return res.status(409).json({ success: false, data: "Email already in use." })
        }

        // encrypt password
        const encryptedPassword = await bcrypt.hash(password, 10)

        // create user document and save it to database
        const user = await userModel.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword
        })

        // create JWT token
        const TOKEN = jwt.sign(
            {
                userId: user._id,
                email
            },
            `${process.env.TOKEN_KEY}`,
            {
                expiresIn: "24h"
            }
        )

        res.status(201).json({ success: true, data: user, token: TOKEN })
    } catch (error) {
        return res.status(500).json({ success: false, data: error })
    }
}

export const loginController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        const user = await userModel.findOne({ email: email.toLowerCase() }).select("+password")
        console.log(user);

        const userPassword: string = user?.password!
        console.log(userPassword);


        const match = await bcrypt.compare(password, userPassword)
        let TOKEN = ""
        if (user && match) {
            // send new token
            TOKEN = jwt.sign(
                {
                    userId: user._id,
                    email
                },
                `${process.env.TOKEN_KEY}`,
                {
                    expiresIn: "24h"
                }
            )
            console.log(TOKEN);

            return res.status(200).json({ success: true, data: user, token: TOKEN })
        }
        return res.status(400).json({ success: false, data: 'Invalid credentials, Please try again' })
    } catch (error) {
        return res.status(400).json({ success: false, data: error })
    }
}