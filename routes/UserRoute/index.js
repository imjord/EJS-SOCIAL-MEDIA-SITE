const { getUsers, createUser, deleteUser } = require('../../controllers/UserController');


const router = require('express').Router();


router.get('/users', getUsers);

router.post('/users', createUser);

router.delete('/users/:id', deleteUser);


module.exports = router;