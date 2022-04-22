const { getPosts, createPosts, postDetails, deletePost, testPosts } = require('../../controllers/PostController');

const router = require('express').Router();



router.get('/test', testPosts);

router.get('/posts', getPosts);

router.post('/posts', createPosts);

router.get('/createposts', (req,res) => {
    res.render('createposts', {title: 'Create Post'});
});

router.get('/posts/:id', postDetails);
router.delete('/posts/:id', deletePost);

module.exports = router;