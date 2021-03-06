const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{ type:String, unique:true, required:true },
    email:{ type:String, unique:true },
    password:{ type:String },
    fullname:{ type:String },
    firstname:{ type:String, default:'' },
    lastname:{ type:String, default:'' },
});

const User = mongoose.model('User',UserSchema)

module.exports = User