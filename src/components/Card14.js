
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    
    export default function MediaCard14() {
        //This is the card that will be used to display the languages
        //the image in the card will be the logo resized to 512x512
        //This one is for Angular similar to other languages
        
      return (
        <Card sx={{ minWidth: 345  }}>
          <CardMedia
            sx={{ padding: "5em 3em 3em 3em", objectFit: "contain", height: "35px", width: "35px", margin: "auto" , backgroundColor: "white", borderRadius: "8%" ,marginTop:2    }}
            image= "https://angular.io/assets/images/logos/angular/angular.svg"
            title="Angular"
    
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
           Angular
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. 
            </Typography>
    
          </CardContent>
          <CardActions>
        
            <Button size="small"  target={"_blank"} color='warning' href='https://angular.io/'>Learn More</Button>
          </CardActions>
        </Card>
      );
    }
    