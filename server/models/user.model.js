import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      //   min: 6
    },
    profilePicture: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", UserSchema);
