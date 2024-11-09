import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../Shared/Spinner/Spinner";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(async () => {
    axios
      .get(
        "https://backend-ashinteriorbd-8a6e29b4adf0.herokuapp.com/api/product/v1/product/list"
      )
      .then((res) => setServices(res?.data.data.product));
  }, []);
  console.log(services);
  return (
    <section id="services" className="services">
      <h4 className="miniTitle text-center">OUR SERVICES</h4>
      {/* <div className="text-center">
                <h5 className="text-center sectionTitle">PROVIDE AWESOME SERVICE</h5>
            </div> */}
      {services.length === 0 && (
        <div className="spinner text-center">
          <Spinner />
        </div>
      )}
      <div className="row mt-4 container mx-auto justify-content-center">
        {showMore
          ? services?.map((service) => (
              <Service key={service._id} service={service} />
            ))
          : services
              ?.slice(0, 9)
              .map((service) => (
                <Service key={service._id} service={service} />
              ))}
      </div>
      {showMore ? (
        <button
          onClick={() => setShowMore(false)}
          className="moreBtn text-center"
        >
          Hide Services
        </button>
      ) : (
        <button
          onClick={() => setShowMore(true)}
          className="moreBtn text-center"
        >
          More Services
        </button>
      )}
    </section>
  );
};

export default Services;
