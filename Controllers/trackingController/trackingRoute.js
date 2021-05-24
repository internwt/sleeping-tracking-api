import express from 'express';
const app = express.Router()
import { createSleepTime, getTimeSleep } from './trackingController'
app.post('/sleep-tracker', createSleepTime)
app.get('/getTimeSleep', getTimeSleep)

module.exports = app;