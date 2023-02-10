
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
import { Avatar, Chip } from '@mui/material';
    
    export default function MediaCard11() {
        //This is the card for the Java Blockchain project

      return (
        <Card sx={{ minWidth: 420,background:"" }}>
          <CardMedia
            sx={{ padding: "5em 3em 3em 3em", objectFit:"scale-down", height: "10px", width: "70px", margin: "auto" , borderRadius: "0%" ,marginTop:2    }}
          image="https://static.javatpoint.com/tutorial/data-mining/images/bitcoin-data-mining.png"
            title="WhatsMyHashrate.io"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             WhatsMyHashrate.io
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A Java Blockchain project that utilizes the SHA-256 algorithm to create a blockchain. The blockchain is able to store data and verify the integrity of the data . The interface also allows users to mine blocks while adding data to the blockchain, it also includes a benchmark feature that allows users to test their computer’s hash rate.
            </Typography>
    
          </CardContent>
          <CardActions>
        
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
          <Chip avatar={<Avatar alt="Java" src="https://cdn.worldvectorlogo.com/logos/java.svg"></Avatar>} label="Java" color='default'></Chip>

            <Button  target={"_blank"} size="small" color='warning' href='https://github.com/zadnan2002/WhatsMyHashrate.ioo'>Learn More</Button>
          
            
            </div><br/>  <br/>
          </CardActions>
        </Card>
      );
    }
    