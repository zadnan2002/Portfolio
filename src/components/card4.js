
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    
    export default function MediaCard4() {
        //This is the card that will be used to display the languages
        //the image in the card will be the logo resized to 512x512
        //This one is for JavaScript
      return (
        <Card sx={{ minWidth: 345  }}>
          <CardMedia
            sx={{ padding: "5em 3em 3em 3em", objectFit: "contain", height: "35px", width: "35px", margin: "auto" , backgroundColor: "white", borderRadius: "0%" ,marginTop:2    }}
            image= "https://brandeps.com/logo-download/O/Ottawa-JS-logo-vector-01.svg"
            title="JavaScript"
    
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             JavaScript
            </Typography>
            <Typography variant="body2" color="text.secondary">
            JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.
            </Typography>
    
          </CardContent>
          <CardActions>
        
            <Button size="small"  target={"_blank"} color='warning' href='https://www.javascript.com/'>Learn More</Button>
          </CardActions>
        </Card>
      );
    }
    