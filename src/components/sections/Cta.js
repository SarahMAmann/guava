import React from 'react';
import SectionHeader from './partials/SectionHeader';
import 'react-toastify/dist/ReactToastify.css';
import Contact from '../layout/Contact';

const sectionHeader = {
  title: 'Tell Us About Your Project',
  paragraph: ''
};

class Cta extends React.Component {
  render() {
    return (
      <div className="container" id="contact" style={{marginTop: '100px', width: '60%'}}>
        <SectionHeader data={sectionHeader} className="center-content" />
        <Contact />
      </div>
    );
  }
}

export default Cta;