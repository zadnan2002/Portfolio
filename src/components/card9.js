
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    
    export default function MediaCard9() {
        //This is the card that will be used to display the languages
        //the image in the card will be the logo resized to 512x512
        //This one is for Node.JS
        //The learn more button has link to node documentation
      return (
        <Card sx={{ minWidth: 345 }}>
          <CardMedia
            sx={{ padding: "5em 3em 3em 3em", objectFit: "contain", height: "35px", width: "70px", margin: "auto" , backgroundColor: "white", borderRadius: "0%" ,marginTop:2    }}
            image= "https://brandeps.com/logo-download/N/Node-JS-logo-vector-01.svg"
            title="Node.JS"
    
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Node.js
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
            </Typography>
    
          </CardContent>
          <CardActions>
        
            <Button size="small"  target={"_blank"} color='warning' href='https://nodejs.org/en/docs/'>Learn More</Button>
          </CardActions>
        </Card>
      );
    }
    