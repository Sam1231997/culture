import { BrowserRouter, Routes, Route,  } from "react-router-dom";




import Header from './components/Header'
import Footer from './components/Footer'
import BarkinLadi from './components/BarkinLadi';

import './App.css'
import Home from './Home'
import About from './components/About'
import Services from './components/HeroSection';
import Events from './components/Events';
// import Appointment from './components/Appointment';
import AdminLogin from './components/AdminLogin';
import ScrollToTop from './components/Scroll';
import DashboardLayout from './components/Client/DashboardLayout';
import AdminDashboardLayout from "./components/Admin/AdminDashboardLayout";
import ClientLogin from './components/ClientLogin';
import TestAd from './components/TestAd';
import Bassa from './components/Bassa';
import Bokkos from './components/Bokkos';
import HeroSection from './components/HeroSection';
import Product from './components/Product';
import Event1 from "./components/Client/Event1";
import DashboardHome from "./components/Client/DashboardHome";
import Bookings from "./components/Client/Bookings";


// import UpcomingEvents from "./events/UpcomingEvents";
// import AddEvent from "./admin/AddEvent";
import Signup from "./components/Signup";



import ProtectedRoute from "./routes/ProtectedRoute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";










function AppRoutes() {
  return (
    <BrowserRouter>
        <ScrollToTop />
    <Header/>
      <Routes>
    
        {/* Public routes */}
        <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>}/>
          <Route path="/barkin-ladi" element={<BarkinLadi/>}/> 
          
          <Route path="/test" element={<TestAd/>}/>
          
          <Route path="/bassa" element={<Bassa/>}/>
          <Route path="/bokkos" element={<Bokkos/>}/>
          <Route path="/hero" element={<HeroSection/>}/>
          <Route path="/product" element={<Product/>}/> 
          <Route path="/events" element={<Events/>}/> 
          <Route path="/signup" element={<Signup />} />
        <Route path="/client" element={<ClientLogin />} />
        <Route path="/Admin" element={<AdminLogin />} />
        
          
         
 {/* Protected patient area */}
        <Route
          path="/Client/DashboardLayout"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
           <Route path="events" element={<Event1/>}/>
           <Route path="bookings" element={<Bookings />} />
           <Route path ="prof" element={<DashboardHome/>}/>
           

        </Route>

        {/* Protected admin area */}
        <Route
          path="/Admin/AdminDashboardLayout"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardLayout />
            </ProtectedAdminRoute>
          }
        >
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
