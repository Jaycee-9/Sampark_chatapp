import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  sub: {
    type: String,
    required: true,
    unique: true,
  },
});

const user = mongoose.model("user-data", userSchema);
export default user;
