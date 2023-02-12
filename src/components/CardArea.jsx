import React from "react";

import eventData from "./eventData.json"
import "./components.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";

function CardArea(){

    return <div class="cardArea">
    {/* <h3 class="start">Technical Events</h3> */}
     <Grid container spacing={6}>
        {eventData.events.map((singleEvent)=>{
          
        return <Grid item xs={12} md={4} lg={3}>
         <Card sx={{ maxWidth: 345 } }>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={singleEvent.imgsrc}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {singleEvent.eventName}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
          {singleEvent.tagLine}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={"/event/"+singleEvent.eventNo} class="shareBtn">
          Read More
        </Link>
      </CardActions>
    </Card>
    </Grid>
       
      
    
    })}
    </Grid>
        
    </div>

}

export default CardArea;