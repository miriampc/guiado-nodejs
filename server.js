const express = require('express');
const path = require('path');
const app = express();

app.use('/static',express.static(path.join(__dirname,'node_modules')));
app.use('/static',express.static(path.join(__dirname,'assets')));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
}).listen(3000);