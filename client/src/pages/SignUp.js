import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../lib/register";
import "../styles/SignUp/SignUp.css";

const SignUp = ({ socket }) => {
  const navigate = useNavigate();

  const initialSignUp = {
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
  };

  const [formSignUp, setFormSignUp] = useState(initialSignUp);
  const [errorSignUp, setErrorSignUp] = useState({});
  const [isSignUpSubmit, setIsSignUpSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormSignUp({ ...formSignUp, [name]: value });
  };

  const redirect = () => {
    navigate("/");
  };

  const userRegister = async (data) => {
    try {
      registerUser(data.email, data.password, data, redirect);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    // set error validate
    setErrorSignUp(validate(formSignUp));
    setIsSignUpSubmit(true);

    // clear forms
    if (Object.keys(errorSignUp).length === 0 && isSignUpSubmit) {
      userRegister(formSignUp);
      alert("user register");
      setSuccess(true);
      setFormSignUp(initialSignUp);
      // send data to serve via web socket
      //   socket.emit("sign-up-account", formSignUp);

      //   // receive response from server
      //   socket.on("response-sign-in", (response) => {
      //     if (response) {
      //       // show modal
      //       setSuccess(true);
      //       // clear form
      //       setFormSignUp(initialSignUp);

      //       setTimeout(() => {
      //         setSuccess(false);
      //       }, 3000);
      //     }
      //   });
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = "*First name required";
    }

    if (!values.lastName) {
      errors.lastName = "*Last name required";
    }

    if (!values.age) {
      errors.age = "*Age required";
    }

    if (!values.password) {
      errors.password = "*Password required";
    } else if (values.password.length < 4) {
      errors.password = "*Must be greater than 4 characters.";
    }

    if (!values.email) {
      errors.email = "*Email required";
    } else if (!regex.test(values.email)) {
      errors.email = "*Invalid email";
    }

    return errors;
  };

  return (
    <section>
      <div className='form-sign-up'>
        <h2>Sign Up</h2>
        <p>{success ? "Your sign up have been saved!" : ""}</p>
        <form onSubmit={handleSubmitForm}>
          <label>First Name</label>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={formSignUp.firstName}
            onChange={handleOnChange}
          />
          <p>{errorSignUp.firstName}</p>

          <label>Last Name</label>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={formSignUp.lastName}
            onChange={handleOnChange}
          />
          <p>{errorSignUp.lastName}</p>

          <label>Age</label>
          <input
            type='text'
            name='age'
            placeholder='Age'
            value={formSignUp.age}
            onChange={handleOnChange}
          />
          <p>{errorSignUp.age}</p>

          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={formSignUp.email}
            onChange={handleOnChange}
          />
          <p>{errorSignUp.email}</p>

          <label>Password</label>
          <input
            type='text'
            name='password'
            placeholder='Password'
            value={formSignUp.password}
            onChange={handleOnChange}
          />
          <p>{errorSignUp.password}</p>

          <button type='submit'>Sign up</button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
