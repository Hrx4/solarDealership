import { Card } from '@mui/material'
import React from 'react'

const AboutUs = () => {
  return (
    <>
        <div className="about">
            <h1>
                About Us
            </h1>
           <br /> At our company, we are passionate about providing sustainable energy solutions to businesses and individuals alike. We specialize in solar power solutions that not only help reduce carbon emissions but also provide long-term cost savings for our customers.
<br />
As a dealership, we offer a wide range of solar products and services that cater to the specific needs of our clients. We understand that each customer has unique requirements, and we strive to provide customized solutions that meet those needs.
<br />
Our team comprises experienced professionals who are committed to delivering exceptional customer service. We take pride in the quality of our work and go the extra mile to ensure that our clients are satisfied with our products and services.
<br />
At our company, we believe that renewable energy is the future, and we are committed to playing our part in making that future a reality. Whether you are a business owner looking to reduce your energy costs or an individual seeking to make your home more sustainable, we have the expertise and experience to help you achieve your goals.
<br />
Thank you for considering our company for your solar power needs. We look forward to working with you and helping you make the switch to clean, renewable energy.
        </div>
        <div className="lower-about">
            <Card sx={{justifyContent:"center" ,height: "200px" , width: {sm:"100%" , xs:"90%"} , backgroundColor: "transparent" , border: "solid" , borderColor: "white", color:"white" , display: "flex", flexDirection:"column" , alignItems:"center" , margin:10}}>
                <h1 className='about-text'>
                    Our Mission
                </h1>
                <div className="about-text1">
                Our mission is to provide innovative and sustainable solar power solutions to businesses and individuals, while delivering exceptional customer service and promoting a cleaner, more sustainable future for all.
                </div>
            </Card>
            <Card sx={{justifyContent:"center" , height: "200px" , width: {sm:"100%" , xs:"90%"}, backgroundColor: "transparent" , border: "solid" , borderColor: "white" , color:"white", display: "flex" , flexDirection:"column" , alignItems:"center", margin:10}}
             className='about-card'
            >
                <h1 className='about-text'>
                    Our Vision
                </h1>
                <div className="about-text1">
                Our mission is to provide innovative and sustainable solar power solutions to businesses and individuals, while delivering exceptional customer service and promoting a cleaner, more sustainable future for all.

                </div>
            </Card>
        </div>
    </>
  )
}

export default AboutUs