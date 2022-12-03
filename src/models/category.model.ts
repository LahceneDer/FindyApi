import { model, Schema, Types } from 'mongoose'

// category interface
export interface ICategory {
    _id: string,
    name: string,
    parentId: string,
}

// category schema
const categorySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Name required"]
    },
    parentId: {
        type: Types.ObjectId,
        default: 0,
        ref: "Category"
    }
})

export default model<ICategory>('Category', categorySchema)