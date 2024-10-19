import React, { useEffect, useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const SingleHeader = ({ setExpanded }) => {

    const location = useLocation();
    const headerHeight = 70;
    const [activeLink, setActiveLink] = useState('/single'); // Default active link


    useEffect(() => {
        const hash = location.hash;
        const elementId = hash.replace('#', '');
        const element = document.getElementById(elementId);

        if (element) {
            const yOffset = element.offsetTop - headerHeight;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
            if (yOffset === 0) {
                setActiveLink('/single')
            }
        } 
        if (location.pathname === '/single') {
            setActiveLink('/single');
        } else {
            setActiveLink(location.pathname);
        }
    }, [location]);

    const handleScroll = () => {
        const sections = ['resume', 'portfolio', 'service', 'blog', 'contact'];
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) {
                const { offsetTop, clientHeight } = element;
                if (scrollPosition >= offsetTop - clientHeight / 2 && scrollPosition < offsetTop + clientHeight) {
                    setActiveLink(section);
                }
            }
        });

        if (scrollPosition === 0) {
            setActiveLink('/single')
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="">
                    <Link
                        to="/single"
                        className={`nav-link ${activeLink === '/single' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveLink('/single');
                            setExpanded(false);

                        }}
                    >
                        Home
                    </Link>
                    <Link
                        to="#resume"
                        className={`nav-link ${activeLink === 'resume' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveLink('resume');
                            setExpanded(false);

                        }}
                    >
                        Resume
                    </Link>
                    <Link
                        to="#portfolio"
                        className={`nav-link ${activeLink === 'portfolio' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveLink('portfolio');
                            setExpanded(false);

                        }}                    >
                        Portfolio
                    </Link>
                    <Link
                        to="#service"
                        className={`nav-link ${activeLink === 'service' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveLink('service');
                            setExpanded(false);

                        }}
                    >
                        Services
                    </Link>
                    <Link
                        to="#blog"
                        className={`nav-link ${activeLink === 'blog' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveLink('blog');
                            setExpanded(false);

                        }}
                    >
                        Blog
                    </Link>
                    <Link
                        to="#contact"
                        className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                        onClick={() => {
                            setActiveLink('contact');
                            setExpanded(false);

                        }}
                    >
                        Contact
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </>
    )
}

export default SingleHeader