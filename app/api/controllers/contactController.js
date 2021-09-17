const contModel = require('../modals/contactModel');

module.exports = {
    create: function(req, res, next){
        contModel.create({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        }, function(err, result){
            if(err){
                next(err)
            }else{
                res.json({
                    status: true,
                    message: "Message Sent",
                    data: null
                });
            }
        });
    },
    getAll: function(req, res, next){
        contModel.find({}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json(result);
            }
        });
    },
    total: function(req, res, next){
        contModel.find({}, function(err, result){
            if(err){
                next(err);
            }else{
                var number = result.length;
                res.json(number);
            }
        });
    },
}