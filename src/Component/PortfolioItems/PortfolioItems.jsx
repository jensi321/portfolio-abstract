import Aos from 'aos';
import React, { useEffect } from 'react'
import { FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { portfolioitem } from '../data';

const PortfolioItems = ({ value }) => {
    useEffect(() => {
      Aos.init();
    }, []);
  
   
    return (
        <>
            <div className="row">
                {
                    portfolioitem.map((i, index) => {
                        return (
                            <div className={`item col-xl-4 col-md-6 col-12 animate__animated  animate__zoomIn ${i.class}`} key={index} data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease">
                                <div className="item-inner">
                                    <div className="img-content">
                                        <img src={i.img} alt="" />
                                        <div className="bg-overlay">
                                            <Link><FaLink /></Link>
                                        </div>
                                    </div>
                                    <div className="text-content">
                                        <h4>Project Name</h4>
                                        <p>
                                            Project Tag Line
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PortfolioItems
