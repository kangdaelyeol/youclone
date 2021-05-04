import "./db"
import app from "./app"
import dotenv from "dotenv"
import "./model/comment"
import "./model/video"
dotenv.config();
const PORT = process.env.PORT || 4000;

const handleListen = () => console.log(`http://localhost:${PORT}`);

app.listen(PORT, handleListen);