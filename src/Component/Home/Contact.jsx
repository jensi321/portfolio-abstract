import Aos from 'aos';
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className={location.pathname !== '/single' ? "outer" : ""} id='contact' data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
        <div className="contact-outer" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
          <div className="container">
            <div className="contact-inner" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
              <div className="heading" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                <h2><span className="line"></span> Contact Us <span className="line"></span></h2>
                <p>I thrive on turning complex problems into simple, beautiful <br />
                  solutions that enhance user satisfaction.</p>
              </div>

              <div className="contact-info" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                <div className="row">
                  <div className="col-sm-4 col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                    <div className="img-content">
                      <img src="assets/Images/email.png" alt="" /></div>
                    <p>abctract@gmail.com</p>
                  </div>
                  <div className="col-sm-4 col-12" data-aos="fade-up" data-aos-duration="1100" data-aos-easing="ease-in-quad">
                    <div className="img-content">
                      <img src="assets/Images/call.png" alt="" />
                    </div>
                    <p>+91 9000 000 000</p>
                  </div>
                  <div className="col-sm-4 col-12" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                    <div className="img-content">
                      <img src="assets/Images/map.png" alt="" />
                    </div>
                    <p>Surat, Gujrat -395002</p>
                  </div>
                </div>
              </div>

              <form data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                <div className="row">
                  <div className="col-md-6 col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-quad">
                    <div className="inputgroup">
                      <label >Name</label>
                      <input type="text" placeholder='Enter Your Name' />
                    </div>
                  </div>
                  <div className="col-md-6 col-12" data-aos="fade-up" data-aos-duration="1100" data-aos-easing="ease-in-quad">
                    <div className="inputgroup">
                      <label >Email</label>
                      <input type="text" placeholder='Enter Your Email' />
                    </div>
                  </div>
                  <div className="col-12" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                    <div className="inputgroup">
                      <label >Message</label>
                      <textarea name="" id="" placeholder='Enter Your Meassage'></textarea>
                    </div>
                  </div>
                  <div className="col-12" data-aos="fade-up" data-aos-duration="0000" data-aos-easing="ease-in-quad">
                    <div className="button-group">
                      <Link className='button'>Submit</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact