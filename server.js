const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoutes.js");
const postRoutes = require("./routes/apiRoutes.js");
const cors = require('cors');
require('dotenv').config()
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/users");

app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now at http://localhost:${PORT}`);
});
