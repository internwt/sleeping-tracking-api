require("babel-core/register");
require("babel-polyfill");
import express from 'express'
const app = express()
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
const connectDB = require('./config/db');
connectDB();

// import all controllers
import users from './Controllers/UserController/UserRouter'
import tracking from './Controllers/trackingController/trackingRoute'

app.use('/v1/api/users', users)
app.use('/v1/api/tracking', tracking)

app.listen(3001, () => console.log('Example app listening on port 3000!'))