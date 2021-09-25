import asyncHandler from "express-async-handler";

import Conversation from "../models/conversation.model.js";

const getConversations = asyncHandler(async (req, res) => {
  try {
    const conversation = await Conversation.find({
      users: { $in: [req.user.id] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

const createConversation = asyncHandler(async (req, res) => {
  const newConversation = new Conversation({
    users: [req.user.id, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { getConversations, createConversation };
