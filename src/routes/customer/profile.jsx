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

                    {
                      (data.approved==="approved") ?                     
                      <div style={{textTransform:"uppercase" , marginTop:"10px" , color:"green"}}>{data.approved}</div>:
                      <div style={{textTransform:"uppercase" , marginTop:"10px" , color:"red" }}>{data.approved}</div>


                    }


                    <h2>Personal Information</h2>

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
                    <p>DOB 
                      <div>{data.dob}</div>
                    </p>
                    <Divider/>
                    <p>Mobile No 
                      <div>{data.mobileNo}</div>
                    </p>
                    <Divider/>
                    <p>Aadhar No 
                      <div>{data.aadharNo}</div>
                    </p>
                    <Divider/>

                    <p>Pan No 
                      <div>{data.panNo}</div>
                    </p>
                    
                  </div>

                  <h2>Address Information</h2>


          
                    <div className="rightside">
                    <p>
                    Address 
                      <div style={{margin:"10px"}}>{data.address}</div>
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

                    <p>State 
                      <div>{data.state}</div>
                    </p>
                    
                    </div>
                    
                    <h2>Finance Information</h2>

                    <div className="rightside">

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

                    <Divider/>

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