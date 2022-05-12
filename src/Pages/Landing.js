import React from "react";
import NavBar from "../Components/NavBar";
import Hero from "../Components/Hero"
import Section from "../Components/Section"


export default function Landing() {
  return (
    <div>
      <NavBar />
      <Hero /> 
      <Section />
      {/* <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer /> */}
    </div>
  );
}
