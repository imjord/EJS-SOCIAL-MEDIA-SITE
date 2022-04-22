const { Schema, model } = require('mongoose');


const PostSchema = new Schema({
    username: {
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    post: {
        type: String, 
        required: true
    }
})


const Post = new model('Post', PostSchema);

module.exports = Post;