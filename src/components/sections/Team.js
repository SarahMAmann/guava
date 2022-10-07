import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import SectionHeader from './partials/SectionHeader';

const sectionHeader = {
    title: 'Staff',
    paragraph: ''
  };


export const Team = () => (
    <div>
        <SectionHeader data={sectionHeader} className="center-content" />
        <div className="container" id="teamSection" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '-50px'}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px'}}>
                <img alt="Adebayo headshot" src={require('./../../assets/images/adebayo.jpeg')}
                style={{height: '200px', width: '200px', borderRadius: '50%'}} />
                <div style={{marginTop: '10px'}}>
                    <p className="text-sm" style={{color: 'white'}}>Adebayo</p>
                    <p className="text-xs" style={{marginTop: '-10px', fontStyle: 'italic', color: '#2DA021'}}>Developer</p>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px'}}>
                <img alt="Abhishek headshot" src={require('./../../assets/images/abhishek.jpg')}
                style={{height: '200px', width: '200px', borderRadius: '50%'}} />
                <div style={{marginTop: '10px'}}>
                    <p className="text-sm" style={{color: 'white'}}>Abhishek</p>
                    <p className="text-xs" style={{marginTop: '-10px', fontStyle: 'italic', color: '#2DA021'}}>Marketing</p>
                </div>
            </div>
        </div>
  </div>
);