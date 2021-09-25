import mongoose, { Schema } from "mongoose";

const ConversationSchema = new Schema(
  {
    users: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("conversation", ConversationSchema);
