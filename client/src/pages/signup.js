// Import necessary dependencies
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from '../utils/mutations';

// Create the Signup Component
function Signup(props) {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <Link to="/login">← Go to Login</Link>

      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div className='flex-row space-between my-2'>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='youremail@test.com'
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label>Username:</label>
          <input
            type="username"
            name="username"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className='flex-row flex-end'>
        <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
