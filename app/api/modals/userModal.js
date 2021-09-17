const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
mongoose.pluralize(null);
const saltRounds = 10;
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true },
    fname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobileno: { type: String, required: true },
    company: {type: String, required: true},
    dob: {type: Date},
    gender: {type: String, required: true},
    plan: { type: String, required: true },
    for: { type: String, required: true },
    pic: {type: String},
    password: { type: String, required: true },
    cnic: {type: String},
    address: { type: String },
    created_at: {type: Date, default: Date.now},
    updated_at: Date
});
userSchema.plugin(mongooseUniqueValidator);
userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
var usrModel = mongoose.model('users', userSchema);
module.exports = usrModel;