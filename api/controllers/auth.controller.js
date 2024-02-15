import User from "../models/user.model.js";
import bycrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import cryptoJs from "crypto-js";

const key = cryptoJs.lib.WordArray.random(32);
// console.log("Generated Key:", key.toString());

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

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) return;
    errorHandler(404, "user not found");
    const validPassword = bycrypt.compareSync(password, validUser.password);
    if (!validPassword) return;
    errorHandler(401, "ivalid Password");
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    //to prevent the password being sent to the client
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};
