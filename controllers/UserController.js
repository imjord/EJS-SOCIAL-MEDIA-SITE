const User = require('../models/User');


const UserController = { 


    // get our users
    getUsers(req,res){
        User.find().then(results => res.json(results));

    },

    // create a user 
    createUser(req,res){
        User.findOne({email: req.body.email}).then(user => {
            if(user){
                return res.status(400).json({email: "A user is already registered with that email"})
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                })
                newUser.save().then(results => {
                   return res.render('home', {title: "homepage", results})
                })
            }
        })
        


           
    },

    deleteUser(req,res){
        User.findByIdAndDelete({_id: req.params.id}).then(results => res.json({message: "User sucessfully deleted", results}))

    }



}


module.exports = UserController;