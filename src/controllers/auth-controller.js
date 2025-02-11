import { Router } from 'express';
import authService from '../services/auth-service.js';
import { getErrorMessage } from '../utils/error-utils.js';

const authController = Router();

authController.get('/login', (req, res) => {
    res.render('auth/login');
});

authController.post('/login', async (req, res) => {
    const { email, password} = req.body;

    try {
    
        const token = await authService.login(email, password);
        res.cookie('auth', token, {httpOnly: true});
        res.redirect('/');
        
    } catch (error) {
        return res.render('auth/login', {error: getErrorMessage(error)});
        
    }
});

authController.get('/register', (req, res) => {
    res.render('auth/register');
});

authController.post('/register', async (req, res) => {
    const userData = req.body;

    try {
        await authService.register(userData);
        res.redirect('/auth/login');
    } catch (error) {
        const errors = getErrorMessage(error);
        return res.render('auth/register', {error: errors, user: userData});
    }
    
    
})


export default authController;