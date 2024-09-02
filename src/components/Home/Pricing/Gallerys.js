import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';
import Spinner from '../../Shared/Spinner/Spinner';

const Gallerys = () => {
    
    const [gallery, setGallery] = useState([])
    const [showMore,setShowMore] = useState(false);

    
    useEffect(() => {
        axios.get('https://backend.ashinteriorbd.com/api/gallery/v1/gallery/list')
        .then(res => {
            setGallery(res?.data.data.gallery);
           
        })
    }, [])

    return (
        <section id="testimonial">
            {/* <h4 className="miniTitle text-center"></h4> */}
            <div className="text-center mb-4">
            <h4 className="miniTitle text-center">GALLERY</h4>
            </div>
           
                    
                    {/* {
                        gallery.length === 0 ? 
                            <div className="text-center">
                                <Spinner/>
                            </div>: 
                            gallery.map(data=> {
                                return(
                                   
                                       
                                        <Gallery data={data} key={data._key}/>
                            
                                )
                        })
                    } */}
                    <div className="d-flex flex-wrap mt-5 pt-5 ms-5">
                    {
                     showMore ? gallery?.map(data => <Gallery data={data} key={data._id}></Gallery>) : gallery?.slice(0,9).map(data => <Gallery data={data} key={data._id}></Gallery>)
                    }
                </div>
                {showMore ? <button onClick={()=>setShowMore(false)} className="moreBtn text-center">Hide Photos</button> : <button onClick={()=>setShowMore(true)} className="moreBtn text-center">More Photos</button>}
        </section>
    );
};

export default Gallerys;