import { match } from "assert";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple documents to have a null value for this field
    },
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowerCase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
    },
    mobile: {
      type: String,
      unique: true,
      trim: true,
      match: [
        /^\+94\d{9}$/,
        "Please fill a valid number: (e.g.: +94773245500)",
      ],
    },
    password: {
      type: String,
    },
    userType: {
      type: String,
      required: true,
      enum: ["attendee", "organizer", "admin"],
      default: "attendee",
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
