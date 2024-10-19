import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  const location = useLocation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className={location.pathname !== '/single' ? "outer":"" } id='banner' data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
        <div className="banner-outer"  data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">

          <div className="img-bg"></div>
          <div className="container">
            <div className="banner-inner row" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
              <div className="text-content" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                <h2>
                  <div className="line"></div> <span>Hello!</span> <br />
                  I'm Josie West
                </h2>

                <h5>I'm  a<span> <Typewriter
                  words={['Full Stack', 'React Js', 'Node Js']}
                  loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                /></span> Developer </h5>

                <p>I build scalable and efficient applications with Node Js, delivering high-quality solutions that drive business growth. Proficient in Full Stack, React Js, Node Js I stay updated with industry trends to provide cutting-edge solutions.</p>
                <div className="button-group" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                  <Link className="button" to={location.pathname !== '/single' ? "/portfolio":"#portfolio" }>View My Work</Link>
                  <Link className="button2" to={location.pathname !== '/single' ? "/contact":"#contact" }>Contact Me <span><FaArrowRightLong /></span> </Link>
                </div>
              </div>
              <div className="img-content" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                <img src="assets/Images/profile1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner;