import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Team.css';

const Team = ({ team }) => {

  const {name,designation,photo} = team;

  return (
    <>
      <section className="container">
        <div className="team">

          <div className="img">
            <img src={photo} alt="profile_image" className="profile" loading="lazy" />
          </div>

          <h3 className="title">{name}</h3>
          <h4 className="post">
            {" "}
            <span className="position">{designation}</span> 
          </h4>
          {/* <p className="description">{data.description}</p> */}
          {/* <div className="contact_link">
            <a href={data.url.linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="linkedin_icon" />
            </a>
            <a href={data.url.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="git_icon" />
            </a>
            <a href={data.url.website} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGlobe} className="web_icon" />
            </a>
          </div> */}

        </div>
      </section>
    </>
  );
};

export default Team;