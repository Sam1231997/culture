import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";



import ProtectedRoute from "./componentss/ProtectedRoute";
import DashboardLayout from "./components/Patient/DashboardLayout";
import PatientBills from "./components/Patient/PatientBills";
import Profile from "./components/Patient/Profile";
import Appointment from "./components/Patient/Appointment";
import AdminReport from "./components/Admin/AdminReport";


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
import Dashboard from './components/Dashboard';
import TestAd from './components/TestAd';
import Bassa from './components/Bassa';
import Bokkos from './components/Bokkos';
import HeroSection from './components/HeroSection';
import Product from './components/Product';







import ProtectedAdminRoute from "./componentss/ProtectedAdminRoute";
import AdminDashboardLayout from "./components/Admin/AdminDashboardLayout";
import AdminBills from "./components/Admin/AdminBills";
import AdminBillsList from "./components/Admin/AdminBillsList";



import BookedAppointments from "./components/Patient/BookedAppointments";
import AdminPatients from "./components/Admin/AdminPatients";
import AdminAppointments from "./components/Admin/AdminAppointments";
import AdminNotice from "./components/Admin/AdminNotice";
import Signup2 from "./components/Signup2";
import Client from "./components/Client";




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
          <Route path="/Admin" element={<AdminLogin/>}/>
          <Route path="/test" element={<TestAd/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/bassa" element={<Bassa/>}/>
          <Route path="/bokkos" element={<Bokkos/>}/>
          <Route path="/hero" element={<HeroSection/>}/>
          <Route path="/product" element={<Product/>}/> 
          <Route path="/events" element={<Events/>}/> 
          <Route path="/signup2" element={<Signup2/>}/> 
          <Route path="/client" element={<Client/>}/> 
          
         

        {/* Protected patient area */}
        <Route
          path="/patient/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="profile" />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="appointments" element={<Appointment />} />
          <Route path="bookedappointments" element={<BookedAppointments />} />
          <Route path="mybills" element={<PatientBills />} />
        </Route>

        {/* Protected admin area */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route index element={<Navigate to="records" />} />
          <Route path="records" element={<AdminPatients />} />
          <Route path="adminappointments" element={<AdminAppointments />} />
          <Route path="report" element={<AdminReport />} />
          <Route path="bills" element={<AdminBills />} />
          <Route path="billslist" element={<AdminBillsList />} />
          <Route path="notice" element={<AdminNotice/>} />
        </Route>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
