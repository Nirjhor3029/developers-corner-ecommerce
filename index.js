import express from "express";
import dbConnect from "./config/dbConnect.js";

import authRouter from "./routes/authRoute.js";
import bodyParser from "body-parser";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";

// import dotenv from "dotenv";
// dotenv.config();
import "dotenv/config";

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
app.use(notFound);
app.use(errorHandler);








app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}. \n http://localhost:${PORT}`);
});
