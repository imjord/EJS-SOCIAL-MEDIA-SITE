const { loginUser } = require('../../controllers/UserController');

const router = require('express').Router();


router.get('/', (req,res) => {
    res.render('login')
})


router.post('/', loginUser);

module.exports = router;