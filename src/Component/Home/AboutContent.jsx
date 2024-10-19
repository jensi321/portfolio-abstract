import Aos from 'aos'
import React, { useEffect } from 'react'
import { FaEnvelope, FaLocationDot, FaPhoneFlip } from 'react-icons/fa6'
import { RiLinkM } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { BiSolidUser } from "react-icons/bi";
import { PiGraduationCap } from "react-icons/pi";
import Skill from './Skill'
import { education, Experience } from '../data'

const AboutContent = () => {
    useEffect(() => {
        Aos.init();
    }, []);



    return (
        <>
            <div className="about-section-outer" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                <div className="container">
                    <div className="about-inner">
                        <div className="heading" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
                            <h2><span className="line"></span>  About Me <span className="line"></span></h2>
                        </div>
                        <div className="content">
                            <div className="left" data-aos="flip-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                <div className="left-inner">
                                    <div className="img-content" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                                        <img src="assets/Images/about.png" alt="" />
                                    </div>
                                    <div className="name-content" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                                        <div className="title">
                                            <h5>Josie West</h5>
                                            <p>I'm Developer</p>
                                        </div>
                                    </div>

                                    <div className="info-content" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                        <div className="contact-title">
                                            <h3><div className="icon"><BiSolidUser />
                                            </div>Contact</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-6 col-12 info" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                                                <span className="icon"><FaPhoneFlip /></span>
                                                <div className="text">+91 9000 000 000</div>
                                            </div>
                                            <div className="col-lg-12 col-md-6 col-12 info" data-aos="fade-up" data-aos-duration="900" data-aos-easing="ease-in-out">
                                                <span className="icon"><FaEnvelope /></span>
                                                <div className="text">abctract@gmail.com</div>
                                            </div>
                                            <div className="col-lg-12 col-md-6  col-12 info" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                                <span className="icon"><RiLinkM /></span>
                                                <div className="text"><Link>www.abctract.com</Link></div>
                                            </div>
                                            <div className="col-lg-12 col-md-6 col-12 info" data-aos="fade-up" data-aos-duration="1100" data-aos-easing="ease-in-out">
                                                <span className="icon"><FaLocationDot /></span>
                                                <div className="text">Surat, Gujrat-395002</div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="education-outer" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-out">
                                        <h3> <PiGraduationCap />
                                            Education</h3>
                                        {
                                            education.map((i, index) => {
                                                return (
                                                    <div className="item col-lg-12 col-md-6 col-12" key={index} data-aos="fade-up" data-aos-duration={`${index}000`} data-aos-easing="ease-in-out">
                                                        <div className="item-inner">
                                                            <div className="text-content">
                                                                <span>2021 - 2022</span>
                                                                <h4>Lead Developer  </h4>

                                                                <p>Blockdots, London</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>

                            <div className="right" data-aos="flip-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                <div className="right-inner">

                                    <div className="name-content" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out">
                                        <div className="title">
                                            <h5>Josie West</h5>
                                            <p>I'm Developer</p>
                                        </div>
                                    </div>
                                    <div className="des" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                                        <h6>About Me</h6>
                                        <p>As a seasoned Node Js developer with a passion for building scalable and efficient applications, I've had the privilege of working with numerous clients to drive business growth and improve performance. With a keen eye for detail and a deep understanding of industry trends, I stay updated with the latest technologies to provide cutting-edge solutions that meet unique needs. When I'm not coding, you can find me exploring new design trends, reading about the latest advancements in tech, or simply enjoying a good cup of coffee.</p>
                                    </div>
                                    <div className="experience-outer" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-out">
                                        <h6>Experience</h6>
                                        {
                                            Experience.map((i, index) => {
                                                return (
                                                    <div className="item" key={index} data-aos="fade-up" data-aos-duration={`${index}000`} data-aos-easing="ease-in-out">
                                                        <div className="item-inner">
                                                            <div className="text-content">
                                                                <h4>Lead Developer  </h4>
                                                                <div className="text"> <p>React JS Developer</p> <span>June, 2023 - Present</span></div>

                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni velit, impedit temporibus error saepe voluptatem. Cum natus modi non tempora.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>

                                    <Skill />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent