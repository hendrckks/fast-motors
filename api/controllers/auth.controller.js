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
    if (email === "" || password === "")
      return next(errorHandler(400, "All fields reuired"));
    const validUser = await User.findOne({ email: email });
    if (!validUser) return next(errorHandler(404, "user not found"));
    const validPassword = bycrypt.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "invalid Password"));

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

export const google = async (req, res, next) => {
  const saltRounds = 10;
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = user._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    } else {
      const generatePassword = Math.random().toString(36).slice(-8);
      const hashedPassword = bycrypt.hashSync(generatePassword, saltRounds);
      const newUser = new User({
        username:
          req.body.name.split("").join("").toLowerCase() +
          Math.random().toString(36).slice(-4),
        email: req.body.email,
        password: hashedPassword,
        avatar: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: pass, ...rest } = newUser._doc;
      res
        .cookie("access_token", token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
  } catch (err) {
    next(err);
  }
};
