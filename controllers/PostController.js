
const Post = require('../models/Post');


const PostController = {

    getPosts(req,res){
        Post.find().then(result => {
            res.render('posts', {title: 'posts', data: result})
        })
        
    },

    createPosts(req,res){
        const newPost = new Post({
            username: req.body.username,
            title: req.body.title,
            post: req.body.post
        })

        newPost.save().then(result => {
            res.render('home', {title: 'home'});
        }
            )

    },

    // SEE POST 
    postDetails(req,res){
        const id = req.params.id;
        Post.findOne({_id: id}).populate({
            path: 'comments',
            
          }).then(results => {
            res.render('details', {title: 'Post Details', info: results})
        }) 
      
        
    },

    deletePost(req,res){
        const id = req.params.id;
        Post.findByIdAndDelete(id).then(results => {
            res.json({ redirect: '/api/posts' });
        })
    },

    testPosts(req,res){
        Post.find().then(results => res.json(results));
    }

    

}


module.exports = PostController;