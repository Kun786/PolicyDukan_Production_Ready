const lifeInsuranceModel = require("../modals/lifeInsuranceModel");

module.exports = {
    create: function (req, res, next) {
        lifeInsuranceModel.create({
            gender: req.body.gender,
            name: req.body.name,
            dob: req.body.dob,
            country: req.body.country,
            mobileno: req.body.mobileno
        }, function (err, result) {
            if (err) {
                next(err)
            } else {
                res.json({
                    status: true,
                    message: "Record Added",
                    data: null
                });
            }
        });
    },
    getAll: function (req, res, next) {
        lifeInsuranceModel.find({}, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json(result);
            }
        });
    },
}