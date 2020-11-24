import React from 'react'
import "./Services.css"

function Services() {
    return (
        <div className="services">
            <div className="services__header">
               <h1>Services</h1>
               <p>All Services - </p>
            </div>
            <div className="Services__body">
                <div>
            <img src="https://img.icons8.com/dotty/80/000000/outdoor-swimming-pool.png"/>
            <h4>Tavel Planning</h4>
            </div>
            <div>
            <img src="https://img.icons8.com/dotty/80/000000/car-rental.png"/>
            <h4>Car Rental</h4>
            </div>
            <div>
            <img src="https://img.icons8.com/dotty/80/000000/doctors-folder.png"/>
            <h4>Insurance</h4>
            </div>
            <div>
            <img src="https://img.icons8.com/dotty/80/000000/around-the-globe.png"/>
            <h4>Traveling</h4>
            </div>
            </div>
        </div>
        
    )
}

export default Services
