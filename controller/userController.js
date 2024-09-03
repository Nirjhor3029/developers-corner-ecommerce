import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

import bcrypt from 'bcrypt';

const createUser = expressAsyncHandler(
    async (req, res) => {
        console.log(`Create User req.body: ${req.body}`);

        const email = req.body.email ?? "";

        const findUser = await User.findOne({ email: email });
        if (findUser) {
            throw new Error("User Already Exist");
            
            return res.status(400).json({
                message: "User Already Exist",
                success: false
            });
        }
        const user = await User.create(req.body);
        res.status(200).json({ user });
    }
);



export { createUser };