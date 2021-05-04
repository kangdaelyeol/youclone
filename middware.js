import routes from "./routes";
import multer from "multer";

const multerVideo = multer({dest: "uploads/videos/"});

export const middleware = (req, res, next) => {
    res.locals.routes = routes;
    res.locals.siteName = "Wetube";
    res.locals.user = {
        isAuthenticated: true,
        id: 5
    }
    next();
}


export const uploadVideo = multerVideo.single('videoFile');

