import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { education, Experience } from '../data';
import Skill from './Skill';
import Aos from 'aos';


const About = () => {
    const location = useLocation();
    useEffect(() => {
        Aos.init();
    }, []);



    return (
        <>
            <div className={location.pathname !== '/single' ? "outer" : ""} id='resume'>
                <div className="about-outer" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                    <div className="container">
                        <div className="about-inner">
                            <div className="heading">
                                <h2><span className="line"></span> My Resume <span className="line"></span></h2>
                                <p>Explore my collection of innovative projects that showcase my expertise in Node Js development, UI-UX design, <br /> web development, mobile development, and brand identity design.</p>

                            </div>

                            <div className="content" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                                <div className="row">
                                    <div className="content-inner col-lg-6 col-12">
                                        <div className="title"><span className='icon'><img src="assets/Images/magistrate.png" alt="" /></span> Education</div>

                                        <div className="items">
                                            {education.map((i, index) => {
                                                return (
                                                    <div className={`item`} data-aos="fade-up" data-aos-duration={`${index}000`} key={index}>
                                                        <div className="item-inner">
                                                            {/* <div className="dot"></div> */}
                                                            <div className="text-content">
                                                                <h4>School Name  </h4>
                                                                <div className="text"><p>- Master in Comuter Engineering</p> <span>June, 2023 - Present</span></div>


                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit, impedit temporibus error saepe voluptatem. Cum natus modi non tempora.</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="content-inner col-lg-6 col-12">
                                        <div className="title"><span className='icon'><img src="assets/Images/badge.png" alt="" /></span> Experience</div>
                                        <div className="items ">
                                            {Experience.map((i, index) => {
                                                return (
                                                    <div className={`item`} data-aos="fade-up" data-aos-duration={`${index}000`} key={index}>
                                                        <div className="item-inner">
                                                            {/* <div className="dot"></div> */}
                                                            <div className="text-content">

                                                                <h4>Compny Name  </h4>
                                                                <div className="text"><p>- React JS Developer</p> <span>June, 2023 - Present</span></div>


                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit, impedit temporibus error saepe voluptatem. Cum natus modi non tempora.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <Skill />
            </div>



        </>
    )
}

export default About