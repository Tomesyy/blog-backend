const db = require('../data/dbs.calls');

const getAllPosts = async (req, res) => {
    var response = await db.getAllPost();

    res.status(200).json({
        status: "success",
        message: "fetched all posts successfully",
        data: response 
    })
}

const viewPost = async (req, res) => {
    const { id } = req.params;
    await db.incrementViews(id);

    var response = await db.getOnePost(id);
    res.status(200).json({
        status: "success",
        message: "fetched post successfully",
        data: response 
    })
}

const likePost = async (req, res) => {
    const { id } = req.params;
    await db.incrementLikes(id);

    var response = await db.getOnePost(id);
    res.status(200).json({
        status: "success",
        message: "fetched post successfully",
        data: response 
    })
}

module.exports = {
    getAllPosts,
    viewPost,
    likePost
}