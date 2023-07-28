

import React from 'react';
import '../../styles/pricing.css';

import handIcon from '../../assets/img/icons8-ok-hand-100 1.png';
import QualityIcon from '../../assets/img/icons8-good-quality-100 1.png';
import Guarantee from '../../assets/img/icons8-guarantee-100 1.png';

const Pricing = () => {
  return (
    <section id='pricing-plane' data-aos='fade-up' data-aos-duration='2000'>
        <div className='container'>
            <div className='pricing__top'>
                <h2 style={{fontFamily:'Balsamiq Sans, cursive', color:'#fed105',alignItems:"center",justifyContent:'center', fontSize:'50px', fontWeight:'700',textAlign:'center'}}>Our Planes</h2>
            </div>


            <div className='pricing__wrapper'>
                <div className='pricing__item' data-aos='zoom-in' data-aos-duration='1500'>
                    <div className='pricing__card-top' style={{display:'flex', gap:'5%'}}>
                        <img src={handIcon} alt='' style={{width:'20%'}}/>
                        <h2 style={{alignItems: 'center', justifyContent:'center',marginTop:'5%', textAlign:'center',fontFamily:'Balsamiq Sans, cursive',fontWeight:'900'}}>1: Spark</h2>
                        
                    </div>

                    <div className='services'>
                        <ul>
                            <li style={{marginTop:'5%'}}><span><i className='ri-checkbox-blank-circle-fill'></i></span>SEO Optimization</li>
                            <p style={{alignItems:'center', justifyContent:'center', textAlign:'start', fontSize:'10px', width:'100%', color:'gray'}}>Boost Your Visibility with Strategic Keyword Research, On-Page Optimization, And Link Building To Rank Higher On Search Engines.</p>
                            <li style={{marginTop:'5%'}}><span><i className='ri-checkbox-blank-circle-fill'></i></span>Web Development</li>
                            <p style={{alignItems:'center', justifyContent:'center', textAlign:'start', fontSize:'10px', width:'100%', color:'gray'}}>Create A Professional, Responsive Website That Represents Your Brand And Engages Visitors Effectively.</p>
                            <li style={{marginTop:'5%'}}><span><i className='ri-checkbox-blank-circle-fill'></i></span>Social Media Marketing</li>
                            <p style={{alignItems:'center', justifyContent:'center', textAlign:'start', fontSize:'10px', width:'100%', color:'gray'}}>Craft Engaging Content And Manage Your Social Media Presence To Foster Brand Awareness And Build A Loyal Community.</p>

                        </ul>

                        <button className='register__btn' style={{background:'#FED105', color:'black',borderRadius:'20px', marginTop:'40%'}}>Join Now</button>

                    </div>
                </div>

                <div className='pricing__item pricing__item-02' data-aos='zoom-in' data-aos-duration='1500' style={{background:'#FFE998'}}>
                    <div className='pricing__card-top' style={{display:'flex'}}>
                        <img src={QualityIcon} alt='' style={{width:'30%'}}/>
                        <h2 style={{alignItems: 'center', justifyContent:'center',marginTop:'10%', textAlign:'center',fontFamily:'Balsamiq Sans, cursive',fontWeight:'900', color:'black'}}>2: Blaze</h2>
                    </div>

                    <div className='services'>
                    <ul>
                            <li style={{marginTop:'5%', width:'120%'}}><span><i className='ri-checkbox-blank-circle-fill'></i></span>Custome Software Development</li>
                            <p style={{alignItems:'center', justifyContent:'center', textAlign:'start', fontSize:'10px', width:'100%', color:'gray'}}>Tailor-Mode Software Solutions To Streamline Operations, Imrove Efficiency, And Elevate Your Business To New Heights.</p>
                            <li style={{marginTop:'5%'}}><span><i className='ri-checkbox-blank-circle-fill'></i></span>Graphical Illustration</li>
                            <p style={{alignItems:'center', justifyContent:'center', textAlign:'start', fontSize:'10px', width:'100%', color:'gray'}}>Elevate Your Brands Visual Identity With Stunning Illustration And Designs That Leave A Lasting Impression On Your Audeince.</p>
                            <li style={{marginTop:'5%'}}><span><i className='ri-checkbox-blank-circle-fill'></i></span>Data Analytics</li>
                            <p style={{alignItems:'center', justifyContent:'center', textAlign:'start', fontSize:'10px', width:'100%', color:'gray'}}>Uncover Valuable Insights From Your Data To Make Informed Decisions Optimize Compaigns, And Maximize Your ROL.</p>

                        </ul>

                        <button className='register__btn' style={{background:'white', color:'#FED105', fontWeight:'bold',borderRadius:'20px',marginTop:"25%"}}>Join Now</button>

                    </div>
                </div>

                <div className='pricing__item pricing__item-03' data-aos='zoom-in' data-aos-duration='1500'>
                    <div className='pricing__card-top' style={{display:'flex'}}>
                        <img src={Guarantee} alt='' style={{width:'20%'}}/>
                        <h2 style={{alignItems: 'center', justifyContent:'center',marginTop:'5%', textAlign:'center',fontFamily:'Balsamiq Sans, cursive',fontWeight:'900', color:'black'}}> 3: Meteor</h2>
                  
                    </div>

                    <div className='services'>
                    <ul>
                            <li style={{marginTop:'5%', textAlign:'start'}}><span><i className='ri-checkbox-blank-circle-fill'></i></span>Comprehensive SEO & Content Strategy.</li>
                            <p style={{alignItems:'center', justifyContent:'center', textAlign:'start', fontSize:'10px', width:'100%', color:'gray'}}>A Complete SEO Combined With A Content Marketing Plane To Dominate Search Rankings And Establish Thought Leadership.</p>
                            <li style={{marginTop:'5%', textAlign:'start'}}><span><i className='ri-checkbox-blank-circle-fill'></i></span>Advanced Social Media Marketing</li>
                            <p style={{alignItems:'center', justifyContent:'center', textAlign:'start', fontSize:'10px', width:'100%', color:'gray'}}>Data Driven Insights To Create Powerfull Social Media Compaigns That Drive Conversions And Audience Engagement.</p>
                            <li style={{marginTop:'5%', textAlign:'start'}}><span><i className='ri-checkbox-blank-circle-fill'></i></span>Integrated Data Analytics & Reporting</li>
                            <p style={{alignItems:'center', justifyContent:'center', textAlign:'start', fontSize:'10px', width:'100%', color:'gray'}}>Utilize Advanced Analytics Tools To Monitor And Optimize Your Digital Performance.</p>

                        </ul>

                        <button className='register__btn'  style={{background:'#FED105', color:'black',borderRadius:'20px'}}>Join Now</button>

                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Pricing
