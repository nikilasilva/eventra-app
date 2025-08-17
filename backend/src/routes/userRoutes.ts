import express from "express";
import passport from "passport";
import {
  registerUser,
  loginUser,
  getUserProfile,
  googleAuth,
  googleAuthCallback,
} from "../controllers/userController";
import { protect } from "../middlewares/authMiddleware";
import jwt from "jsonwebtoken";

const router = express.Router();

// Local authentication
router.post("/register", registerUser);
router.post("/login", loginUser);

// Profile route
router.get("/profile", protect, getUserProfile);

// Google authentication routes
router.get("/auth/google", googleAuth);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  googleAuthCallback
);

export default router;
