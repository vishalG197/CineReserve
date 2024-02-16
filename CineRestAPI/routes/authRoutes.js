// const passport = require('../config/passport');
const express = require('express')
const router = express.Router()
const authController = require('../controllers/authControllers')
const loginLimiter = require('../middleware/loginLimiter')

router.route('/')
    .post(loginLimiter, authController.login)

router.route('/refresh')
    .get(authController.refresh)

router.route('/logout')
    .post(authController.logout)

    
    
    // Facebook Login
    router.get('/facebook', authController.facebookLogin);
    
    // Facebook Callback
    router.get('/facebook/callback', authController.facebookCallback);
    
    // Google Login
    router.get('/google', authController.googleLogin);
    
    // Google Callback
    router.get('/google/callback', authController.googleCallback);
    
module.exports = router