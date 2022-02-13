const userModel = require('./../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator/check');

exports.signup = (req, res, next) => {
    var {name, email, password, type, phoneNo, imgurl} = req.body;

    //TO do change imageurl after connecting to frontend.

    bcrypt.hash(password, 18)
    .then(hashedPassword => {
        const user = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
            type: type,
            phoneNo, phoneNo,
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
         console.log(err);
         if(!err.statusCode){
             err.statusCode = 400;
         }
         next(err);
     })
};

exports.login = (req, res, next) => {
    var {email, password, type} = req.body;
    let loadedUser = "";
    console.log(password);

    //validating the inputs
    const errors = validationResult(req);
    if(!errors.isEmpty){
        const error = new Error('Validation Error');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    userModel.findOne({email: email, type: type})
    .then(user => {
        console.log(user);
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
            // res.status(400).json({
            //     message: "The username or password is not Correct."
            // });
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
}