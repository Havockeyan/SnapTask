//node_import
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const multer = require('multer');
const nanoid = require('nanoid').nanoid;
dotenv.config();

//normal_import
const userRoute = require('./router/userRoute');
const nullRouteHandler = require('./controller/nullRouteController');
const compression = require('compression');

const app = express();

//morgan for loging
app.use(morgan('combined'));
// app.use(morgan('combined',{
//   stream: fs.createWriteStream(process.env.LOGFILEPATH.toString(), {flags: 'a'})
// }));

//bodyparser
app.use(bodyParser.json());

//file storage for multer
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
      if(file.originalname){
        cb(null, 'images');
      }
  },
  filename: (req, file, cb) => {
    const fileName = nanoid() + '-' + file.originalname;
    cb(null, fileName);
  }
});

//file filter
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'application/pdf'
  ) {
    //console.log('file found');
    cb(null, true);
  } else {
    //console.log('file not found');
    cb(null, false);
  }
}

app.use('/images', express.static(path.join(__dirname, 'images')));

//cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    next();
  });

  app.use(multer({fileFilter: fileFilter, storage: fileStorage}).single('image'));

  //user routes
  app.use('/user', userRoute);

  //error handling route
  app.use((error, req, res, next) => {
    //console.log(error);
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
mongoose.connect(process.env.URI.toString())
.then(() => {
    //console.log('mongo db connected');
    app.listen(process.env.PORT);
    //console.log(`listining in ${process.env.PORT}`);
})
.catch(err => {
    //console.log(err);
})
