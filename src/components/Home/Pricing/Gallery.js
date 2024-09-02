import React from 'react';
import Card from "react-bootstrap/Card";
import '../Review/Review.css';
import Fade from 'react-reveal/Fade';
const Gallery = ({data}) => {
    return (
        <Fade bottom duration={1000} distance='40px'>
             <div class="card m-3" style={{width: "26rem",padding: '6px'}}>
            <img style={{height: '300px',width: '100%',objectFit:'cover'}} src={data.image} class="card-img-top" alt="..." loading="lazy" />
                <div class="card-body">
                    <h5 class="card-title">{data.name}</h5>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target="_blank" href={detail.link} class="btn btn-primary">Learn More</a> */}
                </div>
        </div>
        </Fade>
    );
};

export default Gallery;