const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/connection');
const routes = require('./routes');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const {ensureAuthenticated} = require('./config/auth')
require('dotenv').config()
// passport config 
require('./config/passport')(passport);

// view engine 
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// express session 
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// passport middleware 
app.use(passport.initialize());
app.use(passport.session());





// connect flash
app.use(flash());



// Global flash variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });


  app.use(routes);
// see home view 
app.get('/homepage', ensureAuthenticated, (req,res) => {
    res.render('home', {title: 'Homepage', user: req.user})
})

app.get('/', (req,res) => {
    res.render('landingPage', {title: ''})
})

app.use((req,res) => {
    res.status(404).end();
})

//gserg

db.once('open', () =>{
    console.log(`db running on mongodb`)
    app.listen(PORT, () => {
        console.log(`server open on on ${PORT}`);
    })
})

