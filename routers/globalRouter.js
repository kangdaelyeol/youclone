import express from "express"
import { usergetJoin, userpostJoin, userGetLogin, userPostLogin, userLogout } from "../controllers/userController";
import { videoHome, videoSearch } from "../controllers/videoController";
import routes from "../routes"
const globalRouter = express.Router();

globalRouter.get(routes.join, usergetJoin);
globalRouter.post(routes.join, userpostJoin);

globalRouter.post(routes.login, userPostLogin);
globalRouter.get(routes.login, userGetLogin);

globalRouter.get(routes.home, videoHome);
globalRouter.get(routes.logout, userLogout);
globalRouter.get(routes.search, videoSearch);
export default globalRouter

