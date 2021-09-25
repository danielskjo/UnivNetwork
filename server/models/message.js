import mongoose, { Schema } from "mongoose";

const MessageSchema = new Schema(
  {
    conversationId: {
      type: String,
    },
    sender: {
      type: String,
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("message", MessageSchema);
