import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();
app.use(cors)


app.use("/posts", postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))



//Connection to mongoDB url
const CONNECTION_URL = "mongodb+srv://mo-app:<QSFsS1WfwFhk8r7v>@cluster0.5e5ea.mongodb.net/Mo-appDB?retryWrites=true&w=majority"

const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected !!"))
    .catch((err) => console.log(err.message));

