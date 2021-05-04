import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
)

const db = mongoose.connection;
 
const handleDB = () => console.log("✔ connecting DB");
const handleErrorDB = (e) => console.log(`Error connect: ${e}`);

db.once("open", handleDB);
db.on("error", handleErrorDB);