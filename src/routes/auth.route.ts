import express from "express";
import { login, test, signup, logout } from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter.get("/", test);

authRouter.get("/login", login);

authRouter.get("/signup", signup);

authRouter.get("/logout", logout);

export default authRouter;
