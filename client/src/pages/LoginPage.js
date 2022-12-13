import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

// css
import "../styles/LoginPage/LoginPage.css";

const LoginPage = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  // set input values
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const redirect = () => {};

  const loginUser = async (email, password) => {
    try {
      loginUser(email, password, redirect);
    } catch (error) {
      console.log(error);
    }
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));
    setIsSubmit(true);

    // clear forms
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(initialValues);
    }
  };

  // field validation
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "*Email required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "*Password required!";
    } else if (values.password.length < 4) {
      errors.password = "*Password must be more than 4 characters!";
    }

    console.log(errors);

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  // fetch data from server (example)
  useEffect(() => {
    fetch("http://localhost:4000/home")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className='login-container'>
      <div className='form-container'>
        <div className='regis-container'>
          <span>Already have an account?</span>
          <Link
            className='register-btn'
            to='/sign-up'>
            Register
          </Link>
        </div>
        <h2>Login with your data that you entered during Your registration</h2>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            name='email'
            onChange={(e) => handleChange(e)}
            type='text'
            placeholder='Email..'
            value={formValues.email}
          />
          <p>{formErrors.email}</p>

          <label>Password</label>
          <input
            name='password'
            onChange={(e) => handleChange(e)}
            type='text'
            placeholder='Password...'
            value={formValues.password}
          />

          <p>{formErrors.password}</p>

          <button type='submit'>Start Now!</button>
        </form>

        <div className='soc-btn'>
          <button className='google-btn'>
            <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
          </button>
          <button className='fb-btn'>
            <FontAwesomeIcon icon={faFacebook} /> Sign in with Facebook
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
