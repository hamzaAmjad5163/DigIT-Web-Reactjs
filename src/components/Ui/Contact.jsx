import React, {useRef} from 'react';
import image from '../../assets/img/image.png';
import emailjs from '@emailjs/browser';
import {Container, Row, Col} from "reactstrap";
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
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
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
                <button type="submit" value="Send" class="btn btn-primary">Send Message</button>
              </div>
              </form>
              
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero__img' data-aos='fade-up' data-aos-duration='2000'>
              <img src={image} alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;
