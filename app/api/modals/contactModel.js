const mongoose= require("mongoose");
mongoose.pluralize(null);
var Schema = mongoose.Schema;
var contactSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true}
});
var contSchema = mongoose.model('ContactMessages', contactSchema);
module.exports = contSchema;