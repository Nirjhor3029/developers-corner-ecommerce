import express from "express";
import dbConnect from "./config/dbConnect.js";
import dotenv from "dotenv";
import authRouter from "./routes/authRoute.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();

// app.use('/',(request,response)=>{
//     console.log("Backend server is running!");
//     response.send("Response: Backend server is running!");
// });

app.use((bodyParser.json()));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user',authRouter);









app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}. \n http://localhost:${PORT}`);
});
