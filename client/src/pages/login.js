// Import necessary dependencies
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from "../utils/auth";

// Create the Login Component
function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {username: formState.username, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (event) {
      console.log(event);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  

  return (
    <div className="container my-1">
      <Link to="/signup">← Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label>Username:</label> 
          <input
            type="username" 
            name="username" 
            id="username"
            value={formState.username} 
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className='error-text'>The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className='flex-row flex-end'>
        <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
