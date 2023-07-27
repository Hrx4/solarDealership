import React from 'react'
import { Button } from '@mui/material'

const choose = () => {
  return (
    <>
        <div className="choose">
            <div className="choose-part">
                <div className="choose-image">

                </div>
                <div className="choose-text">
                    <h1>
                        WHY CHOOSE US
                    </h1>
                    <ul>
                        <li>
                        Extensive installation Experience.
                        </li>
                        <li>
                        In house design & Technical Experts.

                        </li>
                        <li>
                        One point contract responsibility.
                        </li>
                        <li>
                        Experience liaising team.
                        </li>
                        <li>
                        Well aware of process and people.
                        </li>
                        <li>
                        Timely completion of projects across India.
                        </li>
                        <li>
                        Significant collaborations and technical supports
                        </li>
                    </ul>
                    <Button color='success' variant='contained'>
                        Inquire Now
                    </Button>
                </div>
            </div>
        </div>
    </>  
)
}

export default choose