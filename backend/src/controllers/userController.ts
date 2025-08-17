import { User } from "../models/userModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import passport from "passport";

/**
 * @route GET /api/users/register
 */
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { fullName, email, mobile, password, userType } = req.body;

    if (!fullName || !email || !password || !userType) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const nameParts = fullName.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || firstName;

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

    if (user && (await bcrypt.compare(password, user.password!))) {
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

/**
 * Google OAuth authentication
 * @route GET /api/users/auth/google
 *  */
export const googleAuth = passport.authenticate("google", {
  scope: ["profile", "email"],
});

/**
 * Handle Google OAuth callback
 * @route GET /api/users/auth/google/callback
 */
export const googleAuthCallback = (req: Request, res: Response) => {
  const token = jwt.sign(
    { id: (req.user as any)._id },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "7d",
    }
  );

  res.status(200).json({
    message: "Successfully logged in with Google",
    token: token,
    user: req.user,
  });
};
