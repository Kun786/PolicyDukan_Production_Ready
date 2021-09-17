const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/policyDukaan', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
    if(err){
        console.log("Error occured with connecting database practice " + err);
    }
    else{
        console.log("Database Connection Build Successfully!");
    }
});