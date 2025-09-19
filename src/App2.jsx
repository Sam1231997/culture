
// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import BarkinLadi from './components/BarkinLadi';

import './App.css'
import Home from './Home'
import About from './components/About'
import Services from './components/HeroSection';
import Events from './components/Events';
// import Appointment from './components/Appointment';
import Admin from './components/Admin';
import ScrollToTop from './components/Scroll';
import Dashboard from './components/Dashboard';
import TestAd from './components/TestAd';
import Bassa from './components/Bassa';
import Bokkos from './components/Bokkos';
import HeroSection from './components/HeroSection';
import Product from './components/Product';


function App() {
 

  return (
    <>
   <Router>
   <ScrollToTop />
    <Header/>
      <div>
        {/* Add your navigation bar component here */}
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/barkin-ladi" element={<BarkinLadi/>}/> 
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/test" element={<TestAd/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/bassa" element={<Bassa/>}/>
          <Route path="/bokkos" element={<Bokkos/>}/>
          <Route path="/hero" element={<HeroSection/>}/>
          <Route path="/product" element={<Product/>}/> 
          <Route path="/events" element={<Events/>}/> 
          
        
          
          </Routes>
         
          </div>
          <Footer/>
          </Router>
  
  </>
  )
}

export default App
