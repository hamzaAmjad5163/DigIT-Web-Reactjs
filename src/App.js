import "./App.css";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import Aos from "aos";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Ui/Contact";
import Hero from "./components/Ui/Hero";
function App() {
  useEffect (()=> {
    Aos.init();
  },[]);
  return (
    
      <Routes>
        <Route path='/' element={<Layout />}/>
        <Route path="contactUs" element={<Contact />}/>
        <Route path="home" element={<Layout />}/>
      </Routes>
    
    )
}

export default App;
