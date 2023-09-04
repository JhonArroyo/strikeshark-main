const mongoose = require('mongoose')
const User = mongoose.model('User', new mongoose.Schema({
    // Place your declarations here
    todo: String,
}))
module.exports = User