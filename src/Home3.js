import React from 'react'
import './Home3.css'
import Snowfall from 'react-snowfall'
import MediaCard from './components/card2';
import ReactCardCarousel from 'react-card-carousel';
import MediaCard10 from './components/card10';
import MediaCard11 from './components/Card11';
import MediaCard12 from './components/Card12';
import Home2 from './Home2';
import ResponsiveAppBar from './components/Sidebar/Sidebar';
import MediaCard13 from './components/card13';

//create a new component that has a title 'My Projects'
//This has a container that holds a display of all the projects
//Followed by a github button that redirects to my github page
//projects nightout, Whatsmyhashrate.io should be placed in mui cards in the carousel where they are displayed
//after making svg card backgrounds grid with secondary and white add primary as background color
//also add chips of languages to each card with href to toolbox section
//add 2 rick and morty portals on the sides of the carousel the portal is in /images/portal.png

function Home3() {
  const emoji=require('emoji-dictionary');
  return (

    <div className='Projects-main-block'>
<ResponsiveAppBar ></ResponsiveAppBar>
<div className='Languages-Title'>
       <h1 className='Languages-title' style={{}}> My Projects<img src='https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Clipart.png' style={{height:"68px",width:"84px"}}></img> </h1>
        </div>



      <div className='Projects-block' style={{marginTop:"98px",display:"flex",flexDirection:"row"}}>
<div className='portal'>

</div>
      <div className='Languages-slider-container' style={{position:"relative",width:"50%",height:"80vh",}}>

  <ReactCardCarousel autoplay={true} autoplay_speed={8000}  >
 <MediaCard10/>
 <MediaCard11/>
 <MediaCard12/>
 <MediaCard13/>

  </ReactCardCarousel>
 
   
     </div>
     <div className='portal'>

</div>

        </div>
<Home2></Home2>
        </div>
  )
}

export default Home3