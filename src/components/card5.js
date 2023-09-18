import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard5() {
  //This is the card that will be used to display the languages
  //the image in the card will be the logo resized to 512x512
  //This one is for React
  return (
    <Card sx={{ minWidth: 345 }}>
      <CardMedia
        sx={{
          padding: "5em 3em 3em 3em",
          objectFit: "contain",
          height: "35px",
          width: "40px",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "0%",
          marginTop: 2,
        }}
        image="https://brandeps.com/logo-download/R/React-logo-vector-01.svg"
        title="React"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          React
        </Typography>
        <Typography variant="body2" color="text.secondary">
          React (also known as React.js or ReactJS) is an open-source, front
          end, JavaScript library for building user interfaces or UI components.
          It is maintained by Facebook and a community of individual developers
          and companies.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          target={"_blank"}
          color="warning"
          href="https://reactjs.org/"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
