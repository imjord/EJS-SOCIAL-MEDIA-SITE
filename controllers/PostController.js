
const Post = require('../models/Post');


const PostController = {

    getPosts(req,res){
        Post.find().then(result => {
            res.render('posts', {title: 'posts', data: result, user: req.user})
        })
        
    },

    createPosts(req,res){
        const newPost = new Post({
            username: req.user.username,
            title: req.body.title,
            post: req.body.post
        })

        newPost.save().then(result => {
            req.flash(
                'success_msg',
                'Post Successfully posted'
              );
            res.redirect('/api/createposts');
        }
            )

    },

    // SEE POST 
    postDetails(req,res){
        const id = req.params.id;
        Post.findOne({_id: id}).populate({
            path: 'comments',
            
          }).then(results => {
            res.render('details', {title: 'Post Details', info: results, user: req.user})
        }) 
      
        
    },

    deletePost(req,res){
        const id = req.params.id;
        Post.findByIdAndDelete(id).then(results => {
            res.json({ redirect: '/api/posts' });
        })
    },

    

    

}


module.exports = PostController;