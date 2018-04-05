'use strict';

const express = require('express');
const app = express();

// HTTP Server listening in port 3000.
app.listen(3000,function(){
  console.log('Running in 3000');
})
/*
    localhost:3000/ mapps to this URI matching. This is the default URI matching
*/
app.get('/', (req,res)=>{
  res.send('Hello world');
})
/*
    Sample post request to default URI matching
*/
app.post('/', (req,res)=>{
  res.send('sample Post Request');
})
/*
    Sample put request to default URI matching
*/
app.put('/', (req,res)=>{
  res.send('sample Put Request');
})

/*
    Sample delete request to default URI matching
*/
app.delete('/', (req,res)=>{
  res.send('sample delete Request');
})

/*
    Route Handler and Passing parameters in the URI
*/
app.get('/user',(req,res)=>{
  res.send('Sample User');
})

app.get('/user/:id',(req,res)=>{
  console.log(req.params); // Printing the parameters
  res.send('User - '+req.params.id);
})

app.get('/user/:id/:type',(req,res)=>{
  console.log(req.params); // Printing the Parameters
  res.send('User Details - ' + req.params.id + ' - ' + req.params.type);
})
