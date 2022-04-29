const User = require('../models/User');


require('dotenv').config()
const passport = require('passport');


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
                
                   res.render('home', {title: "homepage", user: req.user})
                })
            }
        })
        


           
    },
        // login handler
    async loginUser(req,res, next){
        try{
        const {username, email, password} = req.body;

        // validate user input 
        if(!(username && email && password)){
            res.status(400).send('all input is required')
        }
        // validatre user in db
        const user = await User.findOne({email})
        const correctPass = await user.isCorrectPassword(password)
        if(user && correctPass){
        
            passport.authenticate('local', {
                successRedirect: '/homepage',
                failureRedirect: '/login',
                'session': true
                // failureFlash: true
              })(req, res, next);
            
    
    }
        res.status(400).send("Invalid Credentials");
    } catch (err) {
    console.log(err);
  }


        
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