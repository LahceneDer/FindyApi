import { model, Schema, Types } from 'mongoose'
import { ICategory } from './category.model'
import { IComment } from './comment.model'
import { IUser } from './user.model'

// article interface
export interface IArticle {
    title: string,
    body: string,
    category: [ICategory],
    author: [IUser],
    comments: [IComment],
    likes: number,
}

// article schema
const articleSchema = new Schema({
    title: {
        type: String,
        trim: true,
        maxLength: 40,
        required: [true, "Title required"]
    },
    body: {
        type: String,
        trim: true,
        required: [true, "Title required"]
    },
    category: {
        type: Types.ObjectId,
        trim: true,
        // required: [true, "Category required"],
        ref: "Category"
    },
    author: {
        type: Types.ObjectId,
        trim: true,
        // required: [true, "Category required"],
        ref: "User"
    },
    comments: {
        type: [Types.ObjectId],
        default: [],
        ref: "Comment"
    },
    likes: {
        type: Number,
        default: 0,
    },
})

export default model('Article', articleSchema)