import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Sticky from 'react-sticky-el';
import MultiHeader from './MultiHeader';
import SingleHeader from './SingleHeader';




const Header = () => {

  const location = useLocation();
  const toggleNavbar = () => setExpanded(!expanded);
  const [expanded, setExpanded] = useState(false);


  return (
    <>
      <header>
        <Sticky>
          <div className="header-bg"></div>
          <Navbar expand="lg" expanded={expanded}>
            <Link to="" className="navbar-brand">
              <img src="assets/Images/logo.png" alt="" /><span>bstract</span>
            </Link>

            {location.pathname !== '/single' ? (
              <MultiHeader setExpanded={setExpanded}/>
            ) : (
              <SingleHeader setExpanded={setExpanded} />
            )}
            <div className="social-link">
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
              <Link to={''}>
                <FaFacebook />
              </Link>
              <Link to={''}>
                <FaXTwitter />
              </Link>
              <Link to={''}>
                <FaLinkedinIn />
              </Link>
              <Link to={''}>
                <FaGithub />
              </Link>
            </div>
          </Navbar>
        </Sticky>
      </header>
    </>
  );
};

export default Header;