const express = require("express");
const mongoose = require("mongoose");
const productRoute = require('./routes/product.route')


require('dotenv').config();
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to home page");
});

app.use(productRoute)

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
