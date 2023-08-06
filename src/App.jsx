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
import Admin from './routes/Admin';
import Login from './routes/Login';
import {  AuthProvider, RequireAuth} from "react-auth-kit";
import CustomerLogin from './routes/customer/CustomerLogin';
import Profile from './routes/customer/profile';



const App = () => {


  return (
    <>

    <BrowserRouter>
    
    {window.location.pathname ==='/admin' || window.location.pathname==='/login'?null: <Navbar/>}

            <Routes>
              <Route exact path="/" element={<MainRoute/>}/>
              <Route exact path="/about" element={<AboutUs/>}/>
              <Route exact path='/gallery' element={<Gallery/>}/>
              <Route exact path='/contactus' element={<Contact/>}/>
              <Route exact path='/applynow' element={<ApplyNowForm/>}/>
              <Route exact path='/solardealership' element={<Dealership/>}/>
              </Routes>
                <AuthProvider
                authType={"cookie"}
                authName={"_customer"}
                >
                  <Routes>
                  <Route exact path = '/customerlogin' element={<CustomerLogin/>} />
                    <Route exact path = '/profile'element={<RequireAuth loginPath='/customerlogin'>
                      <Profile />
                    </RequireAuth>}/>
                    
                  </Routes>
                </AuthProvider>



                <AuthProvider
  authType={"cookie"}
  authName={'_auth' }
>

                <Routes>
              <Route exact path="/admin" element={<RequireAuth loginPath='/login'>
                <Admin/>
              </RequireAuth>}/>
              
              <Route exact path="/login" element={<Login/>}/>

            </Routes>
            </AuthProvider>
        <Footer/>
     </BrowserRouter>

    </>
  )
}

export default App