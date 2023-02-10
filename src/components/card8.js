
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    
    export default function MediaCard8() {
        //This is the card that will be used to display the languages
        //the image in the card will be the logo resized to 512x512
        //This one is for BootStrap
        //The learn more button will link to the official website
      return (
        <Card sx={{ minWidth: 345  }}>
          <CardMedia
            sx={{ padding: "5em 3em 3em 3em", objectFit: "contain", height: "35px", width: "35px", margin: "auto" , backgroundColor: "white", borderRadius: "0%" ,marginTop:2    }}
            image= "https://brandeps.com/logo-download/B/Bootstrap-logo-vector-01.svg"
            title="BootStrap"
    
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             BootStrap
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation and other interface components.
            </Typography>
    
          </CardContent>
          <CardActions>
        
            <Button size="small"  target={"_blank"} color='warning' href='https://getbootstrap.com/docs/4.0/getting-started/introduction/'>Learn More</Button>
          </CardActions>
        </Card>
      );
    }
    