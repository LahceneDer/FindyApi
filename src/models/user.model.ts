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
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
    },
    password: String,
})

export default model('User', userSchema)