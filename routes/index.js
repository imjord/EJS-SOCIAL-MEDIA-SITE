const router = require('express').Router();
const postRoute = require('./PostRoute/index');
const commentRoute = require('./CommentRoute/index');
const userRoute = require('./UserRoute/index');

router.use('/api', postRoute);
router.use('/api', commentRoute);
router.use('/api', userRoute)
// router.use((req,res) => {
//     return res.send('   wrong route!')
// })

module.exports = router;