import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
import {UserContext} from '../../../App'
import Fade from 'react-reveal/Fade';

const Service = ({service}) => {
    const { admin, setSelectedService } = useContext(UserContext)
    const {title, description, image} = service;
    
    return (
        <div className="col-md-6 col-lg-4 service">
            <Fade bottom duration={2700} distance='70px'>
                <div className="service-card">
                    <div className="text-center">
                        <img src={`${image}`} alt="" className="serviceImg" loading="lazy" />
                    </div>
                    <h4 className="serviceName">{title}</h4>
                    <p className="serviceDes">{description.substring(0,100)}</p>
                    <p className="serviceDesFull">{description}</p>
                    {/* <div className="bookingBox">
                        <p className="servicePrice">${price}</p>
                        <Link className="serviceLink" to={admin ? '/dashboard/orderList' : '/dashboard/book'}>
                            <button className="bookingBtn" onClick={() => setSelectedService(service)}>Book Now</button>
                        </Link>
                    </div> */}
                    
                </div>
            </Fade>
        </div>
    );
};

export default Service;