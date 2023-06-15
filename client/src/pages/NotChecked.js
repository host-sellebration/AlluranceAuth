import React from 'react'
import backgroundimg from './backgroundimg.jpeg'
import bgflower from './bgflower.png'
import visitArrow from './visitArrow.png'
import error from './error.png'
import face from './face.png'
import twitter from './twitter.png'
import fb from './fb.jpeg'
import insta from './insta.png'


function NotChecked() {
  return (
    <div className='AuthPage'>
         <img className="bg" src={backgroundimg}/>
         <img className="flower1" src={bgflower}/>
         <img className="flower2" src={bgflower}/>

         <div className='face'><img src={face}/></div>

         <p className='face-p'>WE ARE SAD YOU GOT A COUNTERFIET PRODUCT</p> 

         <div className='visit'>
            <p>VISIT OUR STORE BUT GENUINE</p>
            <img src={visitArrow} />
         </div>

         <p className='social'>VISIT OUR SOCIAL MEDIA</p>

         <div className='footer'>
            <img src={twitter}/>
            <img src={insta}/>
            <img src={fb}/>
            
         </div>

         <div className='report'>
            <p>Report the product</p>
            <img src={error}/>
         </div>

    </div>

  )
}

export default NotChecked