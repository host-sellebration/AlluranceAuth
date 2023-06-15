import React from 'react'
import backgroundimg from './backgroundimg.jpeg'
import bgflower from './bgflower.png'
import visitArrow from './visitArrow.png'
import genuine from './genuine.png'
import ratestar from './ratestar.png'
import certificate from './certificate.png'
import ring from './ring.png'
import downloadicon from './downloadicon.png'

function Genuine() {
  return (
    <div className='AuthPage'>
         <img className="bg" src={backgroundimg}/>
         <img className="flower1" src={bgflower}/>
         <img className="flower2" src={bgflower}/>

         <div className='logo'>
           <img src={genuine}/>
           <h2>GENUINE</h2>
         </div>
         <div className='card'>
            <div className='certificate'><img src={certificate}/></div>
            <p className='digital-card'>DIGITAL CARD</p>
            <img className='downloadicon' src={downloadicon} />
            <div className='ring'>
                <img src={ring}/>
                <div className='ring2'>
                    <div className='ring-img'></div>
                </div>
                <p>RING 501</p>
            </div>
         </div>
         <div className='buy-more'>
            <p>BUY MORE FROM ALLURANCE</p>
            <img src={visitArrow}/>
         </div>
         <div className='rate'>
            <p>RATE YOUR EXPERIENCE</p>
            <div className='stars'>
                <img className='star1' src={ratestar}/>
                <img className='star2' src={ratestar}/> 
                <img className='star3' src={ratestar}/> 
                <img className='star4' src={ratestar}/> 
                <img className='star5' src={ratestar}/>
            </div>
         </div>
         <div className='review'>
            <p>WRITE YOUR REVIEW</p>
            <input
            type='text'
            />
         </div>
    </div>
  )
}

export default Genuine