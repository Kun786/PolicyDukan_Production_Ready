const mongoose = require("mongoose");
mongoose.pluralize(null);
var Schema = mongoose.Schema;

var claimSchema = new Schema({
    name: {type: String, required: true},
    plan: {type: String, required: true},
    mobileno: {type: String, required: true},
    email: {type: String, required: true},
    reason: {type: String, required: true}
});
var claim = mongoose.model('claimRequest', claimSchema);
module.exports = claim;