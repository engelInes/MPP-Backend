import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  // const user = await User.findOne({ email });
  // if (user) {
  //   return res.json({ message: "User already exists" });
  // }
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "user already exists" });
  }
  const newUser = new User({
    username,
    email,
    password,
  });
  await newUser.save();
  return res.json({ status: true, message: "record registered" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const secretKey = process.env.KEY || "defaultSecretKey";
  if (!user) {
    return res.json({ message: "user not registered" });
  }
  const token = jwt.sign({ username: user.username }, secretKey, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "login successful" });
});
export { router as UserRouter };
