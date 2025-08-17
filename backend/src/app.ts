import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import session from "express-session";
import passport from "passport";

import "./config/passport";

dotenv.config();
const app = express();

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/users", userRoutes);

export default app;
