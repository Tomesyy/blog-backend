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

const getAllPost = async() => {
    return postModel.find()
}

const deletePost = async(id) => {
    return postModel.findByIdAndDelete(id)
}

const incrementViews = async(id) => {
    const details = await getOnePost(id);
    const newNumber = details.views+1
    await updatePost(id, {views: newNumber});
}

const incrementLikes = async(id) => {
    const details = await getOnePost(id);
    const newNumber = details.likes+1
    await updatePost(id, {likes: newNumber});
}


module.exports = {
    createPost,
    updatePost,
    getOnePost,
    getAllPost,
    deletePost,
    incrementViews,
    incrementLikes
}