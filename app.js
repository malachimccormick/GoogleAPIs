const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
require('dotenv').config()
app.set('view engine','pug');
app.use(express.static(__dirname + '/public/'))


app.get('/', (req, res)=>{
    res.render("index.pug")
});

app.get('/Maps', (req,res) =>{
    res.render('maps',{
        googleKey: process.env.GOOGLE_KEY
    })
    // app.locals.basedir = app.get('/public');

});
app.get('/URLshortner', (req,res)=>{
    res.render("urlshortner", {
        firebaseKey: process.env.FIREBASE_KEY
    })
});
app.get('/YouTube',(req,res) =>{
    res.render("youtube",{
        googleKey: process.env.GOOGLE_KEY
    })
    
});
app.listen(port)
// app.listen(port)
