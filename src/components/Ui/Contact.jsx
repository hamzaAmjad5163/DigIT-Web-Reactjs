import React, {useRef} from 'react';
import image from '../../assets/img/image.png';
import emailjs from '@emailjs/browser';
import {Container, Row, Col} from "reactstrap";
import RImage from '../../assets/img/Rectangle 38.png';
import { Link } from 'react-router-dom';
const Contact = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pm43h36', 'template_ylgow9b', form.current, 'QPL0kfXanZPdWUP9u')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className='hero__section' style={{backgroundColor: '#fff1b4'}}>
      <Container style={{backgroundColor: '#fff1b4'}}>
      <Link to='/home' style={{border:'1px solid gray', background:'yellow', padding:'1%', borderRadius:'10px'}}>Back to Home</Link>
        <Row>
          
          <Col lg='6' md='6'>
          <h2 style={{fontSize:'50px' ,fontFamily: 'Frijole, cursive', color:'#fed105',alignItems:"center",justifyContent:'center',marginTop:'35%', textAlign:' center'}}>Contact Us</h2>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero__img' data-aos='fade-up' data-aos-duration='2000'>
              <img src={image} alt=''/>
            </div>
          </Col>
          
          <Col style={{ marginTop:'5%'}}>
          <div className='hero__content' data-aos='fade-up' data-aos-duration='2000'>
              <form class="row g-3" ref={form} onSubmit={sendEmail} style={{background:'#FFF6F6', padding:'5%', borderRadius:'20px'}}>
              <div>
                <h1 style={{color:'#FED105',fontFamily:'Balsamiq Sans', fontWeight:"700", fontSize:'64px', lineHeight:'76.8px', textAlign:'center',marginBottom:'5%'}}>Quick Find Us</h1>
              </div>
              <div class="col-md-6">
               
                <input style={{background:'#D9D9D9', borderRadius:'20px'}} type="text" class="form-control" name='username' placeholder='User Name'/>
              </div>
              <div class="col-md-6">
                
                <input placeholder='Your Email Address' type="email" name="email" class="form-control" id="inputEmail4" style={{background:'#D9D9D9', borderRadius:'20px'}} />
              </div>
  
              <div class="col-12">
                
                <input style={{background:'#D9D9D9', borderRadius:'20px'}} type="text" class="form-control" name="address" id="inputAddress" placeholder="Your Subject"/>
              </div>
              <div class="col-12">
                
                <textarea style={{background:'#D9D9D9', borderRadius:'20px'}} type="text" name="message" class="form-control" id="inputAddress2" placeholder="Write your message here."/>
              </div>

              <div class="col-12">
                <button style={{background:'#FED105', color:'black', border:'none', borderRadius:'20px', display:'flex', alignItems:'center',justifyContent:'center'}} type="submit" value="Send" class="btn btn-primary">Send Message</button>
              </div>
              </form>
              
            </div>
          </Col>
          <Col lg='6' md='6' style={{width:'100%', alignItems:'center', justifyContent:'center', position:'relative'}} >
            <div data-aos='fade-up' data-aos-duration='2000'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26607.35960849459!2d73.09508770996854!3d33.52946681262129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sphase%207%20bahria%20town%20islamabad%20soltridge!5e0!3m2!1sen!2s!4v1690799867463!5m2!1sen!2s" width="600" height="450" style={{border:'0', borderRadius:'20px', justifyContent:'center', alignItems:'center',width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>
        </Row>
        <Row style={{marginTop:'5%'}}>
        
          <Col lg='6' md='6'>
            <div className='hero__img' data-aos='fade-up' data-aos-duration='2000'>
              <img src={RImage} alt=''/>
            </div>
          </Col>
          <Col lg='6' md='6' >
          <h2 style={{fontFamily: 'Frijole, cursive', color:'#fed105',alignItems:"center",justifyContent:'center',marginTop:'15%', fontSize:'50px'}}>Quick Find Us</h2>

            <div style={{marginTop:'15%'}} data-aos='fade-up' data-aos-duration='2000'>
              <h3 style={{fontFamily: 'Balsamiq Sans',fontSize:'20px'}}>Email</h3>
              <h4 style={{fontFamily: 'Balsamiq Sans',fontSize:'15px', color:'gray'}}>hamzakhan5163@gmail.com</h4>

            </div>
            <div style={{marginTop:'5%'}} data-aos='fade-up' data-aos-duration='2000'>
              <h3 style={{fontFamily: 'Balsamiq Sans',fontSize:'20px'}}>Opening Hours</h3>
              <h4 style={{fontFamily: 'Balsamiq Sans',fontSize:'15px', color:'gray'}}>Saturday- Thursday 9am - 5pm</h4>

            </div>
            <div style={{marginTop:'5%'}} data-aos='fade-up' data-aos-duration='2000'>
              <h3 style={{fontFamily: 'Balsamiq Sans',fontSize:'20px'}}>Location</h3>
              <h4 style={{fontFamily: 'Balsamiq Sans',fontSize:'15px', color:'gray'}}>Phase 8, Bahria Town, Islamabad, Pakistan</h4>

            </div>
            <div style={{marginTop:'15%'}}>
              <button style={{background:'#3B5998', color:'white', marginRight:'2%', width:'20%', border:'none', borderRadius:'20px'}}><i class="ri-facebook-line"></i>Facebook</button>
              <button style={{background:'#C8232C', color:'white', marginRight:'2%', width:'20%', border:'none', borderRadius:'20px'}}><i class="ri-fingerprint-fill"></i>Printrest</button>
              <button style={{background:'#0E76A8', color:'white', marginRight:'2%', width:'20%', border:'none', borderRadius:'20px'}}><i class="ri-linkedin-line"></i>Linked In</button>
              <button style={{background:'#1DA1F2', color:'white', width:'20%', border:'none', borderRadius:'20px'}}><i class="ri-twitter-line"></i>Twitter</button>

            </div>
          </Col>
          <Col style={{marginTop:'5%'}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
       
              <h5 style={{borderTop:'1px solid black', width:'100%', textAlign:'center', fontSize:'15px',padding:'1%'}}>Copyrights @ Hamza Amjad (Private LIMITED) | All Rights Reserved</h5>
            </div>
          </Col>
        </Row>
       
      </Container>
    </section>
  )
}

export default Contact;