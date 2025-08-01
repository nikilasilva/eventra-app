import { User } from "../models/userModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { firstName, lastName, email, mobile, password, userType } = req.body;

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hasedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      mobile,
      password: hasedPassword,
      userType,
    });

    res.status(201).json({
      _id: user._id,
      email: user.email,
      message: "Registratoin successful",
    });
  } catch (err) {
    res.status(400).json({ message: "Registration failed", error: err });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // generate jwt token
      const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "7d",
        }
      );

      res.json({
        _id: user._id,
        email: user.email,
        token: token,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    res.status(400).json({ message: "Login failed", error: err });
  }
};

export const getUserProfile = async (req: Request, res: Response) => {
  // This route will be protected, so we can assume we have the user
  // For a real app, you'd get the user from the token via the `protect` middleware
  res.json({ message: "This is a protected profile route." });
};
