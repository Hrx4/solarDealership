// src/Login.js
import React, { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import backend from '../backendLink';
import { CircularProgress } from '@mui/material';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading , setLoading] = useState(false)

  const logIn = useSignIn()
  const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)


    try {
        const response = await fetch(`${backend}/login`, {
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
        if(resJson.token){
          logIn({
            token: resJson.token,
            expiresIn: 60,
            tokenType: "Bearer",
            authState: {useName: username}
        })
        }
        

        if(resJson.token)     navigate('/admin')

      } catch (err) {
        console.log(err);
      }
      setLoading(false)
  };




  
  return (


<>
<div className="adminHeader">
  <h1>
  Hello! Admin
  </h1>
  {loading ? <div className="loader"> 
  Please Wait Your Data is Loading......
  <CircularProgress  />
  </div> : null}
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
