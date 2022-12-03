import { model, Schema, Types } from 'mongoose'


// comment interface
export interface IComment {
    _id: string,
    body: string,
    article: string,
    user: string,
}

// comment schema
const commentSchema = new Schema({
    body: {
        type: String,
        trim: true,
        required: [true, "Body required"]
    },
    article: {
        type: Types.ObjectId,
        required: [true, "articleId required"],
        ref: "Article"
    },
    user: {
        type: Types.ObjectId,
        required: [true, "userId required"],
        ref: "User"
    }
})

export default model('Comment', commentSchema)