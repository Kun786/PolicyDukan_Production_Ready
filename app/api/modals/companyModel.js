const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
mongoose.pluralize(null);
const saltRounds = 10;
var mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
var companySchema = new Schema({
    cname: {type: String, required: true, unique: true},
    uname: {type: String, required: true},
    password: {type: String, required: true},
    cnic: {type: String, required: true},
    licence: {type: String, required: true},
    cemail: {type: String, required: true, unique: true},
    cphone: {type: String, required: true},
    umobile: {type: String, required: true},
    role: {type: String, required: true},
    address: {type: String, required: true}
});
companySchema.plugin(mongooseUniqueValidator);
companySchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
var compSchema = mongoose.model('Companies', companySchema);
module.exports = compSchema;