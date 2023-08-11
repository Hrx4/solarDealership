import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit';


const Profile = () => {
  const signout = useSignOut()
  const navigate = useNavigate()

    const data = JSON.parse(localStorage.getItem("customerData"))

    
    const handleLogout = (e)=>{
      localStorage.removeItem("customerData")
      signout();
      navigate('/customerlogin')
    }



  return (


    <>
         <div className="customerbody">
            <div className="customerheader">
              <div className="upper">
              <div className='customerbtn'>
              <Button variant='contained' color='error'   onClick={()=> handleLogout()} >
               Log Out
             </Button>
              </div>
              </div>
              <div className="profile-picture">
                <img src={data.photo} alt="Profile" />
            </div>
            </div>
            <div className="customermain">
              <h2>{data.name}</h2>

                  <div className="customercontent">
                    <div className="leftside">
                    <p>Registration No: {data.registrationNo}</p>
                    <p>Email: {data.email}</p>
                    <p>Mobile No: {data.mobileNo}</p>
                    <p>Aadhar No: {data.aadharNo}</p>
                    <p>PAN No: {data.panNo}</p>
                    <p>Dist Name: {data.distName}</p>
                    <p>Landmark: {data.landMark}</p>
                    <p>Address: {data.address}</p>
                    </div>

          
                    <div className="rightside">
                    <p>account No: {data.accountNo}</p>
                    <p>ifsc Code: {data.ifscCode}</p>
                    <p>registration Pay: {data.registrationPay}</p>
                    </div>
                  </div>
            </div>
         </div>
    </>
  )
}

export default Profile