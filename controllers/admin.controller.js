const db = require('../data/dbs.calls');
const readingTime = require('reading-time');
const { uploadImage } = require('../utils/imageUploader');
const jwt = require('jsonwebtoken');


const loginAdmin = async(req, res) => {
    try{
        const { username, password } = req.body;
        if(username.toLowerCase() != process.env.ADMIN_USERNAME.toLowerCase() ||
            password != process.env.ADMIN_PASSWORD){
                res.status(403).json({
                    status: "error",
                    message: "incorrect username or password"
                })
            } else {
                const token = await jwt.sign({username, password}, process.env.JWT_SECRET, {
                    expiresIn: '1h'
                })
                
                res.status(202).json({
                    status: "success",
                    message: "admin login successful",
                    token: token
                })
            }

    } catch(err){
        res.status(400).json({
            status: "error",
            message: "Error logging admin in",
            details: err.message
        })
    }
}

const createPost = async (req, res) => {
    try {
        const { title, body} = req.body;
        const data = {title, body}
        const stats = readingTime(body);
        data.read_time = stats.minutes;
        data.date = Date.now();
        const result = await uploadImage(req.files.image); // complete uploader to return image url
        data.image = result.url;

        const response = await db.createPost(data)

        res.status(201).json({
            status: "success",
            message: "post created successfully",
            data: {
                response
            }
        })
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
    loginAdmin,
    createPost,
    updatePost,
    deletePost
};