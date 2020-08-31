const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    read_time: { type: Number, required: true },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    date: { type: Date, required: true}
})

const PostModel = mongoose.model('Post', BlogPost);

module.exports = PostModel
