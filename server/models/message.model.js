import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
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
