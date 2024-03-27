import express from "express";
import {
  deleteUser,
  test,
  updateUser,
  //   getUserListings,
  //   getUser,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
import cors from "cors";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", cors(), verifyToken, updateUser);
router.delete("/delete/:id", cors(), verifyToken, deleteUser);
// router.get("/listings/:id", verifyToken, getUserListings);
// router.get("/:id", verifyToken, getUser);

export default router;
