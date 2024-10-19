import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { connect } from 'react-redux';
import Banner from './Component/Home/Banner'
import Contact from './Component/Home/Contact'
import PortFolio from './Component/Home/PortFolio'
import Header from './Component/Header'
import Home from './Component/Page/Home'
import Loader from './Component/Loader';
import AboutContent from './Component/Home/AboutContent';
import BlogPage from './Component/Page/BlogPage';
import FrontPage from './Component/Page/FrontPage';
import ServicesPage from './Component/Page/ServicesPage';
import Footer from './Component/Footer';

const mapStateToProps = (state) => {
  return { loading: state.loading };
};

const AppRoutes = () => {
  const location = useLocation();
  // rest of your code
  return (
    <>
      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path='/' element={<FrontPage />} />
        <Route path='/single' element={<Home />} />
        <Route path='/home' element={<Banner />} />
        <Route path='/service' element={<ServicesPage />} />
        <Route path='/resume' element={<AboutContent />} />
        <Route path='/portfolio' element={<PortFolio />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<BlogPage />} />
      </Routes>

    </>
  );
};

const App = connect(mapStateToProps)(({ loading }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);
  return (

    <BrowserRouter>
        {showLoader ? <Loader /> : (
          <AppRoutes />
        )}
        <Footer />
    </BrowserRouter>
  );
});


export default App
