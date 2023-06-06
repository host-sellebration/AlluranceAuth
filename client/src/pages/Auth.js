import React, { useState } from 'react'
import formlogo from "./formlogo.png"
import backgroundimg from './backgroundimg.jpeg'
import bgflower from './bgflower.png'

function Auth() {

    const [serialno, setSerialno]= useState('')
    const [authcardno, setAuthcardno]= useState('')
    const [invoiceno, setInvoiceno]= useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

  return (
    <div className='AuthPage'>
         <img className="bg" src={backgroundimg}/>
         <img className="flower1" src={bgflower}/>
         <img className="flower2" src={bgflower}/>
        <form className='Authform' onSubmit={handleSubmit}>
            <div className='formlogo'><img src={formlogo}/></div>
            <label>SERIAL NO:</label>
            <input
            type='string'
            onChange={(e) => setSerialno(e.target.value)}
            value={serialno}
            />
            <label>AUTHENCITY CARD NO:</label>
            <input
            type='number'
            onChange={(e) => setAuthcardno(e.target.value)}
            value={authcardno}
            />
            <label>INVOICE NO:</label>
            <input
            type='number'
            onChange={(e) => setInvoiceno(e.target.value)}
            value={invoiceno}
            />
            <div className='captcha'></div> <span><button>refresh</button></span>
            <label for='captcha-input'>ENTER CAPTCHA</label>
            <input
            type='text'
            id='captcha-form'
            />
            <div className='checkbox'>
            <input 
            type="checkbox" 
            required name="terms"
            /> 
            <p> I ACCEPT TERMS AND CONDITIONS AS WELL <br/> AS PRIVACY POLICY FOR THIS WEBSITE</p>
            </div>
            <button className='verify'>VERIFY</button>

        </form>
    </div>
  )
}

export default Auth