import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Testimonial from '../components/sections/Testimonial';
import {Cta} from '../components/sections/Cta';
import {Staff} from '../components/sections/Staff';

const Home = () => {

  return (
    <>
        <Hero className="illustration-section-01" />
        <About />
        <Staff />
        <Testimonial />
        <Cta />
    </>
  );
}

export default Home;