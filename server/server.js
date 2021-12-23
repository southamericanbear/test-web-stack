require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const models = require("./models");
const schema = require("./schema/schema");

const app = express();

const PORT = process.env.PORT;
const URI = process.env.DB_URI;
mongoose.Promise = global.Promise;
mongoose.connect(URI);
mongoose.connection
  .once("open", () => console.log("Connected to MongoDB instance."))
  .on("error", (error) =>
    console.log(`Error conecting to MongoDB instance: ${error}`)
  );

app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
