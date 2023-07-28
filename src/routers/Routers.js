import {Routes, Route, Navigate} from 'react-router-dom';
import Contact from '../components/Ui/Contact';
import Hero from '../components/Ui/Hero';
import Expertise from '../components/Ui/Expertise';
import Testimonials from '../components/Ui/Testimonials';
import Pricing from '../components/Ui/Pricing';
import About from '../components/Ui/About';
const Routers = () => {
    return ( 
       <> 
    <Hero />
    <About />
    <Expertise />
    <Testimonials />
    <Pricing />
    <Routes>
        <Route exact path='contactUs' element={<Contact/>}/>
    </Routes>
    </>
    );
};
export default Routers;