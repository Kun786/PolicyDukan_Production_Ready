const adminModel = require('../modals/adminModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    login: function(req, res, next){
        adminModel.findOne({email:req.body.email},function(err, userinfo){
            if(err){
                next(err)
            }else{
                if(bcrypt.compareSync(req.body.password, userinfo.password)){
                    const token = jwt.sign({id:userinfo._id},"mysecretkey",{expiresIn: '1h'});
                    res.json({
                            status: "success",
                            message: "User Found",
                            data: {user: userinfo, token: token}
                        });
                }else{
                    res.json({
                        status: false,
                        message: "invalid user email/password",
                        data: null
                    });
                }
            }
        });
    },
    create: function(req, res, next){
        adminModel.create({
            name: req.body.name,
            fname: req.body.fname,
            email: req.body.email,
            mobileno: req.body.mobileno,
            dob: req.body.dob,
            gender: req.body.gender,
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
}