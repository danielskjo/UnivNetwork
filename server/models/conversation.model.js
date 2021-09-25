const mongoose = require("mongoose");

const ConversationSchema = new Schema(
  {
    users: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("conversation", ConversationSchema);
