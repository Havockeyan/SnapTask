const express = require('express');

const projectController = require('./../controller/projectController');

const route = express.Router();

route.post('/projects',projectController.allProjects);

route.post('/project',projectController.singleProject);

route.post('/project',projectController.createProject);

module.exports = route;