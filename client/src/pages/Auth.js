import React, { useState } from 'react'
import formlogo from "./formlogo.png"
import backgroundimg from './backgroundimg.jpeg'
import bgflower from './bgflower.png'
import refreshicon from './refreshicon.png'

function Auth() {

    const [serialno, setSerialno]= useState('')
    const [authcardno, setAuthcardno]= useState('')
    const [invoiceno, setInvoiceno]= useState('')
    const randomString = Math.random().toString(36).slice(8);
    const [captcha, setCaptcha] = useState(randomString);
    const [text,setText] = useState("")
    const [valid, setValid] = useState(false)
    // const [refreshCaptcha, setRefreshCaptcha] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const matchCaptcha = (e) => {
        //   if(text == captcha){
        //     setValid(false)
        //     // setSuccess(true)
        //   }
        //   else{
        //     setValid(true)
        //     // setSuccess(false)
        //   }
        // }
    }
 
    const refreshString = (e) => {
      e.preventDefault();
      setCaptcha(Math.random().toString(36).slice(8))}

    const matchCaptcha = (event) => {
      // event.preventDefault();
      if(text == captcha){
        setValid(false)
        // setSuccess(true)
      }
      else{
        setValid(true)
        // setSuccess(false)
      }
    }
    const handleCaptcha =(e)=>{
      // e.preventDefault();
      setText(e.target.value)
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
            <div className='captcha'>
            <input
            type='text'
            value={captcha}
            onChange={setCaptcha}
            />
            </div>
            <div className='refresh' onClick={refreshString}><img src={refreshicon}/></div>

            <label for='captcha-input' onClick={matchCaptcha}>ENTER CAPTCHA</label>
            <input
              type='text'
              value={text}
              onChange={handleCaptcha}
              error={valid}
              hyperText={valid && "Invalid Captcha"}
            />

        
            <div className='checkbox'>
            <input 
            type="checkbox" 
            required name="terms"
            /> 
            <p> I <a className='policies'>ACCEPT TERMS</a> AND CONDITIONS AS WELL <br/> AS <a className='policies'>PRIVACY POLICY</a> FOR THIS WEBSITE</p>
            </div>
            <button className='verify'>VERIFY</button>

        </form>
    </div>
  )
  }

export default Auth