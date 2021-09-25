import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
  {
    users: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("conversation", ConversationSchema);
