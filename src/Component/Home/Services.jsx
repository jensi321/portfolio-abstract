import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import { serviceItem } from '../data';
import Aos from 'aos';

const Services = () => {
    const location = useLocation();

    useEffect(() => {
        Aos.init();
    }, []);

   
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:667,
                settings:{
                    slidesToShow:1,
                }
            }
        ]
    };
    return (
        <>
            <div className={location.pathname !== '/single' ? "outer" : ""} id='service' >
                <div className="service-outer" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                    <div className="container">
                        <div className="service-inner" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                            <div className="heading" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                                <h2><span className="line"></span> Our Services <span className="line"></span></h2>
                                <p>Explore my collection of innovative projects that showcase my expertise in Node Js development, UI-UX design, <br /> web development, mobile development, and brand identity design.</p>
                            </div>
                            <div className="slider-content" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                                <Slider {...settings}>
                                    {
                                        serviceItem.map((i, index) => {
                                            return (
                                                <div className="item" key={index} data-aos="fade-up" data-aos-duration={`${index}000`} data-aos-easing="ease-in-quad">
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
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services