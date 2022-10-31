import React from 'react'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
    <h1>HISTORY</h1>
    <div className='dashboard-container'>
       
            <div className='card'>
                <p><span>Name :</span>Mr. Ramesh </p>
                <p><span>Checkup Date:</span> 31-10-2022</p>
                <p><span>Checkup at :</span> AJ Hospital</p>
                <p><span>Doctors Name :</span> Dr. Ram </p>
                <p><span>Summary :</span> Diagnosed with low Blood pressure</p>
                <p><span>Medicine prescribed :</span> Cilacar (5mg)</p>

            </div>
            <div className='card'>
                <p><span>Name :</span>Mr. Ramesh </p>
                <p><span>Checkup Date:</span> 15-11-2022</p>
                <p><span>Checkup at :</span> AJ Hospital</p>
                <p><span>Doctors Name :</span> Dr. Kishan </p>
                <p><span>Summary :</span> Blood pressure not normal but better compared to last checkup</p>
                <p><span>Medicine prescribed :</span> Cilacar (5mg)</p>
            </div>
            <div className='card'>
                <p><span>Name :</span>Mr. Ramesh </p>
                <p><span>Checkup Date:</span> 30-11-2022</p>
                <p><span>Checkup at :</span> AJ Hospital</p>
                <p><span>Doctors Name :</span> Dr. Ram </p>
                <p><span>Summary :</span> Blood pressure back to normal levels</p>
                <p><span>Medicine prescribed :</span>None</p>
            </div>
           
    </div>
    </div>
  )
}

export default Dashboard
