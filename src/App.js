import React,{useState,useEffect}from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup'


const App = () => {
  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return <>{props.children}</>;
  };
  return (
    <> 
    <BrowserRouter>
    <ScrollToTop>
      <Navbar/>
      <Routes>
      <Route exact index path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />}/>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      </Routes>
      </ScrollToTop>
      </BrowserRouter>
    </>
  )
}

export default App
