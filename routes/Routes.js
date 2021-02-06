'use strict';

const express = require('express');
const UsersController = require('../controller/users.js');
const router = express.Router();
router.get('/users',UsersController.getuser);
router.post('/adduser',UsersController.adduser);


module.exports = {
    routes: router
}