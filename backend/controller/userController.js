const userModel = require('./../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const { validationResult } = require('express-validator');

exports.isAlreadyaUser = (req, res, next) => {
    var {userName, email} = req.body;

    console.log(userName, email);

    userModel.find({userName: userName})
    .then(user => {
        //console.log(user);
        if(user.length == 0){
            //console.log('not found [username]');
            //check if the email already exists
            userModel.find({email: email})
            .then(user => {
                if(user.length == 0){
                    res.status(400).json({
                        message: "User not Found",
                        hasEmail: false,
                        hasUser: false
                    });
                }else{
                    //console.log('found [email]');
                    res.status(200).json({
                        message: "User found",
                        hasEmail: true
                    });
                }
            })
        }else{
            //console.log('found [username]');
            res.status(200).json({
                message: "User found",
                hasUser: true
            });
        }
    })
    .catch(err => {
        //console.log(err);
         if(!err.statusCode){
             err.statusCode = 400;
         }
         next(err);
    });
}

exports.signup = (req, res, next) => {
    var {firstName, lastName, userName, email, password, Designation, gender} = req.body;
    var imgurl = req.file.filename;
    //console.log(req.body.firstName);

    bcrypt.hash(password, 10)
    .then(hashedPassword => {
        const user = new userModel({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: hashedPassword,
            Designation: Designation,
            gender: gender,
            imgurl: imgurl
        });
        return user.save();
    })
     .then(result => {
         res.status(200).json({
             message: "success signup"
         });
     })
     .catch(err => {
         //console.log(err);
         if(!err.statusCode){
             err.statusCode = 400;
         }
         next(err);
     })
};

exports.login = (req, res, next) => {
    console.time('login');
    var {email, password, Designation} = req.body;
    let loadedUser = "";
    // console.log(email, password, Designation);

    userModel.findOne({email: email, Designation: Designation})
    .then(user => {
        // console.log(user);
        if(!user){
            const error = new Error('user not found');
            throw error;
        }
        loadedUser = user;
        return bcrypt.compare(password, loadedUser.password);
    })
    .then(isEqual => {
        if(!isEqual){
            const error = new Error('The Username or Password is inCorrect');
            error.statusCode = 400;
            throw error;
        }

        const token = jwt.sign({
            username: loadedUser.name,
            userId: loadedUser._id
        },'Top secreate', {expiresIn: '23h'});
        res.status(200).json({
            message: "Login succesfull",
            token: token
        });
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 400;
        }
        next(err);
    })
    console.timeEnd('login');
}