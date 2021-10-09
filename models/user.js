//imports
const mongoose = require('mongoose');
//Define User Schema
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    message: {
        type: String,
        required: true,
        lowercase: true
    }
});
//Export 
const User = mongoose.model("User", UserSchema);
module.exports = User;