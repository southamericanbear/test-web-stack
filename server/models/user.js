const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: { type: String },
  name: { type: String },
  dob: { type: String },
  adress: { type: String },
  description: { type: String },
  createdAt: { type: String },
  updatedAt: { type: String },
});

mongoose.model("user", UserSchema);
