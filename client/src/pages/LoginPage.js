import React, { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import '../styles/LoginPage/LoginPage.css';

const LoginPage = () => {
  return (
    <section className='login-container'>
       <div className='form-container'>
        <div className='regis-container'>
          <span>Already have an account?</span>
          <button className='register-btn'>Register</button>
        </div>
        <h2>Login with your data that you entered during Your registration</h2>
        <div className='form '>
          <input type="text" placeholder="Email.." />        
          <input type="text" placeholder='Password...'/>
          <button>Start Now!</button>
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