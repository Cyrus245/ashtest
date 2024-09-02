import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FooterCol from "./FooterCol";
import "./Footer.css";
import {
  usefulLink,
  ourServices,
  otherLinks,
  footerInfo,
} from "../../../Data/FooterData";
import FooterInfo from "./FooterInfo";
import { Link } from "react-router-dom";
import { scrollUP } from "../../Shared/ScrollTop/ScrollTop";

const Footer = () => {
  return (
    <section class="row footer">
      <Row className="col-md-11 mx-auto">
        <Row className="align-items-center footerInfo">
          {footerInfo.map((data) => (
            <FooterInfo data={data} key={data.id} />
          ))}
        </Row>
        <Col md={12} lg={6} className="fAboutUs">
          <h5>ABOUT US</h5>
          {/* <span className="animate-border"></span> */}
          <p className="aboutUsDes">
            Specializes in providing turnkey design solutions for high-end
            residential luxury homes and commercial projects. We have achieved a
            reputation in the Interior Design market for our ability to create
            luxurious, sophisticated interiors of timeless quality,
            extraordinary design, and functionality, infused with clients’
            personal styles and desires. Most importantly we respect our
            client’s budget and established timeline
          </p>
          <ul className="socialIcons">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100083519854444"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  style={{ color: "#42474D" }}
                  icon={faFacebook}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ash_interior_official/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  style={{ color: "#42474D" }}
                  icon={faInstagram}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCVZe_ZHVQz5Xi9wwZIsrZOQ"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  style={{ color: "#42474D" }}
                  icon={faYoutube}
                />
              </a>
            </li>
            {/* <li>
                            <Link onClick={scrollUP} to="/"><FontAwesomeIcon icon={faLinkedinIn}/></Link>
                        </li> */}
          </ul>
        </Col>
        <FooterCol key="2" menuItems={usefulLink} title="USEFUL LINK" />
        {/* <FooterCol key="3" menuItems={ourServices} title="OUR SERVICES"/> */}
        <FooterCol key="4" menuItems={otherLinks} title="OTHER LINKS" />
      </Row>
      <p className="copyRight">
        Copyright &copy; {new Date().getUTCFullYear() + " "}
        <span className="fHighlight">Ash Interior</span>. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
