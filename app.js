import express from "express"
import cookieparser from "cookie-parser"
import { middleware } from "./middware"
import morgan from"morgan"
import helmet from "helmet"
import userRouter from"./routers/userRouter"
import videoRouter from "./routers/videoRouter"
import globalRouter from "./routers/globalRouter"

const app = express();

// setting
app.set('view engine', 'pug');

// middleWare
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({extended: false})); // == bodyParser
app.use("/uploads", express.static("uploads"));
app.use(middleware);
app.use( (req, res, next) => {
res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
return next();
});

// router
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;