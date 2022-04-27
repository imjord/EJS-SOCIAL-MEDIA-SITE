const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./config/connection');
const routes = require('./routes');
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);


// view engine 
app.set('view engine', 'ejs');
app.use(express.static('./public'));

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

