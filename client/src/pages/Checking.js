import React from 'react'
import backgroundimg from './backgroundimg.jpeg'
import bgflower from './bgflower.png'
import loading from './loading.png'

function Checking() {
  return (
    <div className='AuthPage'>
         <img className="bg" src={backgroundimg}/>
         <img className="flower1" src={bgflower}/>
         <img className="flower2" src={bgflower}/>
         <img className="loading" src={loading}/>
         <p className='check-p'>Hold on, just a second... Authenticating <br></br>your product for your complete <br></br>assurance..</p>
    </div>
  )
}

export default Checking