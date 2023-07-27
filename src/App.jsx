import React from 'react'
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from './routes/MainRoute';
import AboutUs from './routes/AboutUs';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import ApplyNowForm from './routes/ApplyNow';
import Dealership from './routes/Dealership';



const App = () => {
  return (
    <>

<BrowserRouter>
<Navbar/>
      <Routes>
        <Route exact path="/" element={<MainRoute/>}/>
        <Route exact path="/about" element={<AboutUs/>}/>
        <Route exact path='/gallery' element={<Gallery/>}/>
        <Route exact path='/contactus' element={<Contact/>}/>
        <Route exact path='/applynow' element={<ApplyNowForm/>}/>
        <Route exact path='/solardealership' element={<Dealership/>}/>

      </Routes>
      <Footer/>

    </BrowserRouter>

    {/* <Navbar/>
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
      <Footer/> */}
    </>
  )
}

export default App