const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// route setup
const battleModal = require("./routes/battle");
app.use("/api/battle", battleModal);

app.listen(5000, () => console.log("Application Running on port 5000"));
