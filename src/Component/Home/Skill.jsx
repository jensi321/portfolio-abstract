import Aos from 'aos';
import React, { useEffect } from 'react'
import { skillItem } from '../data';

const Skill = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    
  return (
    <>
       <div data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                <div className="skill-outer" id='skill-outer' data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                    <div className="container">
                        <div className="skill-inner" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                            <div className="content" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                                    {
                                        skillItem.map((i, index) => {
                                            return (
                                                <div className="item" key={index} data-aos="fade-up" data-aos-duration={`${index}000`} data-aos-easing="ease-in-out">
                                                    <div className="item-content">
                                                    <div className="borders"></div>
                                                    <div className="item-inner">
                                                        <div className="img-content">
                                                            <img src={i.img} alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                            <h5>{i.title}</h5>
                                                        </div>
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

export default Skill
