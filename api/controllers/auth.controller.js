import User from "../models/user.model.js";
import bycrypt from "bcrypt";

export const signUp = async (req, res, next) => {
  const saltRounds = 10;
  const { username, email, password } = req.body;
  const hashpassword = await bycrypt.hashSync(password, saltRounds);
  const newUser = new User({ username, email, password: hashpassword });
  try {
    await newUser.save();
    res.status(201).json("user succesfully created");
  } catch (err) {
    next(err);
  }
};
