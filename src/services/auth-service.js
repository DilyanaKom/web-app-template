import User from '../models/User.js';
import brcypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { CustomValidationError } from '../utils/error-utils.js';


const SECRET = 'faa3818769d423377a04c2c972ec684488ffd395df233aef135fc9cb39d0d705';

export default{
    async register(userData){
        //Check if passwords match and if user exists
        const errors = [];
        const userExists = await User.exists({email: userData.email});
        const passwordMatch = userData.password === userData.confirmPassword
        if(userExists){
            errors.push('Email already exists!');
        };
        if(!passwordMatch){
            errors.push('Passwords don\'t match');
        };
        if(errors.length > 0){
            throw new CustomValidationError(errors);
        }
        return User.create(userData)
    },
    async login(email, password){
        //check if email exists
        const user = await User.findOne({email});
        if(!user){
            throw new Error('Invalid email or password!');
        };

        //check if password is correct
        const isValid = await brcypt.compare(password, user.password);

        if(!isValid){
            throw new Error('Invalid email or password!');
        }

        //generate token
        const payload = {
            id: user._id,
            email: user.email,
        };
        const token = jwt.sign(payload, SECRET, { expiresIn: '1h'});

        //return token
        return token;
    }
}

