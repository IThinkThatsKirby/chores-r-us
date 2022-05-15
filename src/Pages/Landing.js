import React from 'react';
import Hero from '../Components/Hero';
import Section from '../Components/Section';
import NavBar from '../Components/NavBar';
import AboutUs from '../Components/AboutUs';
import Testimonials from '../Components/Testimonials';

export default function Landing() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Section />
      <AboutUs />
      <Testimonials />
     {/* <ContactUs />
      <Footer /> */}
    </div>
  );
}
