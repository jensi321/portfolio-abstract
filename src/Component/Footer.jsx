import React from 'react'
import { FaFacebook, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-outer">
                    <div className="footer-inner">        
                        <p className='copyright'>© 2024 All Rights Reserved by <Link to={''}>Abstract</Link></p>
                        <div className="social-link">
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
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
