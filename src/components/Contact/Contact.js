import React from 'react'
import './Contact.css'
import {FaUserAlt} from 'react-icons/fa'
import {IoCall} from 'react-icons/io5'
import {AiFillMail} from 'react-icons/ai'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='info'>
        <h1>Contact Details</h1>
      <div className='contact-card'>
        <h2><FaUserAlt/> Arjun R Bhandari</h2>
        <span><IoCall/>+91 99999999999</span>
        <span><AiFillMail/>arjunbhandari@gmail.com</span>
      </div>
      <div className='contact-card'>
        <h2><FaUserAlt/> Shreejesh J Ballal</h2>
        <span><IoCall/>+91 99999999999</span>
        <span><AiFillMail/>shreejeshballal@gmail.com</span>
      </div>
      <div className='contact-card'>
        <h2><FaUserAlt/> Chiranth H Chiplunkar</h2>
        <span><IoCall/>+91 99999999999</span>
        <span><AiFillMail/>chiranth@gmail.com</span>
      </div>
      </div>
 
        <img src='./images/contact.jpg'></img>

      
    </div>
  )
}

export default Contact
