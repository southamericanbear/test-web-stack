require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT;
const MONGO_PASS = process.env.MONGO_PASS;

console.log(MONGO_PASS);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
