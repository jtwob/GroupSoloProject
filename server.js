const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoutes.js");
const app = express();
const mongoose = require("mongoose");
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/bikes",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    },
    (err) => {
      if (err) throw err;
      console.log("connected to mongodb");
    }
  );

  app.use("/api/users", userRoutes);

  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now at http://localhost:${PORT}`);
  });
