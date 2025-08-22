const bodyParser = require('body-parser');
const db = require('./configs/database');
const express = require('express');
const app = express();
const port = 8081;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,(error)=>{
    if(!error){
        console.log("server stared");
        console.log(`http://localhost:${port}`);
    }
})