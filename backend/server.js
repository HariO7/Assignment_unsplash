require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./database/database.modal");
const multer = require("multer");

const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/static", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "../frontend/public/uploads");
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/photos", (req, res) => {
  pool.query(`SELECT * FROM UNSPLASHTABLE`, [], (err, results) => {
    if (err) throw err;
    res.json(results.rows);
  });
});

app.post("/photos", upload.single("photo"), (req, res) => {
  let id = Math.floor(Math.random() * 9000);
  let label = req.file.originalname.slice(0, 10);
  let image = req.file.originalname;
  try {
    pool.query(
      `INSERT INTO UNSPLASHTABLE(id,label,image)
     VALUES ($1,$2,$3)
     RETURNING id`,
      [id, label, image],
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.json(results.rows);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
