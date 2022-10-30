import React, { useState } from 'react'
import {FiLogIn} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

import './Navbar.css'
const Navbar = () => {
    const [drop,setDrop] = useState(false);
    const dropMenu = () =>{
        if(!drop){
        setDrop(true);
        }
        else 
        setDrop(false);
        
    }
  return (
    <nav className='nav-bar'>
   
      <img src="./images/health.png" alt='HEALTHEC'/>
      <div className='nav-links'>
     <div className={`nav-items ${drop?'mob-items':''}`}>
      <ul>  
        <a href='/'><li>ABOUT</li></a>
        <a href='/'><li>CONTACT US</li></a>
     
      </ul>
      </div>
      <button className='button'><div className='container'>Login<FiLogIn/></div></button>
      <GiHamburgerMenu className={`${drop?'inactive':'hamburger'}`} onClick={dropMenu}/>
      <AiOutlineClose className={`${!drop?'inactive':'close'}`} onClick={dropMenu}/>
    </div>
    </nav>
  )
}

export default Navbar
