const db = require('../data/dbs.calls');
const readingTime = require('reading-time');
const { uploadImage } = require('../utils/imageUploader');

const createPost = async (req, res) => {
    try {
        const { title, body} = req.body;
        const data = {title, body}
        const stats = readingTime(body);
        data.read_time = stats.minutes;
        data.date = Date.now();
        data.image = uploadImage(req.files.image);
        
        // const response = await db.createPost(data)

        // res.status(201).json({
        //     status: "success",
        //     message: "post created successfully",
        //     data: {
        //         response
        //     }
        // })
    } catch(err){
        res.status(400).json({
            status: "error",
            message: "Error creating post",
            details: err.message
        })
    }
}

const updatePost = async (req, res) => {
    try {
        const {title, body} = req.body;
        const {id} = req.params;
        const postDetails = await db.getOnePost(id);

        let response = await db.updatePost(id, {
            title: title == undefined ? postDetails.title : title,
            body: body == undefined ? postDetails.body : body
        });

        res.status(201).json({
            status: "success",
            message: "post updated successfully",
            data: response
        })
    } catch(err){
        res.status(400).json({
            status: "error",
            message: "Error updating post",
            details: err.message
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const {id} = req.params;

        let response = await db.deletePost(id);

        res.status(200).json({
            status: "success",
            message: "post deleted successfully",
            data: response
        })
        
    } catch(err) {
        res.status(400).json({
            status: "error",
            message: "Error deleting post",
            details: err.message
        })
    }
}

module.exports = {
    createPost,
    updatePost,
    deletePost
};