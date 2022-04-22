const router = require('express').Router();
const userRoute = require('./PostRoute/index');
const commentRoute = require('./CommentRoute/index');

router.use('/api', userRoute);
router.use('/api', commentRoute);

// router.use((req,res) => {
//     return res.send('   wrong route!')
// })

module.exports = router;