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
  useEffect(() => {
    

    // if (firstName.length === 0 || lastName.length === 0  || email.length === 0 ) {
    //     setFirstError('Shouldnt be empty');
    // } else {
    //     setFirstError('');
    // }
  
 
 
}, [firstName, lastName, email, isValidated]);

const handleFirstChange = (e) => {
    setFirstName(e.target.value);
}
const handleLastChange = (e)=>{
  setLastName(e.target.value)
}
const handleEmailChange = (e) => {
  setEmail(e.target.value)
}

const sethandleSubmitted=()=>{
  
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
       console.log("xarow")
            
      }
      else{
    setIsValidated(false)
        console.log('validate')
      }
     
  
}
console.log(isValidated)
  return (
  

<div>
<div>
   <div className='main'>

    

     <div className='modal'>
      <div className='register'>
     <h1>Dima & Aiqyn</h1>

     <h2>Videos, workbooks and more.
     You’re here, let’s do this.</h2>
     </div>
     <div className='templates'>
<div>
  
      <input placeholder='Enter Your Name' onChange={handleFirstChange}></input>
      <div>{checkFirst? <div className='firstError'>Fill in the blanks</div>: ''} </div>
      </div>
      <div>
      <input placeholder='Enter Your Surname' onChange={handleLastChange}></input>
      <div>{checkLast? <div className='firstError'>Fill in the blanks</div>: ''} </div>
      </div>
      <div>

      <input placeholder='Enter Your Email' onChange={handleEmailChange}></input>
      <div>{ isValidated ? '':<div className='firstError'>Please Validate your email </div>} </div>
      </div>
     </div>
     <div className='button'>
     <button onClick={sethandleSubmitted}>REG IN</button>
     </div>
     </div>
   </div>

</div>
</div>
  )
}

