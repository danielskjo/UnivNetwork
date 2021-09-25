import express from "express";

import {
  sendMessage,
  getMessages,
} from "../controllers/message.controller.js";

import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/:conversationId").post(auth, sendMessage).get(auth, getMessages);

export default router;
