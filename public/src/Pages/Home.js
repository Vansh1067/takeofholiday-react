import {   Grid, Typography } from '@material-ui/core'
import React from 'react'
import BodyGallery from './Component/BodyGallery'
import CardDetails from './Component/CardDetails'
import Filter from './Component/Filter'
import HomeDescription from './Component/HomeDescription'

import Services from './Component/Services'
import TravelDes from './Component/TravelDes'
import "./Home.css"

function Home() {
    return (
        <div className="home ">
            <div className="home__Image backgroundImage  ">
            <Typography variant="h3" color="textSecondary" component="h3" align="center" style={{paddingTop: 350 , fontWeight:600}} gutterBottom>
                 Discover the world with us
            </Typography>  
            </div>   

            
            <div class="home__Filter">
               <Filter />
                      
            </div>
            
            <div className="home__location">
                <Typography variant="h6" component="h6" style={{marginLeft:40,fontWeight:600}} gutterBottom>
                 New Tours
                </Typography>
               <Grid container justify="center"  >
                <Grid item  >
                <CardDetails />
                </Grid>
                <Grid item>
                <CardDetails />
                </Grid>
                <Grid item>
                <CardDetails />
                </Grid>
                <Grid item>
                <CardDetails />
                </Grid>
             </Grid>

            </div>
            
            <div className="home__Services">
                <Services />        
            </div>
            
            <div className="home__Description">
                <HomeDescription />

            </div>
            
            <div className="home__TravelDes">
                <TravelDes />
            </div>
            
            
            <div className="home__BodyGallery">
                <BodyGallery />

            </div>


        </div>
    )
}

export default Home
