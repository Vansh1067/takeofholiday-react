import React from 'react';
import "./BodyGallery.css";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Card, CardActionArea, CardMedia, Divider, Grid } from '@material-ui/core';

function BodyGallery() {
    return (
        <div className="bodyGallery">
            <div className="bodyGallery__header">
               <h1>Gallery</h1>
               <div className="bodyGallery__headerRight">
                  <h4 >All gallery</h4>
                  <ArrowForwardIcon color="primary"/>
                </div>     
            </div>
           
            <Grid container spacing={2} justify="center" style={{marginTop:20}}>
            
             <Grid item>
             <Card>   
                  <CardActionArea > 
                    <CardMedia style={{width:300}}
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image="https://source.unsplash.com/400x500/?Mumbai"
                    />
                   </CardActionArea>
                </Card>

            <h4>Mumbai</h4>
            </Grid >
            

            <Grid item>
            <Card>   
                  <CardActionArea > 
                    <CardMedia style={{width:300}}
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image="https://source.unsplash.com/400x500/?Chennai"
                    />
                   </CardActionArea>
                </Card>
            <h4>Chennai</h4>
            </Grid>

            <Grid item>
            <Card>   
                  <CardActionArea > 
                    <CardMedia style={{width:300}}
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image="https://source.unsplash.com/400x500/?Kerala"
                    />
                   </CardActionArea>
                </Card>
            <h4>Kerala</h4>
            </Grid>

            <Grid item>
            <Card  >   
                  <CardActionArea > 
                    <CardMedia style={{width:300}}
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image="https://source.unsplash.com/400x500/?Punjab"
                    />
                   </CardActionArea>
                </Card>
            <h4>Punjab</h4>
            </Grid>

            </Grid>
            
        </div>
    )
}

export default BodyGallery
