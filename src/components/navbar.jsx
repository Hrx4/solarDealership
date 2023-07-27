import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <div className='navbar'>
            <div className="logo">
                
            </div>
            <div className="navlist">
                <ul>
                    <li >
                        <Link  to={"/"} >
                            <h4>
                                Home
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/about"}>
                            <h4>
                            About Us
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/gallery"}>
                            <h4>
                            Gallery
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/solardealership"}>
                            <h4>
                            Solar Dealership
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/contactus"}>
                            <h4>
                            Contact Us
                            </h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/applynow"}>
                            <Button variant='contained' color='success'>
                                Apply Now
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </>
  )
}

export default Navbar