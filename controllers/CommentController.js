const Comment = require('../models/Comment')
const Post = require('../models/Post')



const CommentController = {

    // look at comments 
    getComments(req,res) {
        Comment.find().then(results => res.json(results));
    },

    // add a comment to post
    createComment({params, body}, res){
        Comment.create(body)
        .then(({ _id }) => {
          return Post.findOneAndUpdate(
            { _id: params.PostId },
            { $push: { comments: _id } },
            { new: true }
          );
        })
        .then(dbPostData => {
         
          if (!dbPostData) {
            res.status(404).json({ message: 'No Post found with this id!' });
            return;
          }
          res.json(dbPostData);
        })
        .catch(err => res.json(err));
},
addReply({ params, body }, res) {
    Comment.findOneAndUpdate(
      { _id: params.commentId },
      { $push: { replies: body } },
      { new: true, runValidators: true }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No pizza found with this id!' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => res.json(err));
  },
}

module.exports = CommentController;