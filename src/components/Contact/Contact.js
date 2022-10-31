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
        <div><FaUserAlt className='react-icon'/>Arjun R Bhandari</div>
        <div><IoCall className='react-icon'/>+91 7588703850</div>
        <div><AiFillMail className='react-icon'/>arjunbhandari@gmail.com</div>
      </div>
      <div className='contact-card'>
        <div><FaUserAlt className='react-icon'/>Shreejesh J Ballal</div>
        <div><IoCall className='react-icon'/>+91 8660437070</div>
        <div><AiFillMail className='react-icon'/>shreejeshballal@gmail.com</div>
      </div>
      <div className='contact-card'>
        <div><FaUserAlt className='react-icon'/>Chiranth H Chiplunkar</div>
        <div><IoCall className='react-icon'/>+91 8867245830</div>
        <div><AiFillMail className='react-icon'/>chiranth@gmail.com</div>
      </div>
      </div>
 
        <img src='./images/contact.jpg'></img>

      
    </div>
  )
}

export default Contact
