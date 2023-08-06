
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard7() {
  //This is the card that will be used to display the languages
  //the image in the card will be the logo resized to 512x512
  //This one is for Python
  //The learn more button will be used to link to the documentation
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        sx={{ padding: "5em 3em 3em 3em", objectFit: "contain", height: "35px", width: "74px", margin: "auto", backgroundColor: "white", borderRadius: "0%", marginTop: 2 }}
        image="https://brandeps.com/logo-download/P/Python-logo-vector-01.svg"
        title="Python"

      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Python
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace.
        </Typography>

      </CardContent>
      <CardActions>

        <Button size="small" target={"_blank"} color='warning' href='https://www.python.org/'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
