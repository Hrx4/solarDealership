import React, { useState } from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit';


const Profile = () => {
  const signout = useSignOut()
  const navigate = useNavigate()

  const [change, setChange] = useState("profile")
    const data = JSON.parse(localStorage.getItem("customerData"))

    const handleProfile = (e)=>{
      setChange("profile")
    }
    const handleFinance = (e)=>{
      setChange("")
    }
    const handleLogout = (e)=>{
      localStorage.removeItem("customerData")
      signout();
      navigate('/customerlogin')
    }



  return (

    <>
    {
      (localStorage.getItem("customerData")===null) 
    }
    
    <div className="adminHeader">
  <h1>
  Hello! {data.name}
  </h1>
</div>
    <div className='admin'>
        <Button variant='contained' color='success'   onClick={()=> handleProfile()} >
            Profile
        </Button>
        <Button variant='contained' color='success'   onClick={()=> handleFinance()} >
          Finance
        </Button>
        <Button variant='contained' color='success'   onClick={()=> handleLogout()} >
          Log Out
        </Button>
    </div>

        <div className="about-me-card">.
        <div className="profile-picture">
            <img src={data.photo} alt="Profile" />
        </div>
        {
          (change) ?          
        
    <div className="profile-details">
        <h2>{data.name}</h2>
        <p>Registration No: {data.registrationNo}</p>
        <p>Email: {data.email}</p>
        <p>Mobile No: {data.mobileNo}</p>
        <p>Aadhar No: {data.aadharNo}</p>
        <p>PAN No: {data.panNo}</p>
        <p>Dist Name: {data.distName}</p>
        <p>Landmark: {data.landMark}</p>
        <p>Address: {data.address}</p>
    </div>
         :
         <div className="finance-details">
        
        <p>account No: {data.accountNo}</p>
        <p>ifsc Code: {data.ifscCode}</p>
        <p>registration Pay: {data.registrationPay}</p>
        
    </div>
        }
        
        </div>
    
    </>
  )
}

export default Profile