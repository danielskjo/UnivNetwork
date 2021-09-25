import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();

connectDB();

app.use(cors({ origin: "*" }));
app.use(express.json({ extended: false }));

app.get("/", (_, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
