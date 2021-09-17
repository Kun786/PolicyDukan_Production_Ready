const healthModel = require("../modals/healthInsuranceController");

module.exports = {
    create: function(req, res, next){
        healthModel.create({
            mobile: req.body.mobile,
            gender: req.body.gender,
            name: req.body.name,
            city: req.body.city,
            for: req.body.for,
            age: req.body.age
        }, function(err, result){
            if(err){
                next(err)
            }else{
                res.json({
                    status: "Success",
                    message: "Record Added",
                    data: null
                });
            }
        });
    },
    get: function(req, res, next){
        healthModel.find({}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json(result);
            }
        });
    },
}