import React from 'react'
import "./Services.css"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Services() {
    return (
        <div className="services">
            <div className="services__header">
               <h1>Services</h1>
               <div className="services__headerRight">
                  <h4 >All Services</h4>
                  <ArrowForwardIcon />
                </div>     
            </div>
            <div className="services__body">

             <div className="services__data">
            <img src="https://img.icons8.com/dotty/80/000000/outdoor-swimming-pool.png" alt=""/>
            <h4>Tavel Planning</h4>
            </div>

            <div className="services__data">
            <img src="https://img.icons8.com/dotty/80/000000/car-rental.png" alt=""/>
            <h4>Car Rental</h4>
            </div>

            <div className="services__data">
            <img src="https://img.icons8.com/dotty/80/000000/doctors-folder.png" alt=""/>
            <h4>Insurance</h4>
            </div>

            <div className="services__data">
            <img src="https://img.icons8.com/dotty/80/000000/around-the-globe.png" alt=""/>
            <h4>Traveling</h4>
            </div>
            
            </div>
        </div>
        
    )
}

export default Services

