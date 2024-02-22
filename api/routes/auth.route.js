import express from "express";
import { google, login, signUp } from "../controllers/auth.controller.js";
import cors from "cors";

const router = express.Router();

const app = express();

app.options("/signup", cors());
router.post("/signup", cors(), signUp);
router.post("/login", cors(), login);
router.post("/google", cors(), google);

export default router;
