import mongoose from "mongoose";

const ReceipesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    preparation: { type: String, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

const RecepieModel = mongoose.model('Recepie', ReceipesSchema);
export default RecepieModel;