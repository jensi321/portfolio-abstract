import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import PortfolioItems from '../PortfolioItems/PortfolioItems';
import { useLocation } from 'react-router-dom';
import Aos from 'aos';


const PortFolio = () => {
    const location = useLocation();
 
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            <div className={location.pathname !== '/single' ? "outer" : ""} id='portfolio'>
                <div className="portfolio-outer " data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                    <div className="container">
                        <div className="portfolio-inner" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                            <div className="heading" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                                <h2><span className="line"></span> Our Project <span className="line"></span></h2>
                                <p>Explore my collection of innovative projects that showcase my expertise in Node Js development, UI-UX design, <br /> web development, mobile development, and brand identity design.</p>
                            </div>
                            <div className="bottom" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                                <Tabs
                                    defaultActiveKey="1"
                                    items={[
                                        {
                                            label: 'All',
                                            key: '1',
                                            children: <PortfolioItems />,
                                        },
                                        {
                                            label: 'Ui - Ux Design',
                                            key: '2',
                                            children: <PortfolioItems value={'uiux'} />
                                        },
                                        {
                                            label: 'Web Development',
                                            key: '3',
                                            children: <PortfolioItems value={'web'} />,
                                        },
                                        {
                                            label: 'Mobile Development',
                                            key: '4',
                                            children: <PortfolioItems value={'mobile'} />,
                                        },
                                    ]}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortFolio
