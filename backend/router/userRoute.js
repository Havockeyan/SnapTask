const express = require('express');
const { body } = require('express-validator');

const userController = require('./../controller/userController');
const nullRouteController = require('./../controller/nullRouteController');

const route = express.Router();


route.post('/signup',userController.signup);


route.post('/login', [
    body('email').isEmail(),
    body('password').isLength({min: 3}),
    body('type').notEmpty()
],userController.login);


route.use(nullRouteController.nullRouteController);

module.exports = route;