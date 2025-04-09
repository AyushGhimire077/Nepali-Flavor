import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

//file imports
import AuthRouter from './routes/authRoute.js';
import { connectDB } from './config/connectDB.js';
import ReceipeRouter from './routes/receipeRoute.js';

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));
dotenv.config();

// Routes
app.use("/api/auth", AuthRouter)
app.use("/api", ReceipeRouter)


// Connect to DB
connectDB();

// Start server
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hiii")
})

export default app