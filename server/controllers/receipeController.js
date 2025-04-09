import RecepieModel from "../model/ReceipeModel.js";

//Add Receipe
export const addReceipe = async (req, res) => {
    const { title, description, ingredients, preparation, category } = req.body;

    if (!title || !description || !ingredients || !preparation || !category) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }
    try {
        const receipe = new RecepieModel({ title, description, ingredients, preparation, category });
        await receipe.save();
        return res.json({ success: true, message: "Receipe added successfully" });
    } catch (error) {    
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}