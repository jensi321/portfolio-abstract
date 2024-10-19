import React  from 'react'
import { Link,  useNavigate } from 'react-router-dom'

const FrontPage = () => {
    const navigate = useNavigate();


    const handleLinkClick = (to) => {

        navigate(to);

        if (to === '/single' || to === '/home') {

            window.scrollTo(0, document);

        }

    };

    return (
        <>
            <div className="front-outer">
                <div className="container">
                    <div className="front-inner">
                        <div className="logo">
                            <img src="assets/Images/logo.png" alt="" /><span>bstract</span>
                        </div>
                        <div className="heading">
                            <h2>Personal Portfolio React Theme</h2>
                            <p>A simple and minimal theme for personal resume and portfolio</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12 item">
                                <h2 className='text'>
                                    Single Page
                                </h2>
                                <Link to={'/single'} onClick={() => handleLinkClick('/single')}>
                                    <img src="assets/Images/singlepage.png" alt="" />
                                </Link>
                            </div>
                            <div className="col-md-6 col-12 item">
                                <h2 className='text'>
                                    Multi Page
                                </h2>
                                <Link to={'/home'} onClick={() => handleLinkClick('/home')}>
                                    <img src="assets/Images/multipage.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FrontPage
