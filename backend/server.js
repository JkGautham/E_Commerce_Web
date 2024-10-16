import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from './routes/userRoute.js'

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/api/user',userRouter)

//api end point
app.get("/", (req, res) => res.send("API Working"));
app.listen(port, () => console.log("server started at " + port));
connectDb();
connectCloudinary();
