const db = require('../data/dbs.calls');
const readingTime = require('reading-time');

const createPost = async (req, res) => {
    const { title, body} = req.body;
    const data = {title, body}
    const stats = readingTime(body);
    data.read_time = stats.minutes;
    data.date = Date.now();
    const response = await db.createPost(data)

    res.status(201).json({
        status: "success",
        message: "post created successfully",
        data: {
            response
        }
    })
}

const updatePost = async (req, res) => {
    const {title, body} = req.body;
    const {id} = req.params;
    const postDetails = await db.getOnePost(id);
    console.log(postDetails)

    let response = await db.updatePost(id, {
        title: title == undefined ? postDetails.title : title,
        body: body == undefined ? postDetails.body : body
    });

    res.status(201).json({
        status: "success",
        message: "post updated successfully",
        data: response
    })
}

const deletePost = async (req, res) => {
    const {id} = req.params;

    let response = await db.deletePost(id);

    res.status(200).json({
        status: "success",
        message: "post deleted successfully",
        data: response
    })
}

module.exports = {
    createPost,
    updatePost,
    deletePost
};