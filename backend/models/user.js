const mongoose = require('mongoose');
const userSchama = mongoose.Schema({

  profilePic: {type: String, required: false},
  EmployeeNumber: {type: String, required: false},
  LastName: {type: String, required: false, default:null},
  FirstName: {type: String, required: false},
  MidInit: {type: String, required: false},
  NameExtention: {type: String, required: false},
  birthdate: {type: String, required: false},
  age: {type: String, required: false},
  PlaceOfBirth: {type: String, required: false},
  gender: {type: String, required: false},
  CivilStatus: {type: String, required: false},
  height: {type: String, required: false},
  weight: {type: String, required: false},
  BloodType: {type: String, required: false},
  gsis: {type: String, required: false},
  pagibig: {type: String, required: false},
  philHealth: {type: String, required: false},
  sss: {type: String, required: false},
  tin: {type: String, required: false},
  citizenship: {type: String, required: false},
  r_zipCode: {type: String, required: false},
  r_lotNo: {type: String, required: false},
  r_street: {type: String, required: false},
  r_village: {type: String, required: false},
  r_brgy: {type: String, required: false},
  r_city: {type: String, required: false},
  r_province: {type: String, required: false},
  p_zipCode: {type: String, required: false},
  p_LotNo: {type: String, required: false},
  p_street: {type: String, required: false},
  p_village: {type: String, required: false},
  p_brgy: {type: String, required: false},
  p_city: {type: String, required: false},
  p_province: {type: String, required: false},

  email: {type: String, required: false},
  altEmail: {type: String, required: false},
  password: {type: String, required: false},
  TelNo: {type: String, required: false},
  MobileNo: {type: String, required: false},
  status: {type: String, default:"Pending"},
  role: {type: String, required: true, default:"Admin"}




});

module.exports = mongoose.model('User', userSchama);
