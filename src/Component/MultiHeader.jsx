import React, { useState } from 'react'
import { useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const MultiHeader = ({ setExpanded }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const [activeLinkId, setActiveLinkId] = useState(() => {
        const path = location.pathname;
        return path === '/home' ? '/home' : path;
    });

    const isActive = (path) => {
        return activeLinkId === path;
    };
 useEffect(() =>{
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100); 
 })

    const handleLinkClick = (path) => {
        setActiveLinkId(path);
        setExpanded(false);
        navigate(path);
    };

    return (
        <>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                    <Link to="/home" className={`nav-link ${isActive('/home') ? 'active' : ''}`} onClick={() => handleLinkClick('/home')}>Home</Link>
                    <Link to="/resume" className={`nav-link ${isActive('/resume') ? 'active' : ''}`} onClick={() => handleLinkClick('/resume')}>Resume</Link>
                    <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`} onClick={() => handleLinkClick('/portfolio')}>Portfolio</Link>
                    <Link to="/service" className={`nav-link ${isActive('/service') ? 'active' : ''}`} onClick={() => handleLinkClick('/service')}>Services</Link>
                    <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'active' : ''}`} onClick={() => handleLinkClick('/blog')}>Blog</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={() => handleLinkClick('/contact')}>Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </>
    )
}

export default MultiHeader
