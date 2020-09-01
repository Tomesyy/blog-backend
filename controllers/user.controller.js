const db = require('../data/dbs.calls');

const getAllPosts = async (req, res) => {
    try {
        var response = await db.getAllPost();

        res.status(200).json({
            status: "success",
            message: "fetched all posts successfully",
            data: response 
        });

    } catch(err) {
        res.status(400).json({
            status: "error",
            message: "Error getting all posts",
            details: err.message
        })
    }
}

const viewPost = async (req, res) => {
    try {
        const { id } = req.params;
        await db.incrementViews(id);

        var response = await db.getOnePost(id);
        res.status(200).json({
            status: "success",
            message: "fetched post successfully",
            data: response 
        })
    } catch(err) {
        res.status(400).json({
            status: "error",
            message: "Error getting post",
            details: err.message
        })
    }  
}

const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        await db.incrementLikes(id);

        var response = await db.getOnePost(id);
        res.status(200).json({
            status: "success",
            message: "fetched post successfully",
            data: response 
        })
    } catch(err) {
        res.status(400).json({
            status: "error",
            message: "Error liking post",
            details: err.message
        })
    }
}

const paginatePost = async (req, res) => {
    try {

    } catch(err) {

    }

}

module.exports = {
    getAllPosts,
    viewPost,
    likePost,
    paginatePost
}