const { ensureAuthenticated } = require('../../config/auth');
const { getPosts, createPosts, postDetails, deletePost, testPosts } = require('../../controllers/PostController');

const router = require('express').Router();





router.get('/posts',ensureAuthenticated, getPosts);

router.post('/posts', ensureAuthenticated, createPosts);

router.get('/createposts', ensureAuthenticated, (req,res) => {
    res.render('createposts', {title: 'Create Post', user: req.user});
});

router.get('/posts/:id', ensureAuthenticated, postDetails);
router.delete('/posts/:id', deletePost);

module.exports = router;