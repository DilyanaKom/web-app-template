import User from '../models/User.js';
import brcypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET = 'faa3818769d423377a04c2c972ec684488ffd395df233aef135fc9cb39d0d705';

export default{
    async register(userData){
        //Check if passwords match
        if(userData.password !== userData.confirmPassword){
            throw new Error('Passwords don\'t match!');
        }


        //check if user exists
        const userExists = await User.exists({email: userData.email});
        if(userExists){
            throw new Error('Email already exists!')
        }

        return User.create(userData)
    }
}

