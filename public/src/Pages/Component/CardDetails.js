import { Button } from '@material-ui/core';
import React from 'react';
import "./CardDetails.css"
import { makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MapIcon from '@material-ui/icons/Map';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const useStyles = makeStyles({
  root: {
    minWidth:100,
    maxWidth: 300,
  },
  palette: {
    
    secondary: yellow,
  }
});


function CardDetails() {
    const classes = useStyles();
    return (
        <div className="cardDetails">
             <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://img.freepik.com/free-photo/young-man-arms-outstretched-by-sea-sunrise-enjoying-freedom-life-people-travel-wellbeing-concept_169160-68.jpg?size=626&ext=jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Delhi
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <br/> 14 night/15 days
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outline" color="primary">
          <MapIcon color="primary" />
        </Button>
        <Button size="small" variant="outline" color="primary">
          <StarIcon color="secondary" />
          <StarIcon color="secondary" />
          <StarIcon color="secondary" />
          <StarHalfIcon color="secondary" />
        </Button>
        <Button size="small" variant="contained" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
            </div>
            
        
    )
}

export default CardDetails
