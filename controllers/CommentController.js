const Comment = require('../models/Comment')
const Post = require('../models/Post')



const CommentController = {

    // look at comments 
    getComments(req,res) {
        Comment.find().then(results => res.json(results));
    },

    // add a comment to post
    createComment({params, body}, res,req){
        Comment.create(body)
        .then(({ _id }) => {
          return Post.findOneAndUpdate(
            { _id: params.id },
            { $push: { comments: _id } },
            { new: true }
          );
        })
        .then(dbPostData => {
         
          if (!dbPostData) {
            res.status(404).json({ message: 'No Post found with this id!' });
            return;
          }
          // res.json(dbPostData);
          res.redirect('/api/posts');
       
        })
        .catch(err => (console.log(err)));
},
addReply({ params, body }, res) {
    Comment.findOneAndUpdate(
      { _id: params.id },
      { $push: { replies: body } },
      { new: true, runValidators: true }
    )
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id!' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => res.json(err));
  },
}

module.exports = CommentController;