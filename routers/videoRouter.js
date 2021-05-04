import express from "express"
import { videoDelete, videoDetail, videoGetEdit, videoPostEdit, videos, videoGetUpload, videoPostUpload } from "../controllers/videoController";
import routes from "../routes"
import {uploadVideo} from "../middware"
const videoRouter = express.Router();

videoRouter.get(routes.upload, videoGetUpload);
videoRouter.post(routes.upload, uploadVideo, videoPostUpload);

videoRouter.get(routes.editVideo(), videoGetEdit);
videoRouter.post(routes.editVideo(), videoPostEdit);

videoRouter.get(routes.videos, videos );
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.deleteVideo(), videoDelete);
export default videoRouter