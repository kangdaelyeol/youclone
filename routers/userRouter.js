import express from "express"
import { userChangePassword, userDetail, userEditProfile, users } from "../controllers/userController";
import routes from "../routes"
const userRouter = express.Router();

userRouter.get(routes.changePassword, userChangePassword);
// Do - change pw - verify
// userRouter.post(routes.changePassword, userChangePassword);

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, userEditProfile);
userRouter.get(routes.userDetail(), userDetail);
export default userRouter

