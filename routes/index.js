const router = require('express').Router();
const userRoute = require('./PostRoute/index');



router.use('/api', userRoute);

// router.use((req,res) => {
//     return res.send('   wrong route!')
// })

module.exports = router;