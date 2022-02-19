const express = require('express');
const { body } = require('express-validator');

const userController = require('./../controller/userController');
const nullRouteController = require('./../controller/nullRouteController');

const route = express.Router();


route.post('/signup',userController.signup);

route.post('/isUser', userController.isAlreadyaUser);

route.post('/login',userController.login);


route.use(nullRouteController.nullRouteController);

module.exports = route;