import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import Blogdetails from './BlogDetails.jsx/Blogdetails';
import { blogItems } from '../data';

const Blog = () => {
  const location = useLocation();
  useEffect(() => {
    Aos.init();
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState({});

  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 2,
      //   }
      // },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className={location.pathname !== '/single' ? "outer" : ""} id='blog'>
        <div className="blog-outer" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
          <div className="container">
            <div className="blog-inner">
              <div className="heading" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h2><span className="line"></span> My Blog <span className="line"></span></h2>
                <p data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out">Explore my collection of innovative projects that showcase my expertise in Node Js development, UI-UX design, <br /> web development, mobile development, and brand identity design.</p>

              </div>

              <div className="content" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-in-quad">
                <div className="row">
                  <Slider {...settings}>
                    {blogItems.map((item, index) => {
                      return (
                        <div className="item" data-aos="zoom-in" data-aos-duration={`${index}000`} data-aos-easing="ease-in-quad" key={index}>
                          <div className="item-inner">
                            <div className="img-content">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="text-content" >
                              <h4>{item.title}</h4>
                              <p>{item.date}</p>
                              <Link onClick={() => handleReadMore(item)}>Read More</Link>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <Modal show={modalOpen} onHide={handleCloseModal}>
          <Blogdetails value={selectedBlog} onClose={handleCloseModal}/>
        </Modal>
      )}
    </>
  )
}

export default Blog