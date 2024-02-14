import express from "express";
import { signUp } from "../controllers/auth.controller.js";
import cors from "cors";

const router = express.Router();

const app = express();

app.options("/signup", cors());
router.post("/signup", cors(), signUp);

export default router;
