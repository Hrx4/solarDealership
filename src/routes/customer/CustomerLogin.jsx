import React, { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
 import jwt_decode from "jwt-decode";
import backend from '../../backendLink';
import { CircularProgress } from '@mui/material';



const CustomerLogin = () => {
  const [registrationNo, setRegistrationNo] = useState('');
  const [loading , setLoading] = useState(false);

  // const {customerData , setCustomerData } = DataState()


  const navigate = useNavigate();
  const logIn = useSignIn()

  const handleSubmit = async(e) => {
    e.preventDefault();   
    setLoading(true) 

    try {
        const response = await fetch(`${backend}/customer/login/`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },  
        method: "POST",
          body: JSON.stringify({
            registrationNo: registrationNo
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
        localStorage.setItem("customerData",JSON.stringify(resJson.data))
        console.log(decodeToken.registrationNo);

        if(response.status===200 && decodeToken.registrationNo===registrationNo)     navigate('/profile')

      } catch (err) {
        console.log(err);
      }
      setLoading(false)
  };




  
  return (


<>
<div className="adminHeader">
  <h1>
  Hello! 
  </h1>
  {loading ? <div className="loader"> 
  Please Wait Your Data is Loading......
  <CircularProgress/>
  </div> : null}
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
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default CustomerLogin;
