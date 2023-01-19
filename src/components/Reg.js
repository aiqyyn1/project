import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import '../components/Reg.css'
export default function Reg() {
  
  const [firstName, setFirstName]=useState('');
  const [firstError, setFirstError]=useState('');
  const [checkFirst, setcheckFirstSubmit]=useState(false);
  const  [checkValidateEmail, setCheckValidateEmail]=useState('');
  const [checkLast, setcheckLastSubmit]=useState(false);
  const [checkEmail, setcheckEmailSubmit]=useState(false);
  const [isValidated, setIsValidated]=useState(true);
  const [lastName, setLastName]=useState('');
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('');
  const [repeatPassword, setRepeatPassword]=useState('');
  const [isCorrectPassword, setIsCorrectPassword]=useState(true);
  useEffect(() => {
    

    // if (firstName.length === 0 || lastName.length === 0  || email.length === 0 ) {
    //     setFirstError('Shouldnt be empty');
    // } else {
    //     setFirstError('');
    // }
  
 
 
}, [firstName, lastName, email, isValidated]);
const handlePasswordChange=(e)=>{
  setPassword(e.target.value);
}
const handleRepeatPassword=(e)=>{
  setRepeatPassword(e.target.value);
}
const handleFirstChange = (e) => {
    setFirstName(e.target.value);
}
const handleLastChange = (e)=>{
  setLastName(e.target.value)
}
const handleEmailChange = (e) => {
  setEmail(e.target.value)
}

const sethandleSubmitted=(e)=>{
 
    if (firstName.length === 0 && lastName.length>0 && email.length === 0 || firstName.length === 0 ){
      setcheckFirstSubmit(true)
      
     }
     else{
      setcheckFirstSubmit(false)
   
     }
    if (lastName.length === 0 && firstName.length > 0 && email.length > 0 || lastName.length === 0){
      setcheckLastSubmit(true)
    }
    else{
      setcheckLastSubmit(false)
    }
    if (email.length === 0 && firstName.length > 0 && lastName.length > 0 || email.length === 0){
      setcheckEmailSubmit(true)
    }
    else{
      setcheckEmailSubmit(false)
    }
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (email.match(re)){
       setIsValidated(true)

            
      }
      else{
    setIsValidated(false)
      
      }
      if (password===repeatPassword){
        setIsCorrectPassword(true)
      }
      else{
        setIsCorrectPassword(false)
      }
     
  
}
  return (
  

<div>
<div>
   <div className='main'>

    

     <form className='modal' method='POST' action='/registration'>
      <div className='register'>
     <h1>Dima & Aiqyn</h1>

     <h2>Videos, workbooks and more.
     You’re here, let’s do this.</h2>
     </div>
     <div className='templates'>
<div>
  
      <input placeholder='Enter Your Name' type='text' onChange={handleFirstChange} name='name' required='required'></input>
 
      </div>
      <div>
      <input placeholder='Enter Your Surname' type='text' onChange={handleLastChange} name='surname' required='required'></input>
   
      </div>
      <div>

      <input placeholder='Enter Your Email' type='text' onChange={handleEmailChange} name='email' required='required'></input>
      <div>{ isValidated ? '':<div className='firstError'>Please Validate your email </div>} </div>
      </div>
      <div>

     <input placeholder='Enter Your Password' onChange={handlePasswordChange} name='password' type='password' required='required'></input>
</div> 
<div>

<input placeholder='Repeat Your Password' onChange={handleRepeatPassword} name='repPassword' type='password' required='required'></input>
<div>{ isCorrectPassword ? '':<div className='firstError' >Passwords don't match</div>} </div>
</div> 
     </div>
     <div className='button'>
     <button name='regIn' onClick={sethandleSubmitted}>REG IN</button>
     </div>
     </form>
   </div>

</div>
</div>
  )
}

