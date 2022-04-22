const { Schema, model, Types } = require('mongoose');


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
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})


const Post = new model('Post', PostSchema);

module.exports = Post;