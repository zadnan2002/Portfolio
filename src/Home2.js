import React from 'react';
import RecipeReviewCard from './components/card1';
import MediaCard from './components/card2';
import ReactCardCarousel from 'react-card-carousel';
import './Home2.css';
import MediaCard3 from './components/card3';
import MediaCard4 from './components/card4';
import MediaCard5 from './components/card5';
import MediaCard6 from './components/card6';
import MediaCard7 from './components/card7';
import MediaCard8 from './components/card8';
import MediaCard9 from './components/card9';
import MediaCard0 from './components/card1';
import MediaCard14 from './components/Card14';

function Home2() {
  //return a div with a class of 'Languages-main-block' that has svg icons for each language (HTML CSS JS REACT BOOTSTRAP Java Python SQL )
  //The svg icons are in a slider that can be swiped left and right
  //The slider should have a button to go to the next slide and a button to go to the previous slide
  //npm audit --production(bas yseer il error)
const emoji=require('emoji-dictionary');
  return (
    <div className='Languages-main-block' id="langs">
      <div className='Languages-Title'>
      <h1 className='Languages-title' style={{}}>My Toolbox <img src='https://www.pngkey.com/png/full/112-1128897_portal-gun-rick-and-morty-portal-gun-rick.png' style={{height:"52px",width:"84px"}}></img> </h1>
        </div>
        <div className='Projects-block' style={{marginTop:"98px",display:"flex",flexDirection:"row"}}>
<div className='portal'>

</div>
      <div className='Languages-slider-container' style={{position:"relative",width:"50%",height:"80vh",}}>

  <ReactCardCarousel autoplay={true} autoplay_speed={8000}  >
  <MediaCard14/>
  <MediaCard8/>   
  <MediaCard9/>
 <MediaCard0/>
 <MediaCard/>
  <MediaCard3/>
  <MediaCard4/>
  <MediaCard5/>
  <MediaCard6/>
  <MediaCard7/>
  

  </ReactCardCarousel>
 
   
     </div>
     <div className='portal'>

</div>

        </div>


</div>

 
  )
}

export default Home2