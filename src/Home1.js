import { Button, Link, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Typed from 'react-typed'
import Atropos from 'atropos/react'
import './Home.css'
import Home2 from './Home2'
import 'atropos/css'
import Sound from 'react-sound'
import v1 from './assets/voices/VF.wav'
import { useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import ResponsiveAppBar from './components/Sidebar/Sidebar'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Home1() {
  const [playStatus, setPlayStatus] = useState(false);

function playSound() {
  setPlayStatus(true);

}
function pauseSound() {
  setPlayStatus(false);
}

  return (
  


    <div className='main-block-home' >
      
 
    <Sound
    autoLoad={true}
    onPlaying={console.log("playing")}
      url={v1}
      playStatus={playStatus ? Sound.status.PLAYING : Sound.status.PAUSED}
      playFromPosition={0 /* in milliseconds */}
     
      playbackRate={1}
      onFinishedPlaying={() => {setPlayStatus(false)}}
     
    />


        <div className='name-block-home'>

          <div className='name-home'>
            <div className='name-home-title' >
       <Typography variant='h2' style={{color:"#FFFCF9",fontWeight:"bold",}}>A d n a n &nbsp; A l &nbsp; Z a h a b i   </Typography> 
        <Typography variant='h4' style={{color:"#FFFCF9",fontWeight:"bold",}}>Software Engineer</Typography>
        <PlayArrowIcon fontSize='large' onClick={playSound} style={{color:"#FFFCF9",cursor:"pointer"}}></PlayArrowIcon> <PauseIcon fontSize='large' onClick={pauseSound} style={{color:"#FFFCF9",cursor:"pointer"}}></PauseIcon>
     
        </div>
       
<Typed strings={['- Hey Mmmorty, *Burps*. We don\'t need anyone to build our software, I can do it myself<br/> <br/>- Bbbbut Rick,you can\'t even center a div<br/><br/>- You idiot Morty, I just use the line-height property!<br/><br/>- Just give up and tap the link already',]} typeSpeed={42}   />

</div>
<div className='Below-Link' style={{display:"flex",width:"95vw"}}>
  
<Link color={"#FFFFFF"} underline='always' href='/about' style={{fontWeight:"bold"}}>Get Schwifty</Link>
<div className='name-home-buttons' >
            <GitHubIcon onClick={() => window.open('https://www.github.com/zadnan2002', '_blank')}fontSize='large' style={{color:"#FFFCF9",cursor:"pointer",marginRight:"10px"}}></GitHubIcon>
          <LinkedInIcon onClick={()=>window.open('https://linkedin.com/in/adnan-al-zahabi','_blank')} fontSize='large' style={{color:"#FFFCF9",cursor:"pointer"}}></LinkedInIcon>
          </div>
</div>
       </div>

      <Atropos style={{height:"610px"}} alwaysActive shadow={false} highlight={false}  rotateXMax={180} rotateYMax={20}> <img src={require('./assets/images/rickflip.png')}  style={{marginTop:"5vh",marginLeft:"5vw",height:"600px",width:"600px",}} ></img>
    </Atropos>
    <img src='https://i.postimg.cc/K8592t7j/transparent3d.png' style={{color:"white",marginTop:"20vh",marginLeft:"-3vw",height:"50px",width:"50px",objectFit:"cover"}} ></img>
      
    </div>
  )
  //button aside
  //  <div className='name-home-buttons' >
//<Button style={{backgroundColor:"#3D0669",height:"60px",width:"160px",borderRadius:"25px"}} variant='contained'  href='/projects'>View Projects</Button>
  //      </div>
}

export default Home1