

//app.js
//IMPORT LIBRARIES
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');
var multer = require('multer');
var upload = multer();
const userRoutes = require('./routes/user');
const schoolRoutes = require('./routes/school');

//connect to database
mongoose.connect("mongodb+srv://Bugsboni:raymond24@fmis.xsjz1.mongodb.net/FMIS?retryWrites=true&w=majority")
.then(() => {
  console.log('Connected to database!')
})
.catch(() => {
  console.log('Connection failed!');
});

//set headers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, *");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS, *");
    next();

  });


app.use("/files", express.static(path.join("backend/files")));
app.use("/api/schools", schoolRoutes);

app.use("/api/users", userRoutes);
module.exports = app;















