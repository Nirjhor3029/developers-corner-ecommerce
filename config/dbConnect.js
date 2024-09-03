import mongoose from "mongoose";

const dbConnect = () => {
    try {
        const dbUrl = `${process.env.MONGO_URL}/${process.env.DATABASE_NAME}`;
        const conn = mongoose.connect(dbUrl);
        console.log(`Database Connected Successfully: ${dbUrl}`);
    } catch (error) {
        console.log("Database Error");
        throw new Error(error);
    }
}

export default dbConnect;
// module.exports = dbConnect;