    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
import { Avatar, Chip } from '@mui/material';
    
    export default function MediaCard12() {
        //This is the card for Nightout project, a web app that allows users to search for specific events in their area and purchase tickets to them.
        //The app uses Node and express to handle the backend and MySQL to store and manipulate the data.

      return (
        <Card sx={{ minWidth: 420,background:"", }}>
          <CardMedia
            sx={{ padding: "5em 3em 3em 3em", objectFit:"scale-down", height: "30px", width: "55px", margin: "auto" , borderRadius: "0%" ,marginTop:2    }}
          image="http://ww1.prweb.com/prfiles/2011/11/10/9128636/gI_95476_LOGO.png"
            title="Nightout"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Nightout
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A React app that connects venues to customers where customers login and filter events according to their preferences. Ticket purchasing is also available. The app uses Node and express to handle the backend and MySQL to store and manipulate the data.
            </Typography>
    
          </CardContent>
          <CardActions>
        
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
            <div>
          <Chip style={{marginRight:2}} avatar={<Avatar alt="React" src="https://brandeps.com/logo-download/R/React-logo-vector-01.svg"></Avatar>} label="React" color='info' size='small'></Chip>
            <Chip style={{marginRight:2}} avatar={<Avatar alt="Node" src="https://brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg"></Avatar>} size='small' label="node" color='default'></Chip>
            <Chip avatar={<Avatar alt="MySQL" src="https://brandeps.com/logo-download/M/MySQL-logo-vector-01.svg"></Avatar>} label="MySQL" color='default' size='small'></Chip>
          </div>
          <div>
            <Button  target={"_blank"} size="small" color='warning' href='https://github.com/zadnan2002/nightout'>Learn More</Button>
            </div>
            
            </div>
            <br/>  <br/>
          </CardActions>
        </Card>
      );
    }
    