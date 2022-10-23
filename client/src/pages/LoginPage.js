import React, { useEffect, useState } from 'react'

// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

// css
import '../styles/LoginPage/LoginPage.css';

const LoginPage = () => {
  const initialValues = { email: "", password: "" }; 
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({}); 
  const [isSubmit, setIsSubmit] = useState(false); 

  // set input values
  const handleChange = (e) => { 
    const { name, value } = e.target;
     
    setFormValues({...formValues, [name]: value}); 
  }

  // handle submit
  const handleSubmit  = (e) => { 
    e.preventDefault(); 
    setFormErrors(validate(formValues)); 
    setIsSubmit(true); 

    console.log("clicked");
  }

  // field validation
  const validate = (values) => { 
    const errors = {}; 
    const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/; 
    
    if(!values.email) { 
      errors.email = "Email required!"; 
    } else if(!regex.test(values.email)){ 
      errors.email = "This is not a valid email format!"; 
    }

    if(!values.password) { 
      errors.password = "Password is required!"; 
    } else if(values.password < 4){
      errors.password = "Password must be more than 4 characters!"; 
    }

    console.log(errors);

    return errors; 
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){ 
      console.log(formValues);
    }
  }, [formErrors])

  return (
    <section className='login-container'>
       <div className='form-container'>
        <div className='regis-container'>
          <span>Already have an account?</span>
          <button className='register-btn'>Register</button>
        </div>
        <h2>Login with your data that you entered during Your registration</h2>
        <div className='form'>

          <label>Email</label>
          <input 
              name="email"
              onChange={(e) => handleChange(e)} 
              type="text" 
              placeholder="Email.." />   
          <p>{formErrors.email}</p>

          <label>Password</label>
          <input 
              name="password"
              onChange={(e) => handleChange(e)} 
              type="text" 
              placeholder='Password...'/>
          <p>{formErrors.password}</p>
          <button 
              onClick={(e)=> { handleSubmit(e) }}
            
              >Start Now!</button>
        </div>
      
        <div className='soc-btn'>
          <button className='google-btn'><FontAwesomeIcon icon={faGoogle}/>Sign in with Google</button>
          <button className='fb-btn'><FontAwesomeIcon icon={faFacebook}/>Sign in with Facebook</button>
        </div>

        <div className='login-footer'>
          <span>Don't you have an account?</span> 
          <button>Sign Up</button>
        </div>
      </div>
    </section> 
  )
}

export default LoginPage