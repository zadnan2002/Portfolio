
    import * as React from 'react';
    import Card from '@mui/material/Card';
    import CardActions from '@mui/material/CardActions';
    import CardContent from '@mui/material/CardContent';
    import CardMedia from '@mui/material/CardMedia';
    import Button from '@mui/material/Button';
    import Typography from '@mui/material/Typography';
import { Chip,Avatar } from '@mui/material';
    
    export default function MediaCard10() {
        //This is the card for the spotify clone project

      return (
        <Card sx={{ minWidth: 420,background:"" }}>
          <CardMedia
            sx={{ padding: "5em 3em 3em 3em", objectFit:"scale-down", height: "35px", width: "55px", margin: "auto" , borderRadius: "0%" ,marginTop:2    }}
          image="https://play-lh.googleusercontent.com/P2VMEenhpIsubG2oWbvuLGrs0GyyzLiDosGTg8bi8htRXg9Uf0eUtHiUjC28p1jgHzo=w600-h300-pc0xffffff-pd"
            title="Spotify Clone"
    
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Spotify Clone
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A Spotify web-app clone that logins by using a person’s actual Spotify account and utilizes APIs to load their playlists and songs with a play functionality. The following web-app was warranted read only access thus it can only access playlists and not modify them.
            </Typography>
    
          </CardContent>
          <CardActions>
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
          <Chip avatar={<Avatar alt="React" src="https://brandeps.com/logo-download/R/React-logo-vector-01.svg"></Avatar>} label="React" color='info'></Chip>
            <Button  target={"_blank"} size="small" color='warning' href='https://github.com/zadnan2002/Spotify_Clone'>Learn More</Button>
          
            
            </div>
            <br/>  <br/>
          </CardActions>
        </Card>
      );
    }
    