require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT;
const MONGO_PASS = process.env.MONGO_PASS;

const MONGO_URI = `mongodb+srv://admin:${MONGO_PASS}@cluster0.it2sp.mongodb.net/superformulatest?retryWrites=true&w=majority`;

if (!MONGO_URI) throw new Error("You must provide a MongoDB URI!");

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once("open", () => console.log("Connected to MongoDB instance."))
  .on("error", (error) =>
    console.log(`Error conecting to MongoDB instance: ${error}`)
  );

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
