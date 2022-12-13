const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const signUpSchema = new Schema({ 
    firstName: { 
        type: String,
        required: true, 
    },

    lastName: { 
        type: String,
        required: true, 
    },

    age: { 
        type: String,
        required: true, 
    },

    email: { 
        type: String,
        required: true, 
    },

    password: { 
        type: String,
        required: true, 
    }   
})

const SignUpModel = mongoose.model('signUpAccount', signUpSchema); 

module.exports = SignUpModel;