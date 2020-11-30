import { Button } from '@material-ui/core';
import React from 'react';
import "./CardDetails.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
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
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="outline" color="primary">
          Share
        </Button>
        <Button size="small" variant="outline" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
            </div>
            
        
    )
}

export default CardDetails
