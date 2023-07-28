

import React from 'react'
import '../../styles/exercises.css';
import { Container, Row, Col } from 'reactstrap';
import vector from '../../assets/img/Vector.png'

const About = () => {
  return (
    <div id='about'>
         <section className='hero__section'>
      <Container>
        <Row>
        <Col lg='6' md='6'>
            <div  className='hero__img' data-aos='zoom-in' data-aos-duration='1500'>
              <img src={vector} alt=''/>
            </div>
          </Col>
          <Col lg='6' md='6'>
          <h1 data-aos='fade-right' data-aos-duration='2000' style={{fontFamily:'Balsamiq Sans, cursive', color:'#fed105',alignItems:"center",justifyContent:'center', fontSize:'50px', fontWeight:'700',marginLeft:'8%'}}>About Us</h1>

            <div className='hero__content' data-aos='fade-up' data-aos-duration='2000'>

              <h2 style={{fontFamily:'Balsamiq Sans, cursive', color:'#fed105',alignItems:"center",justifyContent:'center',marginTop:'15%'}}>Welcome to DigIT</h2>
              <p style={{fontFamily:'Balsamiq Sans, cursive', fontSize:'20px', color:'#fed105'}}>Where Creativity Meets Technology!</p>
              <p style={{fontFamily:'Balsamiq Sans, cursive', color:'#808080'}}>At DigIT, we breathe life into digital visions. With a perfect blend of creativity and technical prowess, we transform ideas into captivating realities. Our client-centric approach fuels our passion for innovation, ensuring that every project we undertake is unique and exceptional. From cutting-edge web design to data-driven marketing strategies, we empower businesses to thrive in the digital realm. Join us on this transformative journey, and let's shape the future of your brand together. Welcome to DigIT, where possibilities are endless, and success knows no bounds.</p>
              
            </div>
          </Col>
          
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default About
