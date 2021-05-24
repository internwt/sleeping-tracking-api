const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Strategy = new Schema({
    sleep_id: { type: String, required: true },
    user_id: { type: String, required: true },
    sleeping_time: { type: Number, required: true },
    walkup_time: { type: Number, required: true },
    current_date: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Strategy', Strategy);