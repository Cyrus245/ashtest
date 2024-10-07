import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Contact.css";
//import contactImg from '../../../image/contact.svg';
import contactImg from "../../../image/contact.svg";
import swal from "sweetalert";
import Fade from "react-reveal/Fade";
import toast from "react-hot-toast";
import axios from "axios";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const loading = toast.loading("Uploading...");
    const headerInfo = {
      ...data,
    };
    axios
      .post(
        "https://backend-ashinteriorbd-8a6e29b4adf0.herokuapp.com/api/contact/v1/contact/add",
        headerInfo
      )
      .then((res) => {
        toast.dismiss(loading);
        if (res.data) {
          swal(
            "Success!",
            'Thank You!", "We appreciate you contacting us!',
            "success"
          );
          reset();
        }
      })
      .catch((error) => {
        toast.dismiss(loading);
        toast.error(error.message);
      });
  };
  return (
    <section id="contact">
      <Col md={11} className="mx-auto">
        <Row>
          <Col md={6}>
            <Fade duration={2000} left>
              <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
                {/* <h4 style={{width: '200px', marginRight: '10px'}} className="miniTitle text-center">CONTACT</h4> */}
                <h5 className="sectionTitle">GET IN TOUCH</h5>
                <Row>
                  <Col md={12} lg={6}>
                    <input
                      placeholder="Your Name"
                      type="text"
                      {...register("name", { required: true })}
                    />
                  </Col>
                  <Col md={12} lg={6}>
                    <input
                      placeholder="Your Mobile No"
                      type="number"
                      {...register("mobile", { required: true })}
                    />
                  </Col>
                  <Col md={12} lg={6}>
                    <input
                      placeholder="Your Email"
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </Col>
                  <Col md={12} lg={6}>
                    <input
                      placeholder="Your Address"
                      type="text"
                      {...register("address", { required: true })}
                    />
                  </Col>
                  {/* <Col md={12}>
                                        <input placeholder="Subject" type="text" required/>
                                    </Col> */}
                  <Col md={12}>
                    <textarea
                      placeholder="Your Message..."
                      {...register("message", { required: true })}
                    ></textarea>
                  </Col>
                </Row>
                <button className="branBtn" type="submit">
                  Submit Now
                </button>
              </form>
            </Fade>
          </Col>
          <Col md={6}>
            <Fade duration={2000} right>
              <img
                style={{ backgroundColor: "#d1bd84" }}
                src={`${contactImg}`}
                alt=""
                className="img-fluid"
                loading="lazy"
              />
            </Fade>
          </Col>
        </Row>
      </Col>
    </section>
  );
};

export default Contact;
