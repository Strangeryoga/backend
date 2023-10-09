const express = require('express')
const app = express()

app.use(function(req, res, next){
    console.log("hello from middleware");
    next();
});

app.get('/', function (req, res){
    res.send('how are you')
})

app.listen(3000)