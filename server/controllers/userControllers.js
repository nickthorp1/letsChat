const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async () => {
    const {name,email,password, pic } = requestAnimationFrame.body;
    if(!name || !email || !password){
        return response.status(422).json({error: "please add all the fields"})
    }

    const userExists = await User.findone({email})

    if (userExists) {
        return response.status(400).json({error: "user already exists"})
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if (user) {
        response.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        }) } else {
            res.status(400);
            throw new Error('failed to create user');
        }
        });

        module.exports = { registerUser }
    

