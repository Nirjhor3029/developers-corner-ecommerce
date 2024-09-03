import express from "express";
import { createUser } from "../controller/userController.js";

const router = express.Router();


const registerUser = (req,res) =>{
    console.log(`req.body: ${req.body}`);
    res.send("Register User");
};

router.post("/register", createUser);
router.get("/register", registerUser);

export default router;