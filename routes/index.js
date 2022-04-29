const router = require('express').Router();
const postRoute = require('./PostRoute/index');
const commentRoute = require('./CommentRoute/index');
const userRoute = require('./UserRoute/index');
const login = require('./login');
const register = require('./register');
const auth = require('../utils/auth');

router.use('/api',  postRoute);
router.use('/api',  commentRoute);
router.use('/api',  userRoute);

// login sign up
router.use('/login', login);
router.use('/signup', register)



// router.use((req,res) => {
//     return res.send('   wrong route!')
// })

module.exports = router;