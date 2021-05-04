import routes from "../routes";
import Video from "../model/video";

export const videoHome = async (req, res) =>{
    try{
        const Videos = await Video.find({}).sort({_id: -1}); 
        res.render("home", {pageTitle : "videoHome", Videos});
    }
    catch(error){
        console.log(error);
        res.render("home", {pageTitle : "videoHome", Videos: []});
    }
} 


export const videoSearch = async (req, res) => {
    const {
        query : {term : searchingBy}
    } = req;
    const Videos = await Video.find({title: { $regex: searchingBy, $options: "i" }});
    console.log(searchingBy);
    res.render("videoSearch", {pageTitle : "videoSearch", searchingBy, Videos});
}

// video Upload
export const videoGetUpload = (req, res) => res.render("upload", {pageTitle : "videoUpload"});
export const videoPostUpload = async (req, res) => {
    const { body: { title, description },
            file: { path }  
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title,
        description
    })
    // To Do: Upload and save
    res.redirect(routes.videoDetail(newVideo.id));
}

// videoEdit
export const videoGetEdit = async (req, res) => {
    const {
        params: {id}
    } = req;
    try
   { const video = await Video.findById(id);
    res.render("edit", {pageTitle : `edit${video.title}`, video});}
    catch(error){
        res.redirect(routes.home);
    }
}
export const videoPostEdit = async (req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
    try{
        await Video.findOneAndUpdate({_id: id}, {title, description});
   }
   catch(error){
       res.redirect(routes.home);
   }
}

export const videos = (req, res) => res.render("videos", {pageTitle : "videos"});

export const videoDelete = async (req, res) => {
    const {
        params :{id}
    } = req
    try{ 
        await Video.findByIdAndRemove(id);
        res.redirect(routes.home);
    }
    catch(error){
        res.redirect(routes.home);
    }
}

export const videoDetail = async (req, res) => {
    const{params: {id}} = req
    try{
    const video = await Video.findById(id); 
    res.render("detail", {pageTitle : video.title, video});
    } catch(error){
        console.log(error);
        res.redirect(routes.videoHome);
    }
}

