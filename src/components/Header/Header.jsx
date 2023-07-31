
import React,{ useEffect, useRef } from 'react';
import '../../styles/header.css';

const nav__links = [
    {
        path:'#home',
        display: 'Home'
    },
    {
        path:'#about',
        display: 'About Us'
    },
    {
        path:'#pricing-plane',
        display: 'Services'
    },
    {
        path: 'contactUs'
    }

]

const Header = () => {
    
    const headerRed = useRef(null);
    const menuRef = useRef(null);
    const headerFunc = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRed.current.classList.add('sticky__header');
        }else{
            headerRed.current.classList.remove('sticky__header');
        }
    }

    useEffect (()=>{
        window.addEventListener('scroll', headerFunc);
        return ()=> window.removeEventListener('scroll', headerFunc);
    },[]);
    const menuToggle = () => menuRef.current.classList.toggle('active__menu');

    const handleClick = e =>{
        e.preventDefault();

        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop;
        window.scrollTo({
            left:0,
            top:location - 80,
        });
    };

    return (
    <header className='header' ref={headerRed}>
        <div className='container'>
            <div className='nav__wrapper'>
                <div className='logo'>
                    <h2 style={{color:"#FED105", fontSize:'35px'}}>DigIT</h2>
                </div>

                <div className='navigation' ref={menuRef} onClick={menuToggle}>
                    <ul className='menu'>
                        {
                            nav__links.map((item, index) => (
                                <li className='nav__item' key={index}><a onClick={handleClick} href={item.path}>{item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>

                {/*=========nav right========= */}
                <div className='nav__right'>
                        <button className='register__btn' style={{fontWeight:'600'}}><a href='#contact'>Contact Us</a></button>
                        <span className='mobile__menu' onClick={menuToggle}><i className='ri-menu-line'></i></span>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header;
