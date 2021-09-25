import express from "express";

import {
  createConversation,
  getConversations,
} from "../controllers/conversation.controller.js";

import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/").post(auth, createConversation).get(auth, getConversations);

export default router;
