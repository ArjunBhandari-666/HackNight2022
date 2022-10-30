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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, illum voluptate. Voluptatem maiores magnam facere vel ipsum, sequi consectetur necessitatibus? Facere laboriosam itaque porro minus voluptas maxime ducimus omnis reprehenderit.
      </p>
      <Link to="/signup"><button className='button-1'>Sign Up</button></Link>
      </div>
  
      
    
    </div>
   
    </>
  )
}

export default Home