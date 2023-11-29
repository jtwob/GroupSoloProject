const express = require('express')
const app = express()
const PORT = 8080

const routes = require("./routes.js");

app.use("/", routes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));