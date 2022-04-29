const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/connection');
const routes = require('./routes');
const flash = require('connect-flash');
const session = require('express-session');
require('dotenv').config()

// passport config 
require('./config/passport');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);


// view engine 
app.set('view engine', 'ejs');
app.use(express.static('./public'));

// express session 
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
)

// passport middleware 
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

// see home view 
app.get('/homepage', (req,res) => {
    res.render('home', {title: 'Homepage'})
})

app.get('/', (req,res) => {
    res.render('landingPage', {title: ''})
})



//gserg

db.once('open', () =>{
    console.log(`db running on mongodb`)
    app.listen(PORT, () => {
        console.log(`server open on on ${PORT}`);
    })
})

