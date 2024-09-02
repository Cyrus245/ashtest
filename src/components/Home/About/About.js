import React from 'react';
import teamPic from '../../../image/about.svg'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <section className="about overflow-hidden py-5">
            <div className="row w-100">
                <div className="row col-md-11 mx-auto ">
                    <div className="col-md-6 img">
                        <Fade duration={2000} left>
                            <img src={`${teamPic}`} alt="" className="img-fluid" />
                        </Fade>
                    </div>
                    <div className="col-md-6 ps-2">
                        <Fade duration={2000} right>
                            <p className="miniTitle">about us</p>
                            <h1 className="headerTitle">HOW WE CAN HELP YOUR <span className="headerHighlight">BUSINESS</span> GOAL</h1>
                            <p className="headerContent"> Specializes in providing turnkey design solutions for high-end
                                residential luxury homes and commercial projects.
                                We have achieved a reputation in the Interior Design market for our ability to create
                                luxurious, sophisticated interiors of timeless quality, extraordinary design, and functionality,
                                infused with clients' personal styles and desires. Most importantly we respect our client's
                                budget and established timeline.
                            </p>
                            <button className="branBtn">learn More</button>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;