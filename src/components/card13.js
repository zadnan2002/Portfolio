import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Chip } from '@mui/material';

export default function MediaCard13() {
    //This is the card for Nightventures project, a web app that allows users to search for specific events in their area and purchase tickets to them.
    //The app uses Node and express to handle the backend and Firebase to store and manipulate the data.
    // the app also has a map that enables users to see the location of the event on the map.
    //The app has a test that feeds into a machine learning model that predicts the users genre and finds venues accordingly.

  return (
    <Card sx={{ minWidth: 420,background:"", }}>
      <CardMedia
        sx={{ padding: "5em 3em 3em 3em", objectFit:"scale-down", height: "35px", width: "80px", margin: "auto" , borderRadius: "0%" ,marginTop:2    }}
      image="https://i.ibb.co/JHZn70w/nightvent.png"
        title="Nightout"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         NightVentures
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Nightventures utilizes the power of machine learning to predict the users genre in a test based on 10 features and then maps the genre with loacal clubs where the user can easily browse through the clubs on a personalized map.
        </Typography>

      </CardContent>
      <CardActions>
    
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
        <div>
      <Chip style={{marginRight:2}} avatar={<Avatar alt="React" src="https://brandeps.com/logo-download/R/React-logo-vector-01.svg"></Avatar>} label="React" color='info' size='small'></Chip>
        <Chip style={{marginRight:2}} avatar={<Avatar alt="Node" src="https://brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg"></Avatar>} size='small' label="node" color='default'></Chip>
        <Chip style={{marginRight:2}} avatar={<Avatar alt="Python" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"></Avatar>} size='small' label="Python" color='default'></Chip>
      </div>
      <div>
        <Button  target={"_blank"} size="small" color='warning' href='https://nightventures.vercel.app/'>Learn More</Button>
        </div>
        
        </div>
        <br/>  <br/>
      </CardActions>
    </Card>
  );
}
