const User = require('../models/User');


require('dotenv').config()
const passport = require('passport');
// const bcrypt = require('bcrypt')


const UserController = { 


    // get our users
    getUsers(req,res){
        User.find().then(results => res.json(results));

    },

    // create a user 
    createUser(req,res){
        const {username, email, password} = req.body;
        let errors = [];

        if (!username || !email || !password) {
            errors.push({ msg: 'Please enter all fields' });
          }
        
          
        
          if (password.length < 6) {
            errors.push({ msg: 'Password must be at least 6 characters' });
          }
        
          if (errors.length > 0) {
            res.render('register', {
              errors,
              username,
              email,
              password,
            });

            } else { 
            User.findOne({username: req.body.username}).then(user => {
                if(user){
                    errors.push({ msg: 'username already exists' });
                    res.render('register', {
                        errors,
                        username,
                        email,
                        password,
                      });
                    
                } else { 
                    User.findOne({email: req.body.email}).then(user => {
                if(user){
                    errors.push({ msg: 'Email already exists' });
                    res.render('register', {
                        errors,
                        username,
                        email,
                        password,
                      });
                    
                } else {
                    const newUser = new User({
                        username: req.body.username,
                        email: req.body.email,
                        password: req.body.password
                    })
                  
                
                            newUser.save().then(results => {
                                req.flash(
                                    'success_msg',
                                    'You are now registered and can log in'
                                  );
                                res.redirect('/login')
                             })
         
                }
            })
                }

                })

        }
        
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
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login')
    
},

    deleteUser(req,res){
        User.findByIdAndDelete({_id: req.params.id}).then(results => res.json({message: "User sucessfully deleted", results}))

    }



}


module.exports = UserController;