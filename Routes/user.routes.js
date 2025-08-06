const express = require('express');
const { registerUser,loginUser,userLogout } = require('../Controller/user.controller');

const userRouter = express.Router();

userRouter.post('/register', registerUser);

userRouter.post('/login', loginUser);

userRouter.get('/logout', userLogout)

module.exports = userRouter;