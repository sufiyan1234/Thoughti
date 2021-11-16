const express=require('express');
const app=express();

const routeMethod=require('./routes');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use('/api/managed-records',routeMethod);

app.listen(3000,()=>{
  console.log("The server started on port 3000");
});