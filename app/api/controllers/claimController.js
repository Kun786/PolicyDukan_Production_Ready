const claimModel = require('../modals/claimModel');

module.exports = {
    create: function(req, res, next){
        claimModel.create({
            name: req.body.name,
            plan: req.body.plan,
            mobileno: req.body.mobileno,
            email: req.body.email,
            reason: req.body.reason
        },function(err, result){
            if(err){
                next(err)
            }else{
                res.json({
                    status: "Success",
                    message: "Request Submitted!",
                    data: null
                });
            }
        });
    },
    getAll: function(req, res, next){
        claimModel.find({}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json(result);
            }
        });
    },
    countAll: function(req, res, next){
        claimModel.find({}, function(err, result){
            if(err){
                next(err);
            }else{
                var number = result.length;
                res.json(number);
            }
        });
    },
}