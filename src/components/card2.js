import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    //This is the card that will be used to display the languages
    //the image in the card will be the logo resized to 512x512
    //This one is for CSS
  return (
    <Card sx={{  minWidth: 345 }}>
      <CardMedia
        sx={{ padding: "5em 3em 3em 3em", objectFit: "contain", height: "35px", width: "35px", margin: "auto" , backgroundColor: "white", borderRadius: "8%" ,marginTop:2    }}
        image= "https://brandeps.com/logo-download/C/CSS-3-logo-vector-01.svg"
        title="CSS"

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         CSS
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
        </Typography>

      </CardContent>
      <CardActions>
    
        <Button size="small" color='warning'  target={"_blank"} href='https://www.w3schools.com/css/'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
