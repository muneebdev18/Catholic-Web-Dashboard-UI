// import { Route, Routes, useLocation, useMatch } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/website/Home/Home';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/website/auth/login/Login';
import Signup from './pages/website/auth/signup/Signup';
import Dashboard from './pages/admin/Dashboard';
import NotFound from './pages/website/notFound/NotFound';
import AboutUs from './pages/website/AboutUs/AboutUs';
import Service from './pages/website/Service/Service';
import Categories from './pages/website/Categories/Categories';
import Events from './pages/website/Events/Events';
import ContactUs from './pages/website/ContactUs/ContactUs';
import Community from './pages/website/Community/Community';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/service' element={<Service />} />
        <Route path='/category' element={<Categories />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/community' element={<Community />} />
        <Route path='*' element={<NotFound />} />
        {/*------- Dashboard Routes ------- */}
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* <Home /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;