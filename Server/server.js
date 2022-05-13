require("dotenv").config();
const express = require("express");
const app = express();

app.get("/testing", (req, res) => {
  res.send("Testing");
  console.log("Testing");
});
