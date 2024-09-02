import React from "react";
import ScrollTop from "../../Shared/ScrollTop/ScrollTop";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OurValue from "../OurValue/OurValue";
import Gallerys from "../Pricing/Gallerys";
import Pricing from "../Pricing/Pricing";
import Reviews from "../Review/Reviews";
import Team from "../Review/Team/Team";
import Teams from "../Review/Team/Teams";
import Services from "../Services/Services";

const Home = () => {
  return (
    <main>
      <Header />

      {/* <About/> */}
      <Services />
      {/* <OurValue/>
            <Pricing/> */}
      <Reviews />
      <Gallerys />
      <Teams />
      <Contact />
      <Footer />
      <ScrollTop />
    </main>
  );
};

export default Home;
