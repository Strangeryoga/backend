const express = require('express')
const app = express()

app.get('/', function (req, res){
    res.send('Hello World hi how are you')
})

app.listen(3000)