import React from 'react'
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';


const footer = () => {
  return (
    <>
        <div className="footer">
            <div className="upper-footer">
                <div className="part1">
                    <ul>
                        <li>
                            <h1>
                            LATEST NEWS
                            </h1>
                        </li>
                        <li>
                        Get all solutions and solar dealership with all information in one place.
                        </li>
                        <li>
                            <FacebookIcon/>
                            <TwitterIcon/>
                            <InstagramIcon/>
                        </li>
                    </ul>
                </div>
                <div className="part1">
                    <ul>
                        <li>
                            <h3>
                                Quick Link
                            </h3>
                        </li>
                        <li>
                            <Link to={"/"}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to={"/gallery"}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to={"/solardealership"}>
                                Solar Dealership
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contactus"}>
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="part1">
                    <ul>
                    <li>
                        <h3>
                            Services
                        </h3>
                    </li>
                    <li>
                    Solar Installation Services
                    </li>
                    <li>
                    Optical Fiber & telecommunication work
                    </li>
                    <li>
                    Solar Street Light & Solar Water Heater System
                    </li>
                    <li>
                    Electric Work Services
                    </li>
                    <li>
                    O&M Services
                    </li>
                    <li>
                    EPC Services
                    </li>
                    <li>
                    Rooftop Ongrid
                    </li>
                    <li>
                    Project Development
                    </li>
                    </ul>
                </div>
                <div className="part4">
                    <h3>
                        Downloads
                    </h3>
                    +91 9735218132 <br />
                    info@solardealerships.co.in <br />
                    TATA POWER SOLAR LTD. Backbay Rec Station, 148, Lt. Gen. J.Bhonsle Marg Nariman Point, Mumbai - 400021
                </div>
            </div>
            <Divider  />
            <h6>
                ©2023 Solar Dealership. All rights reserved.
            </h6>
        </div>
    </>
)
}

export default footer