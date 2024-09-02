import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../../../Shared/Spinner/Spinner';
// import Service from './Service';
 import Team from './Team';
 import './Team.css';
const Teams = () => {
   
    const [services, setServices] = useState([])
    const [showMore,setShowMore] = useState(false);

    useEffect(() => {
        axios.get('https://backend.ashinteriorbd.com/api/team/v1/team/list')
        .then(res => {
            console.log(res?.data.data.team)
            setServices(res?.data.data.team)
        })
    }, [])
   
    return (
        <section id="services" className="services">
            <h4 className="miniTitle text-center">Our Team</h4>
            {/* <div className="text-center">
                <h5 className="text-center sectionTitle">PROVIDE AWESOME SERVICE</h5>
            </div> */}
            {services.length === 0 && <div className="spinner text-center"><Spinner/></div>}
            <div className="row mt-4 container mx-auto justify-content-center teams">
                {
                   showMore ? services?.map(team => <Team key={team._id} team={team}/>) : services?.slice(0,9).map(team => <Team key={team._id} team={team}/>)
                }
            </div>
            {showMore ? <button onClick={()=>setShowMore(false)} className="moreBtn text-center">Hide Members</button> : <button onClick={()=>setShowMore(true)} className="moreBtn text-center">More Members</button>}
        </section>
    );
};

export default Teams;