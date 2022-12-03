import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb://localhost:27017/findyDB'
        );
    } catch (error) {
        console.log("MongoDB error");

    }
    console.log(`MongoDB connected`);
};
