const postModel = require('./models/blogPost.model');

const createPost = (data) => {
    const newPost = new postModel({title: data.title, body: data.body,
         read_time: data.read_time, date: data.date});
    return newPost.save()
}

const updatePost = async (id, data) => {
    return postModel.findByIdAndUpdate(id, data);
}

const getOnePost = async(id) => {
    return postModel.findById(id)
}

const deletePost = async(id) => {
    return postModel.findByIdAndDelete(id)
}



module.exports = {
    createPost,
    updatePost,
    getOnePost,
    deletePost
}