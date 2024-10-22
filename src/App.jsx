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


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
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