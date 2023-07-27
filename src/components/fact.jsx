import { Button } from '@mui/material'
import React from 'react'

const fact = () => {
  return (
<>
    <div className='fact'>
        <div className="upper-fact">
            <div className="fact-content">
                <h1  >
                WHO WE ARE
                </h1>
                At our company, we are passionate about providing sustainable energy solutions to businesses and individuals alike. We specialize in solar power solutions that not only help reduce carbon emissions but also provide long-term cost savings for our customers. <br />
                As a dealership, we offer a wide range of solar products and services that cater to the specific needs of our clients. We understand that each customer has unique requirements, and we strive to provide customized solutions that meet those needs. <br /> 
                <Button sx={{marginTop : 4}} variant='contained' color='success'>
                    Know More
                </Button>
            </div>
            <div className="fact-pic">

            </div>
        </div>
        <div className="lower-fact">
            <Button variant='contained' color='success' sx={{margin:"10px"}}>
                Enquiry Now
            </Button>
        </div>

    </div>
</>
)
}

export default fact