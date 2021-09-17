const usrModel = require("../modals/userModal");

module.exports = {
    get: function(req, res, next) {
       let usersList = [];
        usrModel.find({}, function(err, users){
            if(err){
                next(err);
            } else{
                res.json(users);
            }
        });
    },
    create: function(req, res, next){
        usrModel.create({
            name: req.body.name,
            fname: req.body.fname,
            email: req.body.email,
            mobileno: req.body.mobileno,
            company: req.body.company,
            dob: req.body.dob,
            gender: req.body.gender,
            plan: req.body.plan,
            for: req.body.for,
            pic: req.body.pic,
            password: req.body.password,
            cnic: req.body.cnic,
            address: req.body.address
        }, function(err, result){
            if(err){next(err)}
            else{
                res.json({
                    status: true,
                    message: "User Added Successfully",
                    data: null
                });
            }
        });
    },
    getAll: function(req, res, next){
        usrModel.find({}, function(err, result){
            if(err){
                next(err);
            }else{
                console.log(result);
                res.json(result);
            }
        });
    },
    countAll: function(req, res, next){
        usrModel.find({}, function(err, result){
            if(err){
                next(err);
            }else{
                var number = result.length;
                res.json(number);
            }
        });
    },
    search: function(req, res, next){
        usrModel.find({name: req.params.uname}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json(result);
            }
        });
    },
    delete: function(req, res, next){
        usrModel.findByIdAndDelete({_id: req.params.userId}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json({
                    status: true,
                    message: "User Deleted!",
                    data: null
                });
            }
        });
    },
    investmentUsers: function(req, res, next) {
        usrModel.find({plan :"Investment"}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json(result);
            }
        });
    },
    homeInsurUsers: function(req, res, next) {
        usrModel.find({plan :"Home Insurance"}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json(result);
            }
        });
    },
    healthInsurUsers: function(req, res, next) {
        usrModel.find({plan :"Health Insurance"}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json(result);
            }
        });
    },
    edit: function(req, res, next){
        usrModel.findOne({_id:req.params.id}, function(err, result){
            if(err){
                next(err);
            }else{
                res.json(result);
            }
        });
    },
    updateById: function (req, res, next) {
        usrModel.findByIdAndUpdate(req.params.userId, { name: req.body.name, fname: req.body.fname, email: req.body.email, mobileno: req.body.mobileno, address: req.body.address }, function (err, userInfo) {
            if (err)
                next(err);
            else {
                res.json({ status: "success", message: "Record Updated Successfully!", data: null });
            }
        });
    },
    lifeInsurance: function(req, res, next) {
        usrModel.find({plan :"Life Insurance"}, function(err, result){
            if(err){
                next(err)
            }else{
                res.json(result);
            }
        });
    },
    janUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-01-01T10:44:13.375Z', $lte: '2020-01-31T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    febUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-02-01T10:44:13.375Z', $lte: '2020-02-29T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    marchUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-03-01T10:44:13.375Z', $lte: '2020-03-31T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    aprilUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-04-01T10:44:13.375Z', $lte: '2020-04-30T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    mayUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-05-01T10:44:13.375Z', $lte: '2020-05-31T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    juneUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-06-01T10:44:13.375Z', $lte: '2020-06-30T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    julyUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-07-01T10:44:13.375Z', $lte: '2020-07-31T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    augUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-08-01T10:44:13.375Z', $lte: '2020-08-31T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    sepUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-09-01T10:44:13.375Z', $lte: '2020-09-30T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    octUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-10-01T10:44:13.375Z', $lte: '2020-10-31T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    novUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-11-01T10:44:13.375Z', $lte: '2020-11-30T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
    decUsers: function(req, res, next){
        usrModel.find({created_at: { $gte: '2020-12-01T10:44:13.375Z', $lte: '2020-12-31T10:44:13.375Z' }}, function(err, result){
            if(err){
                next(err);
            }else{
               var length = result.length;
                res.json(length);
            }
        });
    },
};