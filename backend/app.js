//node_import
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');

//normal_import
const userRoute = require('./router/userRoute');
const nullRouteHandler = require('./controller/nullRouteController');

const app = express();

//morgan for loging
app.use(morgan('combined'));
app.use(morgan('combined',{
  stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));

//bodyparser
app.use(bodyParser.json());

//cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

  //user routes
  app.use('/user', userRoute);

  //error handling route
  app.use((error, req, res, next) => {
    console.log(error);
    const message = error.message || "The url is not correct check it";
    const status = error.statusCode || 400;
    const data = error.data || {url: req.url, method: req.method}
    res.status(status).json({
      message: message,
      data: data
    });
  });

  //other unmatched route handler
  app.use(nullRouteHandler.nullRouteController);


//connecting mongodb
mongoose.connect("mongodb+srv://karthikeyan:alzU6vFT3N0xVCgX@cluster0.9hufx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => {
    console.log('mongo db connected');
    app.listen(8080);
    console.log('listende in port 8080');
})
.catch(err => {
    console.log(err);
})
