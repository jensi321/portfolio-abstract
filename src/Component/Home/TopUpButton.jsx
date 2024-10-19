import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const TopUpButton = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };
  return (
    <>
    {showButton && (
        <div className="top-button" onClick={scrollToTop}>
            <Link><FaArrowUp /></Link>
        </div>
         )}
    </>
  )
}

export default TopUpButton