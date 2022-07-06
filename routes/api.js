const express = require('express');
const userRouters = require('./user');
const thoughtRoutes = require('./thought');
const Router = express.Router();

Router.use('/users', userRouters);
Router.use('/thoughts', thoughtRoutes);

module.exports = Router;
