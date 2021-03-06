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
const CONNECTION_URL = 

const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log("MongoDB Connected !!")))
    .catch((err) => console.log(err.message));

