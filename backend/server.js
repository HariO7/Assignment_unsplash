require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { pool } = require("./database/database.modal");

const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
