import mongoose from 'mongoose';

export const connectDB = () => {
    const uri = process.env.MONGO_URI;

    if (!uri) {
        console.error("MONGO_URI is not defined!");
        return;
    }

    mongoose.connect(uri)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log("MongoDB connection error: ", err));
};
