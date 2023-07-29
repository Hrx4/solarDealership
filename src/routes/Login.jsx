// src/Login.js
import React, { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logIn = useSignIn()
  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    // Here, you can implement the logic to handle login and authentication
    // For this example, we'll just print the username and password to the console
    console.log('Username:', username);
    console.log('Password:', password);

    try {
        const response = await fetch('http://localhost:5000/login', {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },  
        method: "POST",
          body: JSON.stringify({
            userName: username ,
            password: password
          }),
        });

        let resJson = await response.json();
        console.log(resJson.token);
        logIn({
            token: resJson.token,
            expiresIn: 3600,
            tokenType: "Bearer",
            authState: {useName: username}
        })

      } catch (err) {
        console.log(err);
      }

    navigate('/admin')
  };




  
  return (


<>
<div className="adminHeader">
  <h1>
  Hello! Admin
  </h1>
</div>
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;
