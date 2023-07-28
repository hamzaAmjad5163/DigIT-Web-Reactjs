import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Oracle from '../../assets/img/My project (1) 2.png';
import Segment from '../../assets/img/62cc204e150d5de9a3dad5ff (1) 2.png';
import Monday from '../../assets/img/Monday.com-Logo 2.png';
import WordPress from '../../assets/img/WordPress-logo 2.png';
import '../../styles/start.css'
const Expertise = () => {
  return (
   
    <div id='expertise'>
    <section>
      <Container>
        <Row>
        <h1  style={{fontFamily:'Balsamiq Sans, cursive', color:'#fed105',alignItems:"center",justifyContent:'center', fontSize:'50px', fontWeight:'700',textAlign:'center'}} className='expert_h1'>Causes That Trust Our Expertise</h1>
        <Col lg='3' md='4'>
            <div  data-aos='zoom-in' data-aos-duration='1500' className='brands'>
              <img src={Oracle} alt=''/>
              <img src={Segment} alt=''/>
              <img src={Monday} alt=''/>
              <img src={WordPress} alt=''/>
            </div>
          </Col>
          
          
        </Row>
      </Container>
    </section>
   
    </div>
  )
}

export default Expertise
