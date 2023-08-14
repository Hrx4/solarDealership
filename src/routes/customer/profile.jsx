import React from 'react'
import { Button , Divider } from '@mui/material'
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
            
            <div className="customermain">
            
                  <div className="customercontent">
                    <div className="profile-picture">
                      <img src={data.photo} alt="Profile" />
                    </div>

                    <div className="leftside">
                    <p>Name 
                      <div>{data.name}</div>
                    </p>
                    <Divider/>
                    <p>Registration No  
                      <div>{data.registrationNo}</div>
                    </p>
                    <Divider/>
                    <p>Email 
                      <div>{data.email}</div>
                    </p>
                    <Divider/>
                    <p>Mobile No 
                      <div>{data.mobileNo}</div>
                    </p>
                    <Divider/>
                    <p>Dist Name
                      <div>{data.distName}</div>
                    </p>
                    <Divider/>

                    <p>LandMark 
                      <div>{data.landMark}</div>
                    </p>
                    <Divider/>

                    <p>Address 
                      <div style={{margin:"10px"}}>{data.address}</div>
                    </p>
                    <p>State 
                      <div>{data.state}</div>
                    </p>
                    <Divider/>
                    <p>DOB 
                      <div>{data.dob}</div>
                    </p>
                    <Divider/>
                  </div>

                  <Divider orientation='vertical' flexItem/>

          
                    <div className="rightside">
                    <p>Aadhar No 
                      <div>{data.aadharNo}</div>
                    </p>
                    <Divider/>

                    <p>Pan No 
                      <div>{data.panNo}</div>
                    </p>
                    <Divider/>

                    <p>account No 
                      <div>{data.accountNo}</div>
                    </p>
                    <Divider/>

                    <p>ifsc Code
                      <div>{data.ifscCode}</div>
                    </p>
                    <Divider/>

                    <p>Registration Pay 
                      <div>{data.registrationPay}</div>
                    </p>
                      <div className='customerbtn'>
                        <Button variant='contained' color='error'   onClick={()=> handleLogout()} >
                        Log Out
                        </Button>
                      </div>
                    </div>
                  </div>
            </div>
         </div>
    </>
  )
}

export default Profile