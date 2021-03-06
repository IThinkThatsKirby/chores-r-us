import React from 'react';
import Hero from '../Components/Hero';
import Section from '../Components/Section';
import NavBar from '../Components/NavBar';
import AboutUs from '../Components/AboutUs';
import Testimonials from '../Components/Testimonials';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';

export default function Landing(props) {
  return (
    <div>
      <NavBar />
      <Hero
        setCurrentUser={props.setCurrentUser}
        currentUser={props.currentUser}
        setUserChores={props.setUserChores}
      />
      <Section />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
