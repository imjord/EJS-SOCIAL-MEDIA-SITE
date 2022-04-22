const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./config/connection');
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(routes);


// view engine 
app.set('view engine', 'ejs');
app.use(express.static('./public'));

// see home view 

app.get('/', (req,res) => {
    res.render('home', {title: 'homepage'})
})





db.once('open', () =>{
    console.log(`db running on mongodb`)
    app.listen(PORT, () => {
        console.log(`server open on ${PORT}`);
    })
})
