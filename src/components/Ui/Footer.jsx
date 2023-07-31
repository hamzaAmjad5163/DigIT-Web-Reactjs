import React from 'react';
import '../../styles/footer.css';
import { Link } from 'react-router-dom';


const FooterContainer = () => {
  return (
    <>
    
    <div id='contact'>
    <div className='footer-container' style={{ backgroundColor: '#fed105' }}>
      <div className='centered-text'>
        <h1 className='footer-title'>
          Got A Project! Let’s Talk
        </h1>
      </div>
      <p className='paragraph-text'>
        We'd love to hear from you! Reach out to us today and let's embark on a digital journey together. Contact us
        now for a consultation and discover how we can help your business thrive.
      </p>
      <button className='contact-button'>
        <Link to='/contactUs'>Contact Us</Link>
      </button>
    </div>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
       
        <h5 style={{borderTop:'1px solid black', width:'100%', textAlign:'center', fontSize:'15px',padding:'1%'}}>Copyrights @ Hamza Amjad (Private LIMITED) | All Rights Reserved</h5>
    </div>
    </div>
    </>
  );
};

export default FooterContainer;
