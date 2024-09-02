import React, { useEffect, useState } from 'react';
import banner from '../../../image/hero-img.png'
import NavBar from '../../Shared/Navbar/Navbar';
import './Header.css'
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import TopBar from '../../Shared/Navbar/TopBar';
import { Carousel } from 'react-bootstrap';

const Header = () => {

    const [header, setHeader] = useState([])

    useEffect(() => {
        axios.get('https://backend.ashinteriorbd.com/api/content/v1/contentheader/list')
            .then(res => {
                setHeader(res?.data.data.content);
                console.log(res?.data.data.content);
            })
    }, [])

    return (
        <section className="header">
            <TopBar />
            <NavBar />

            <Carousel  interval={8000}>
                {header?.map(head => <Carousel.Item key={head._id}>
                    <img
                        className="d-block w-100"
                        style={{objectFit: 'cover',width: '100%',height: '550px'}}
                        src={`${head?.headerPhoto}`}
                        alt="First slide"
                        loading="lazy"
                    />
                    {/* {header?.map(head=> <div key={head._id} className="row w-100">
                <div className="row col-md-11 mx-auto">
                    <div className="col-md-7 titleArea">
                        <Fade duration={2000} left>
                            <p className="miniTitle">{head?.title.substring(0,15)}</p>
                            <h1 className="headerTitle">{head?.title.substring(16)} <span className="headerHighlight">BUSINESS</span></h1>
                            <p className="headerContent">{head?.subTitle}</p>
                            <a href="#services"><button className="branBtn">Get Started</button></a>
                        </Fade>
                    </div>
                    <Fade duration={2000} right>
                        <div className="col-md-5 img">
                            <img src={`${head?.headerPhoto}`} alt="" className="img-fluid"/>
                        </div>
                    </Fade>
                </div>
            </div>)} */}
                    <Carousel.Caption style={{marginBottom: '50px' }}>
                        <p >{head?.title.substring(0, 15)}</p>
                        <h1 >{head?.title.substring(16)} <span className="headerHighlight">BUSINESS</span></h1>
                        <p>{head?.subTitle}</p>
                        <a href="#services"><button className="branBtn">Get Started</button></a>
                    </Carousel.Caption>
                </Carousel.Item>
                )}
            </Carousel>
           <div className="headDown"></div>
        </section>
    );
};

export default Header;