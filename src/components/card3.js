
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
    
    export default function MediaCard3() {
        //This is the card that will be used to display the languages
        //the image in the card will be the logo resized to 512x512
        //This one is for Java
      return (
        <Card sx={{ minWidth: 345  }}>
          <CardMedia
            sx={{ padding: "5em 3em 3em 3em", objectFit: "contain", height: "35px", width: "35px", margin: "auto" , backgroundColor: "white", borderRadius: "8%" ,marginTop:2    }}
            image= "https://brandeps.com/logo-download/J/Java-logo-vector-01.svg"
            title="Java"
    
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Java
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible. It is intended to let application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.
            </Typography>
    
          </CardContent>
          <CardActions>
        
            <Button size="small"  target={"_blank"} color='warning' href='https://docs.oracle.com/en/java/'>Learn More</Button>
          </CardActions>
        </Card>
      );
    }
    