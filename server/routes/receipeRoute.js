import { addReceipe } from "../controllers/receipeController.js";
import express from "express"

const ReceipeRouter = express.Router();

ReceipeRouter.post('/add-receipes', addReceipe)

export default ReceipeRouter