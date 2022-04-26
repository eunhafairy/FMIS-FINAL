const express = require('express');
const User = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');
const bcrypt = require('bcrypt');
//const multer = require('multer');


// const storage = multer.diskStorage({

//   destination: (req, file, cb) => {

//       cb(null, "backend/files");

//   },
//   filename: (req,file,cb) => {

//       cb(null, file.originalname.replaceAll(" ", "").split('.')[0] + '-' + Date.now() + '.' + getFileExt(file.originalname));

//   }

// });


router.post("/login", (req,res,next) => {


  let fetchedUser ;
  let haveAccount;

  //does email exist?
  User.findOne({ email: req.body.email})
  .then(user =>{

      if(!user){
          console.log("NO ACCOUNT");
          haveAccount = false;
          return res.status(401).json({message: 'No account found'});
      }
      else{
          console.log("FETCHING USER");
          haveAccount = true;
          fetchedUser = user;
          return bcrypt.compare(req.body.password, user.password);

      }


  })
  .then(result =>{

          if(!result){
              return res
              .status(401)
              .json({
                  message: 'Wrong password'
              });
          }


      //create json web token for authentication

      if(haveAccount){

          const token = jwt.sign(
              {email: fetchedUser.email, u_id: fetchedUser._id, role: fetchedUser.role },
              'secret_this_should_be_longer', { expiresIn: "1h" }
          );


          res.status(200).json({

              token:token,
              expiresIn: 3600,
              u_id: fetchedUser._id,
              status: fetchedUser.status

          });


      }

  })
  .catch(err =>{

      console.log(err);

      return res.status(401).json({
      message: 'Error occurred',
      error: err
  });

  })
})


router.get('/find/:id' ,(req, res, next) =>{

  User.findById(req.params.id)
  .then( user =>{
      if(user){

          res.status(200).json(user);
      }
      else{

          res.status(404).json({

              message: "not found",


          });
      }

  })
  .catch(err =>{

      res.status(500).json({
          message: "Something went wrong",
          error: err
          });
  });


});



router.post("/register" , (req, res, next) => {



    bcrypt.hash(req.body.password, 10)
    .then(hash =>{




        const faculty = new User({

          // profilePic: url+ '/files/' + req.file.filename,
           EmployeeNumber: req.body.EmployeeNumber,
           LastName: req.body.LastName,
           FirstName: req.body.FirstName,
           MidInit: req.body.MidInit,
           NameExtention: req.body.NameExtention,
           birthdate: req.body.birthdate,
           age: req.body.age,
           PlaceOfBirth: req.body.PlaceOfBirth,
           gender: req.body.gender,
           CivilStatus: req.body.CivilStatus,
           height: req.body.height,
           weight: req.body.weight,
           BloodType: req.body.BloodType,
           gsis: req.body.gsis,
           pagibig: req.body.pagibig,
           sss: req.body.sss,
           tin: req.body.tin,
           citizenship: req.body.citizenship,
           r_zipCode: req.body.r_zipCode,
           r_lotNo: req.body.r_lotNo,
           r_street: req.body.r_street,
           r_village: req.body.r_village,
           r_brgy: req.body.r_brgy,
           r_city: req.body.r_city,
           r_province: req.body.r_province,
           p_zipCode: req.body.p_zipCode,
           p_lotNo: req.body.p_lotNo,
           p_street: req.body.p_street,
           p_village: req.body.p_village,
           p_brgy: req.body.p_brgy,
           p_city: req.body.p_city,
           p_province: req.body.p_province,

           email: req.body.email,
           altEmail: req.body.altEmail,
           password: hash,
           TelNo: req.body.TelNo,
           MobileNo: req.body.MobileNo,

         });


        //save user
        faculty.save()
        .then(result => {

            res.status(201).json({
                message: 'User created',
                result: result
            });

        })
        .catch(err => {
            res.status(500).json({
                error:err,
                message: "Error occurred."
            });
        })

    });


});


module.exports = router;
