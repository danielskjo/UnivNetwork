const mongoose = require("mongoose");

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

module.exports = mongoose.model("message", MessageSchema);
