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
    <section className='hero__section' style={{backgroundColor: '#FFFBE7'}}>
      <Container>
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
          <Col lg='6' md='6' style={{width:'100%', alignItems:'center', justifyContent:'center', position:'relative'}} >
            <div data-aos='fade-up' data-aos-duration='2000'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26607.35960849459!2d73.09508770996854!3d33.52946681262129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sphase%207%20bahria%20town%20islamabad%20soltridge!5e0!3m2!1sen!2s!4v1690799867463!5m2!1sen!2s" width="600" height="450" style={{border:'0', borderRadius:'20px', justifyContent:'center', alignItems:'center',width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </Col>
          <Col style={{border: '1px solid gray', marginTop:'5%', borderRadius:'20px'}}>
          <div className='hero__content' data-aos='fade-up' data-aos-duration='2000'>
              <form class="row g-3" ref={form} onSubmit={sendEmail}>
              <div class="col-md-6">
                <label for="User Name" class="form-label">User Name</label>
                <input type="text" class="form-control" name='username'/>
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" name="email" class="form-control" id="inputEmail4" />
              </div>
  
              <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" name="address" id="inputAddress" placeholder="1234 Main St"/>
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">Address 2</label>
                <input type="text" name="address2" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
              </div>
              <div class="col-12">
                <label for="meesage" class="form-label">Message</label>
                <textarea type="text" name="message" class="form-control" id="inputAddress2" placeholder="Message here.."/>
              </div>

              <div class="col-12">
                <button style={{background:'yellow', color:'black', border:'none'}} type="submit" value="Send" class="btn btn-primary">Send Message</button>
              </div>
              </form>
              
            </div>
          </Col>
          
        </Row>
        <Row style={{marginTop:'5%'}}>
        
          <Col lg='6' md='6'>
            <div className='hero__img' data-aos='fade-up' data-aos-duration='2000'>
              <img src={RImage} alt=''/>
            </div>
          </Col>
          <Col lg='6' md='6'>
          <h2 style={{fontFamily: 'Frijole, cursive', color:'#fed105',alignItems:"center",justifyContent:'center',marginTop:'15%', fontSize:'50px'}}>Quick Find Us</h2>

            <div style={{marginTop:'15%'}} data-aos='fade-up' data-aos-duration='2000'>
              <h3 style={{fontSize:'20px'}}>Email</h3>
              <h4 style={{fontSize:'15px', color:'gray'}}>hamzakhan5163@gmail.com</h4>

            </div>
            <div style={{marginTop:'5%'}} data-aos='fade-up' data-aos-duration='2000'>
              <h3 style={{fontSize:'20px'}}>Opening Hours</h3>
              <h4 style={{fontSize:'15px', color:'gray'}}>Saturday- Thursday 9am - 5pm</h4>

            </div>
            <div style={{marginTop:'5%'}} data-aos='fade-up' data-aos-duration='2000'>
              <h3 style={{fontSize:'20px'}}>Location</h3>
              <h4 style={{fontSize:'15px', color:'gray'}}>Phase 8, Bahria Town, Islamabad, Pakistan</h4>

            </div>
            <div style={{marginTop:'15%'}}>
              <button style={{background:'blue', color:'white', marginRight:'2%'}}><i class="ri-facebook-line"></i>Facebook</button>
              <button style={{background:'red', color:'white', marginRight:'2%'}}><i class="ri-fingerprint-fill"></i>Printrest</button>
              <button style={{background:'lightBlue', color:'white', marginRight:'2%'}}><i class="ri-linkedin-line"></i>Linked In</button>
              <button style={{background:'green', color:'white'}}><i class="ri-twitter-line"></i>Twitter</button>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Contact;