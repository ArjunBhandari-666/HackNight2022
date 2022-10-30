import React from 'react'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
    <h1>DATA</h1>
    <div className='dashboard-container'>
       
            <div className='card'>
                <p><span>Checkup Date:</span> 31-10-2022</p>
                <p><span>Checkup at :</span> AJ Hospital</p>
                <p><span>Doctors Name :</span> Dr Ram </p>
                <p><span>Summary :</span> Diagonised with low BP</p>
                <p><span>Medicine prescribed :</span> Cilacar(5mg)</p>
                
            </div>
            <div className='card'>
                <p><span>Checkup Date:</span> 15-11-2022</p>
                <p><span>Checkup at :</span> AJ Hospital</p>
                <p><span>Doctors Name :</span> Dr Kishan </p>
                <p><span>Summary :</span> Diagonised with low BP</p>
                <p><span>Medicine prescribed :</span> Cilacar(5mg)</p>
            </div>
            <div className='card'>
                <p><span>Checkup Date:</span> 31-10-2022</p>
                <p><span>Checkup at :</span> AJ Hospital</p>
                <p><span>Doctors Name :</span> Dr Ram </p>
                <p><span>Summary :</span> Diagonised with low BP</p>
                <p><span>Medicine prescribed :</span> Cilacar(5mg)</p>
            </div>
           
    </div>
    </div>
  )
}

export default Dashboard
