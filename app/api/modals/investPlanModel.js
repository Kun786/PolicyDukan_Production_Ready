const mongoose = require("mongoose");
mongoose.pluralize(null);
var Schema = mongoose.Schema;

var investSchema = new Schema({
    name: {type: String, required: true},
    mobile: {type: String, required: true}
});
var invest = mongoose.model('investPlanRequest', investSchema);
module.exports = invest;