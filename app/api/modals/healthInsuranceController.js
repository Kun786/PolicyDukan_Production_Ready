const mongoose = require("mongoose");
mongoose.pluralize(null);
const Schema = mongoose.Schema;

var healthSchema = new Schema ({
    mobile: {type: String, required: true},
    gender: {type: String, required: true},
    name: {type: String, required: true},
    city: {type: String, required: true},
    for: {type: String, required: true},
    age: {type: Number, required: true}
});

var healthInsuranceSchema = mongoose.model('healthInsurance', healthSchema);
module.exports = healthInsuranceSchema;