import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard0() {
    //This is the card that will be used to display the languages
    //the image in the card will be the logo resized to 512x512
  return (
    <Card sx={{ minWidth: 345  }}>
      <CardMedia
        sx={{ padding: "5em 3em 3em 3em", objectFit: "contain", height: "35px", width: "35px", margin: "auto" , backgroundColor: "white", borderRadius: "8%" ,marginTop:2  ,position: "relative"  }}
        image="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
        title="HTML"

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         HTML
        </Typography>
        <Typography variant="body2" color="text.secondary">
      HyperText Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.
        </Typography>
      </CardContent>
      <CardActions>
    
        <Button size="small" color='warning' target={"_blank"} href='https://www.w3schools.com/html/'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
