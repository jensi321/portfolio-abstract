import Aos from 'aos';
import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const Blogdetails = ({ value, onClose }) => {
    useEffect(() => {
      Aos.init();
    }, []);
  
    const sliderimg = [
        {
            img: "assets/Images/desc1.jpg"
        },
        {
            img: "assets/Images/desc2.jpg"
        },
        {
            img: "assets/Images/desc3.jpg"
        },
    ]
    return (
        <>
            <div className="description-outer">
                <div className="description-inner">
                    <Link className="close" onClick={onClose}><IoClose /></Link>
                    <div className="top">
                        <div className="text-content">
                            <h2>{value.title}</h2>
                            <div className="date">{value.date}</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit praesentium ut nesciunt molestias eaque consequatur eius exercitationem earum alias ullam. Deleniti iure magnam dignissimos alias sunt deserunt dolore incidunt blanditiis?</p>

                            <div className="category">
                                <div>
                                    <div className="title">Category:</div>
                                    <p>Lifestyle, Health</p>
                                </div>
                                <div>
                                    <div className="title">Posted by:</div>
                                    <p>flatheme</p>
                                </div>

                            </div>
                        </div>
                        <div className="img-content">
                            <Slider dots>
                                {
                                    sliderimg.map((i, index) => {
                                        return (
                                            <div className="item" key={index}>
                                                <div className="item-inner">
                                                    <img src={i.img} alt="" />
                                                </div>

                                            </div>
                                        )
                                    })
                                }

                            </Slider>
                        </div>
                    </div>

                    <div className="blockquote">
                        <div>
                        <p>"Creativity is intelligence having fun."</p>
                        <span>- Albert Einstein</span>
                        </div>
                    </div>


                    <div className="text">
                        <h5>Best way to solve business deal issue.</h5>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatum commodi porro delectus reprehenderit laudantium architecto rerum atque adipisci expedita nihil neque sed quam, fuga aspernatur. Rerum aperiam adipisci quae, temporibus odio aspernatur, quas nostrum, recusandae quis molestias perferendis velit mollitia omnis voluptate. Iure minus explicabo esse neque soluta enim.
                        </p>
                    </div>
                    <div className="text">
                        <h5>Build Your Portfolio</h5>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatum commodi porro delectus reprehenderit laudantium architecto rerum atque adipisci expedita nihil neque sed quam, fuga aspernatur. Rerum aperiam adipisci quae, temporibus odio aspernatur, quas nostrum, recusandae quis molestias perferendis velit mollitia omnis voluptate. Iure minus explicabo esse neque soluta enim.
                        </p>
                    </div>
                    <div className="text">
                        <h5>Gain Practical Experience</h5>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque voluptatum commodi porro delectus reprehenderit laudantium architecto rerum atque adipisci expedita nihil neque sed quam, fuga aspernatur. Rerum aperiam adipisci quae, temporibus odio aspernatur, quas nostrum, recusandae quis molestias perferendis velit mollitia omnis voluptate. Iure minus explicabo esse neque soluta enim.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogdetails
