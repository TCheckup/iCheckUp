const SignUpModel= require('../model/schema/SignUpSchema'); 
const { formDataSignUp } = require('../server');

const signUp = (req, res) => { 
    const signUpData = new SignUpModel ({ 
        firstName: formDataSignUp.firstName,
        lastName: formDataSignUp.lastName,
        age: formDataSignUp.age,
        email: formDataSignUp.email,
        password: formDataSignUp.password
    })

    signUpData.save()
        .then(res => console.log(res)) 
        .catch(err => console.log(err)) 
}

module.exports = {
    signUp
}