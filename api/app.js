import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("database connected succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

const PORT = 5173;
app.listen(PORT, () => {
  {
    console.log("Server is running on port 5173...");
  }
});
