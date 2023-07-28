import React from 'react';
import '../../styles/hero.css';
import {Container, Row, Col} from "reactstrap";
import heroImg from '../../assets/img/heroImage.png';
const Hero = () => {
  return (
    <div id='home'>
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content' data-aos='fade-up' data-aos-duration='2000'>
              <h2 style={{fontFamily: 'Frijole, cursive', color:'#fed105',alignItems:"center",justifyContent:'center',marginTop:'15%'}}>Paving the Digital highway to success</h2>
              <p style={{fontFamily:'Balsamiq Sans, cursive'}}>Where extraordinary ideas take flight, and ordinary is left behind in the rearview mirror. Welcome to our digital agency, where we turn imagination into realization, one byte at a time.</p>
              
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className='hero__img' data-aos='fade-up' data-aos-duration='2000'>
              <img src={heroImg} alt=''/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Hero
