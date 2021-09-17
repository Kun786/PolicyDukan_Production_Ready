const investmentInsuranceModel = require("../modals/investPlanModel");

module.exports = {
    create: function (req, res, next) {
        investmentInsuranceModel.create({
            name: req.body.name,
            mobile: req.body.mobile
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
        investmentInsuranceModel.find({}, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json(result);
            }
        });
    },
}