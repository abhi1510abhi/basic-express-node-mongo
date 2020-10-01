const express = require('express');

const authRouter = express.Router();

// http://localhost:3000/auth/login
authRouter.get('/login', (req, res) => {
    res.send("login user")
})

module.exports = authRouter;