const express = require('express')
const app = express();
const mongoose = require("./config/database");
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path');
const port = process.env.PORT || 7000;


app.use(cors());

const userRouters = require("./routes/userRoute");
const adminRouters = require("./routes/adminRoute");
const companyRouters = require("./routes/companyRoute");
const adminAuth = require("./routes/adminAuth");
app.set('secretKey', 'mysecretkey');
app.use("/users", userRouters);
app.use("/admin", adminRouters);
app.use("/company", companyRouters);
app.use("/adminAuth", adminAuth);

function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }
      
      else{
        console.log(decoded);
        // add user id to request
      
        req.body.userId = decoded.id;
        next();
      }
    });
    
  }

  app.use(express.static(path.join(__dirname, '/frontEnd')));
  app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/frontEnd/index.html'));
  });
  app.listen(port, function (err, res) {
      console.log(`Port ${port} Running Successfully in ${process.env.PORT} mode!`);
  });