import React from 'react'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@mui/material'


function Item(props)
{
    return (
        <Paper sx={{backgroundColor: "transparent" , boxShadow: "none"}}>
          <h3>
            {props.item.description}
            </h3>
        </Paper>
    )
}
var items = [
  {
      description: "I want to express my gratitude to Solar Dealership for their exceptional services. They were incredibly helpful and patient throughout the entire process, explaining everything in detail and addressing all my concerns. The installation team was professional and completed the project on time. Now, my home is powered by clean, renewable energy, and I am proud to have made a positive impact on the environment. Solar Dealership is a trustworthy company that delivers on its promises.",
  },
  {
      description: "Choosing Solar Dealership for my solar power needs was one of the best decisions I made. The team was knowledgeable, friendly, and responsive from the beginning. They patiently answered all my questions and provided valuable guidance in selecting the right solar solution for my home. The installation process was seamless, and the quality of their work exceeded my expectations. I am delighted with the cost savings and the positive environmental impact I am making by going solar. I wholeheartedly recommend Solar Dealership for their excellent service and top-notch products.",

  }
]

const testimonials = () => {
  return (
    <>
        <div className="testimonials">
            <div className="testi-part">
            <Carousel sx={{}}>
            {
            items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </Carousel>
            </div>

        </div>
    </>
)
}

export default testimonials