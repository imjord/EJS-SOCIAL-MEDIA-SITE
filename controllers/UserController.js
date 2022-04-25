const User = require('../models/User');


const UserController = { 


    // get our users
    getUsers(req,res){
        User.find().then(results => res.json(results));

    },

    // create a user 
    createUser(req,res){
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })


        newUser.save().then(results => {
            res.json({message: "User Created Sucessfully", results});
        })
    },

    deleteUser(req,res){
        User.findByIdAndDelete({_id: req.params.id}).then(results => res.json({message: "User sucessfully deleted", results}))

    }



}


module.exports = UserController;