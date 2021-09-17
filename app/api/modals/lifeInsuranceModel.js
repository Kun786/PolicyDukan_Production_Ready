const mongoose = require("mongoose");
mongoose.pluralize(null);
var Schema = mongoose.Schema;

var lifeInsuranceSchema = new Schema({
    gender: {type:String, required: true},
    name: {type: String, required: true},
    dob: {type: Date, required: true},
    country: {type: String, required: true},
    mobileno: {type: String, required: true}
});
var lifeInsurance = mongoose.model('lifeInsurance', lifeInsuranceSchema);
module.exports = lifeInsurance;