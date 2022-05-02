const router = require('express').Router();
const postRoute = require('./PostRoute/index');
const commentRoute = require('./CommentRoute/index');
const userRoute = require('./UserRoute/index');
const login = require('./login');
const register = require('./register');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const { logout } = require('../controllers/UserController');

router.use('/api', ensureAuthenticated, postRoute);
router.use('/api', ensureAuthenticated,  commentRoute);
router.use('/api', ensureAuthenticated, userRoute);

// login sign up
router.use('/login', forwardAuthenticated, login);
router.use('/signup', forwardAuthenticated, register)
router.get('/logout', logout);



// router.use((req,res) => {
//     return res.send('   wrong route!')
// })

module.exports = router;