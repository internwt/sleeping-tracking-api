import express from 'express';
const app = express.Router()
const { signUp, login } = require('./UserValidation')
const { registerUser, loginUser, resetPassword } = require('./UserController')


app.post('/register', signUp, registerUser)
app.post('/login', login, loginUser)

app.post('/resetPassword', resetPassword)

module.exports = app;