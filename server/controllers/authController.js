import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from "../model/userModel.js"

// Register Controller
export const registerController = async (req, res) => {
    const { userName, email, password } = req.body;

    // Check if all fields are provided
    if (!userName || !email || !password) {
        return res.json({ success: false, message: "All fields are required" });
    }

    try {
        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save new user
        const newUser = new UserModel({
            userName,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Create JWT token for the user
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: '3d', 
        });

        // Send token as a cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.ENV_STATE === "production",
            sameSite: 'Strict', 
        });

        // Return success message
        return res.json({success: true, message: "User registered successfully" });

    } catch (error) {
        console.error(error); 
        return res.json({ success: false, message: "Something went wrong, please try again later",});
    }
};

//Login Controller
export const loggedInController = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.json({success: false, message: "Fields are required"})
    }

    try {
        //Check whether user exits or not
        const checkExisting = await UserModel.findOne({ email })
        if (!checkExisting) {
            return res.json({success: false, message: "Invalid credentials"})
        }

        //check password matched
        const isMatch = await bcrypt.compare(password, checkExisting.password)
        if (!isMatch) {
          return res.json({success: false, message: "Invalid credentials"})  
        }

        // Create JWT token for the user
        const token = jwt.sign({ id: checkExisting._id }, process.env.JWT_SECRET, {
            expiresIn: '3d', 
        });

        // Send token as a cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.ENV_STATE === "production",
            sameSite: 'Strict', 
        });

        // Return success message
        return res.json({ success: true, message: "User LoggedIn successfully" });
        
    } catch (error) {
        console.log(error)
        return res.json({success:false, message: "Internal server error"})
    }
}

//Logout Controller
export const logoutUser = async (req, res) => {
      res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.ENV_STATE === "production",  
        sameSite: 'Strict', 
      });
    return res.json({ success: true, message: "Logged out successfully" });
}

//Check user logged
export const checkAuth = async (req, res) => {
    const userId = req.user
    if (!userId) {
        return res.json({success: false, message:"User not loggedIn"})
    }
    return res.json({success: true, message:"User is loggedIn"})
}