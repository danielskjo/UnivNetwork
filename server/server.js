import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();

connectDB();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use("/images", express.static(path.join(__dirname, "/public/images")));

app.use(cors({ origin: "*" }));
app.use(express.json({ extended: false }));
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
//   filename: (req, file, cb) => {
//     cb(null, req.body.name);
//   },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded");
  } catch (err) {
    console.error(err);
  }
});

app.get("/", (_, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
