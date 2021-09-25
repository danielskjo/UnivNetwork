const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

const connectDB = require("./config/db.js");

dotenv.config();

const app = express();

connectDB();

app.use("/images", express.static(path.join(__dirname, "public/images")));

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
