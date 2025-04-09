import { checkAuth, loggedInController, logoutUser, registerController,  } from "../controllers/authController.js";
import express from "express";
import checkToken from "../middleware/checkToken.js";

const AuthRouter = express.Router();

AuthRouter.post('/register', registerController);
AuthRouter.post('/login', loggedInController)
AuthRouter.post('/logout', logoutUser);
AuthRouter.get('/check-auth', checkToken, checkAuth)


export default AuthRouter;
