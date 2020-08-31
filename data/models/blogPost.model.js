const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    title: String,
    body: String,
    read_time: Number,
    views: Number,
    likes: Number
})

const PostModel = mongoose.Model('Post', BlogPost);

module.exports = {
    PostModel
}
