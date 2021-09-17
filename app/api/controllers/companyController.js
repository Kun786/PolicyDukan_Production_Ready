const companyModel = require("../modals/companyModel");

module.exports = {
    create: function(req, res, next) {
        companyModel.create({
            cname: req.body.cname,
            uname: req.body.uname,
            password: req.body.password,
            cnic: req.body.cnic,
            licence: req.body.licence,
            cemail: req.body.cemail,
            cphone: req.body.cphone,
            umobile: req.body.umobile,
            role: req.body.role,
            address: req.body.address
        }, function(err, result){
            if(err){
                next(err)
            }else{
                res.json({
                    status: true,
                    message: "Company Registered!",
                    data: null
                });
            }
        });
    },
    getAll: function(req, res, next) {
        companyModel.find({}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json(result);
            }
        });
    },
    countAll: function(req, res, next) {
        companyModel.find({}, function(err, result){
            if(err){
                next(err)
            }else{
                var number = result.length;
                res.json(number);
            }
        });
    },
    delete: function(req, res, next) {
        companyModel.findByIdAndRemove({_id:req.params.cId}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json({
                    status: true,
                    message: "Company Deleted",
                    data: null
                });
            }
        });
    },
}