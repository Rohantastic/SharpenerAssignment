const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("In the middleWare");
    next();
});


app.use((req,res,next)=>{
    console.log("In another middleWare");
    res.send('<h1> Hello From Express </h1>');
});


app.listen(3000);
