import React from 'react'
import Fact from "../components/fact"
import Cards from "../components/cards"
import ImageList from '../components/imageList';
import Brief from "../components/brief"
import Testimonials from "../components/testimonials";
import Carousel from 'react-material-ui-carousel'
import Choose from "../components/choose";
import { Paper } from '@mui/material'


function Item(props)
{
    return (
        <Paper sx={{background:`url(${props.item.img})` , height: 600 , width: "100%"  , backgroundSize: "cover" ,backgroundRepeat:"no-repeat" , display:"flex" , justifyContent: "center" , alignItems:"flex-start" , flexDirection:"column", backgroundColor :"rgba(1, 1, 1, 0.5)" , backgroundBlendMode:"multiply"}}>
          <h1 className='main-heading'>
          {props.item.heading}
          </h1>
          <h2>
          {props.item.description}
          </h2>

        </Paper>
    )
}
var items = [
  {
      name: "Random Name #1",
      heading: "SOLAR SOLUTION FOR COMMERCIAL USE",
      description: "GET MORE SEVING IN YOUR BUSINESS",
      img: "https://solardealership.co.in/wp-content/uploads/2023/07/blue-solar-panels-1226088001-cee91a7ba920447280aed1d081b44859.jpg"
  },
  {
      name: "Random Name #2",
      heading: "SOLAR DEALERSHIP",
      description: "GET MORE SEVING IN YOUR LIFE",
      img: "https://solardealership.co.in/wp-content/uploads/2023/07/industrial-plant-solar-system-1.jpg"

  },
  {
    name: "Random Name #3",
    heading: "SOLAR SOLUTION FOR INDUSTRIAL USE" ,
    description: "GET MORE SEVING IN YOUR INDUSTRY",
    img: "https://solardealership.co.in/wp-content/uploads/2023/07/beautiful-alternative-energy-plant-with-solar-panels-scaled.jpg"

}
]

const MainRoute = () => {
  return (
    <>
      <Carousel >
        {
        items.map( (item, i) => <Item key={i} item={item} /> )
        }
      </Carousel>
      <Fact/>
      <Cards/>
      <ImageList/>
      <Brief/>
      <Testimonials/>
      <Choose/>
    </>
   )
}

export default MainRoute