import Aos from 'aos';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { serviceItem } from '../data';

const ServicesPage = () => {
    const location = useLocation();

    useEffect(() => {
        Aos.init();
    }, []);

  
    
    return (
        <>
            <div className={location.pathname !== '/single' ? "outer" : ""} id='service' data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                <div className="service-outer" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                    <div className="container">
                        <div className="service-inner" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                            <div className="heading" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                                <h2><span className="line"></span> Our Services <span className="line"></span></h2>
                                <p>Explore my collection of innovative projects that showcase my expertise in Node Js development, UI-UX design, <br /> web development, mobile development, and brand identity design.</p>
                            </div>
                            <div className="slider-content row" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                                
                                    {
                                        serviceItem.map((i, index) => {
                                            return (
                                                <div className="item col-lg-4 col-md-6 col-12 " key={index} data-aos="fade-up" data-aos-duration={`1200`} data-aos-easing="ease-in-quad">
                                                    <div className="item-inner">
                                                        <div className="top">
                                                            <div className="img-content">
                                                                <img src={i.img} alt="" />
                                                            </div>

                                                            <div className="title">{i.title}</div>
                                                        </div>
                                                        <div className="bottom">
                                                            <p>{i.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesPage
