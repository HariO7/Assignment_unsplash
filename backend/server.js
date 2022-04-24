require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./database/database.modal");
const multer = require("multer");
const fs = require("fs");

const port = process.env.PORT;

const app = express();
const upload = multer({ dest: "./uploads/" });

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("./uploads"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.post("/photos", upload.single("photo"), (req, res) => {
  let filename = req.file.filename;
  let fileType = req.file.mimetype.split("/")[1];
  let image = `${filename}.${fileType}`;
  fs.rename(`./uploads/${filename}`, `./uploads/${image}`, () => {
    console.log("created inmage");
  });
  res.send("200");
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
