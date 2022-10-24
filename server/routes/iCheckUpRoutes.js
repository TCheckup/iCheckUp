const express = require("express"); 
const router = express.Router();
const SignUpController = require('../controller/signUpController');

// sign up
router.post('/sign-up', SignUpController.signUp);

module.exports = router; 
