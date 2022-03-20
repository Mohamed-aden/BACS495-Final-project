import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/myappDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

//Routes

app.post("/Login", (req, res) => {
  res.send("My API for login !!");
});

app.post("/Register", (req, res) => {
  res.send("My API for Register !!");
});

app.get("/", (req, res) => {
  res.send("This can only be executed when type is set to module");
});

app.listen(5000, () => {
  console.log("Server Started on port 5000");
});
