const User = require('../models/User');


require('dotenv').config()
const passport = require('passport');
const bcrypt = require('bcrypt')


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
              
                bcrypt.genSalt(10, (err,salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save().then(results => {
                
                            res.render('home', {title: "homepage", user: req.user})
                         })
                    })
                })

                
            }
        })
        


           
    },
        // login handler
      loginUser(req,res, next){
        passport.authenticate('local', {
            successRedirect: '/homepage',
            failureRedirect: '/login',
            failureFlash: true
          })(req, res, next);
        
    },

      // logout users

  logout(req,res){
    req.logout();
    res.redirect('/login')
    
},

    deleteUser(req,res){
        User.findByIdAndDelete({_id: req.params.id}).then(results => res.json({message: "User sucessfully deleted", results}))

    }



}


module.exports = UserController;