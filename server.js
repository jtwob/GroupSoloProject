const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoutes.js");
const scoreRoutes = require("./routes/apiRoutes.js");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1/users");

app.use("/api/users", userRoutes);
app.use("/api/scores", scoreRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now at http://localhost:${PORT}`);
});
