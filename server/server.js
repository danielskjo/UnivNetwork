const express = require("express");

const app = express();

app.get("/", (_, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on localhost:${PORT}`));
