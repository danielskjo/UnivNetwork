import asyncHandler from "express-async-handler";

import Message from "../models/message.model.js";

const getMessages = asyncHandler(async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

const sendMessage = asyncHandler(async (req, res) => {
  const newMessage = new Message({
    conversationId: req.params.conversationId,
    body: req.body.body,
    senderId: req.user.id,
  });

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

export { getMessages, sendMessage };
