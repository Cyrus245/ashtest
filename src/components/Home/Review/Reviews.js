import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Review from './Review';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core'
import Spinner from '../../Shared/Spinner/Spinner';
import ProjectCard from './ProjectCard';
import axios from 'axios';

const Reviews = () => {
    SwiperCore.use([Pagination, Autoplay]);
    const [reviews, setReviews] = useState([])
    const [showMore,setShowMore] = useState(false);
    // useEffect(() => {
    //     fetch('http://18.140.235.246:4000/api/project/v1/project/list')
    //     .then(res => res.json())
    //     .then(data => {
    //         setReviews(data);
    //     })
    // }, [])
    useEffect(() => {
        axios.get('https://backend.ashinteriorbd.com/api/project/v1/project/list')
        .then(res => {
            setReviews(res?.data.data.project);
            console.log(res?.data.data.project);
           
        })
    }, [])
    return (
        <section id="testimonial">
            <h4 style={{marginBottom: '40px'}} className="miniTitle text-center">Projects</h4>
            {/* <div className="text-center mb-4">
                <h3 className="sectionTitle">WHAT OUR CLIENTS SAY’S</h3>
            </div> */}
            <Col md={11} className="mx-auto">
                <Swiper 
                    pagination={{ clickable: true }}
                    slidesPerView={3}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 3,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={10}
                    >
                    
                    {
                        reviews?.length === 0 ? 
                            <div className="text-center">
                                <Spinner/>
                            </div>: 
                          showMore ? reviews?.map(review => {
                                return(
                                    <SwiperSlide key={review._id}>
                                        {/* <Review review={review} key={review._key}/> */}
                                        <ProjectCard review={review} key={review._id}/>
                                    </SwiperSlide>
                                )
                        }) : reviews?.slice(0,9).map(review => {
                            return(
                                <SwiperSlide key={review._id}>
                                    {/* <Review review={review} key={review._key}/> */}
                                    <ProjectCard review={review} key={review._id}/>
                                </SwiperSlide>
                            )
                    })
                    }
                </Swiper>
            </Col>
            {showMore ? <button onClick={()=>setShowMore(false)} className="moreBtn text-center">Hide Projects</button> : <button onClick={()=>setShowMore(true)} className="moreBtn text-center">More Projects</button>}
        </section>
    );
};

export default Reviews;