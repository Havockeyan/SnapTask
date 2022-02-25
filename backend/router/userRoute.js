const express = require('express');
const multerhelper = require('./../multer-helper');

const userController = require('./../controller/userController');
const nullRouteController = require('./../controller/nullRouteController');

const route = express.Router();


route.post('/signup',multerhelper ,userController.signup);

route.post('/isUser', userController.isAlreadyaUser);

route.post('/login',userController.login);


route.use(nullRouteController.nullRouteController);

module.exports = route;