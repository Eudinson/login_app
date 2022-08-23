const express = require('express');

const userLoginController = require('../controllers/userLoginController');

const userActionsRouter = express.Router();

userActionsRouter.put('/login', userLoginController);

module.exports = userActionsRouter;