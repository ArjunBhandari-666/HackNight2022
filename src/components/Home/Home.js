import {Link} from 'react-router-dom'

import React from 'react';
import './Home.css';
const Home = () => {
  return (
    <>
     <div className='main-container'>
     <img src="./images/elderly.webp" alt="" />
      <div className='info'>
      <h1>Healing with Technology</h1>
      <p>Technology connects you with people you love and care. HEALTHEC helps you connect care to the people you love.A remote monitor and automatic appointment scheduler and medicine dispenser, taking care has never been this easy before.
      </p>
      <Link to="/signup"><button className='button-1'>Sign Out</button></Link>
      </div>
  
      
    
    </div>
   
    </>
  )
}

export default Home