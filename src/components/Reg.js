import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import '../components/Reg.css'
import PasswordChecklist from "react-password-checklist"
import useNavigation from 'use-navigation';
import useNavigate from 'react-use-navigate';
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
let navigate=useNavigate();
const routerChange=()=>{
  let path=`/`
  navigate(path)
  
}

  return (
  

<div>
<div>
   <div className='main'>

    

     <form className='modal' >
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

      <span><input placeholder='Enter Your Email'  onChange={handleEmailChange} name='email' type='email' required='required'></input></span>
      
      </div>
      <div>

     <input placeholder='Enter Your Password' onChange={handlePasswordChange} name='password' type='password' required='required'></input>
</div> 
<div>

<input placeholder='Repeat Your Password' onChange={handleRepeatPassword} name='repPassword' type='password' required='required'></input>
<PasswordChecklist
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={1}
				value={password}
				valueAgain={repeatPassword}
				onChange={(isValid) => {}}
			/>
</div> 
     </div>
     <div className='button'>
     <button name='regIn' onClick={routerChange}>REG IN</button>
     </div>
     </form>
   </div>

</div>
</div>
  )
}

