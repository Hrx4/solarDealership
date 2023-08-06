// src/Login.js
import React, { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
 // import { DataState } from '../../context/DataProvider';
 import jwt_decode from "jwt-decode";
import backend from '../../backendLink';



const CustomerLogin = () => {
  const [registrationNo, setRegistrationNo] = useState('');
  const [password, setPassword] = useState('');

  // const {customerData , setCustomerData } = DataState()


  const navigate = useNavigate();
  const logIn = useSignIn()

  const handleSubmit = async(e) => {
    e.preventDefault();    

    try {
        const response = await fetch(`${backend}/customer/login/`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },  
        method: "POST",
          body: JSON.stringify({
            registrationNo: registrationNo ,
            password: password
          }),
        });

        let resJson = await response.json();
         const decodeToken = await jwt_decode(resJson.token);
        if(resJson.token && decodeToken.registrationNo===registrationNo){
          logIn({
            token: resJson.token,
            expiresIn: 120,
            tokenType: "Bearer",
            authState: {registrationNo: registrationNo}
        })
        }
        console.log(jwt_decode(resJson.token));
        localStorage.setItem("customerData",JSON.stringify(resJson.data))
        console.log(resJson);
        console.log(decodeToken.registrationNo);

        if(response.status===200 && decodeToken.registrationNo===registrationNo)     navigate('/profile')

      } catch (err) {
        console.log(err);
      }
  };




  
  return (


<>
<div className="adminHeader">
  <h1>
  Hello! 
  </h1>
</div>
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="registrationNo">Registration No:</label>
          <input
            type="text"
            id="registrationNo"
            value={registrationNo}
            onChange={(e) => setRegistrationNo(e.target.value)}
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

export default CustomerLogin;
