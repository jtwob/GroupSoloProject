const express = require("express");
const path = require("path");
const routes = require("./routes/routes.js");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
