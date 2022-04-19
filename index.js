const express = require("express");
const mongoose = require("mongoose");

const port = 9000;

const app = express();

app.use(express.json());
app.use(require("./routes"));

mongoose
  .connect(
    "mongodb+srv://Galahad:20030909Bella@cluster0.5mvo4.mongodb.net/Online-Library"
  )
  .then(() => {
    app.listen(port, () => console.log("Server has been started"));
  });
