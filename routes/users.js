var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

var userModel = require('../schemas/user-schema')
/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find({}).then( result => {
    console.log(result);
    res.send(result);
  })
});

router.post('/new-user', function( req, res, next) {
  const salt = bcrypt.genSalt();
  const hashedPassword = bcrypt.hash(req.body.password, salt);
  const user = { userName: req.body.userName, 
                    userEmail: req.body.userEmail, 
                    password: hashedPassword 
                  };
  const newUser = new userModel(newUser)
  newUser.save(function( err, result) {
    if(err) {
      console.log(err);
    }
    // result
    console.log(err);
  })                

})
module.exports = router;
