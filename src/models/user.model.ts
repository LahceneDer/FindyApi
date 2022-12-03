import { model, Schema, Types } from 'mongoose'

var validateEmail = function (email: string) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
// user interface
export interface IUser {
    _id: string,
    email: string,
    password: string,
    avatarUrl: string,
}

// user schema
const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: [true, "Username required"]
    },
    email: {
        type: Types.ObjectId,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Category required"],
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        minlength: 6,
        select: false,
    },
    avatarUrl: {
        type: String,
        default: "",
    },
})

export default model('User', userSchema)