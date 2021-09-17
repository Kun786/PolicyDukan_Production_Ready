const userModel = require('../modals/userModal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    login: function(req, res, next){
        userModel.findOne({email:req.body.email},function(err, userinfo){
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
}