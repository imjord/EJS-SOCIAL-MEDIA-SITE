const { Schema, model, Types } = require('mongoose');


const ReplySchema = new Schema(
    {
        replyId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        replyBody: {
            type: String,
            required: true
        },
        writtenBy: {
            type: String,
            required: true,
            trim: true
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
    }
)


const CommentSchema = new Schema({
    
    writtenBy: {
        type: String,
        required: true
    },
    commentBody: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    
        replies: 
            [ReplySchema]
   
 


})


const Comment = model('Comment', CommentSchema);


module.exports = Comment;