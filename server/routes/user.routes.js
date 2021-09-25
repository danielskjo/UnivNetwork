import express from "express";

import {
  authenticateUser,
  registerUser,
  getUser,
  editUser,
  deleteUser,
} from "../controllers/user.controller.js";

import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/").post(authenticateUser);
router.route("/register").post(registerUser);
router
  .route("/:id")
  .get(auth, getUser)
  .put(auth, editUser)
  .delete(auth, deleteUser);

export default router;