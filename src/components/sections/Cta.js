import React from 'react';
import SectionHeader from './partials/SectionHeader';
import 'react-toastify/dist/ReactToastify.css';
import Contact from '../layout/Contact';

const sectionHeader = {
  title: 'Tell Us About Your Project',
  paragraph: ''
};

export const Cta = () => (
  <div className="container" id="contactSection" style={{marginTop: '100px', width: '60%'}}>
    <SectionHeader data={sectionHeader} className="center-content" />
    <Contact />
  </div>
);
