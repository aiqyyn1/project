import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import '../components/Reg.css'
import PasswordChecklist from "react-password-checklist"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Reg() {


  const [emptyFirstCheck, setFirstEmptyCheck]=useState(true);
  const [emptyLastCheck, setEmptyLastCheck]=useState(true)
  const [emptyLastText, setEmptyLastText]=useState('')
  const [emptyFirstText, setEmptyFirstText]=useState('')
  const  [checkValidateEmail, setCheckValidateEmail]=useState('');
  const [checkPassword, setCheckPassword]=useState(true);
  const [errorPassword, setErrorPassword]=useState('')
  const [checkEmail, setcheckEmail]=useState(true);
  const [data, setData]=useState({
    name:'',
    surname:'',
    email : '',
    password: ''
  })
  
  const [lastName, setLastName]=useState('');
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('');
  const [repeatPassword, setRepeatPassword]=useState('');
// const handlePasswordChange=(e)=>{
//   setPassword(e.target.value);
// }
const handleRepeatPassword=(e)=>{
  setRepeatPassword(e.target.value);
}
const url="http://localhost:3000/registration"
const  handle= (e) => {
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    console.log(data)
}
let navigate=useNavigate();
const sumbit= (e)=>{

  e.preventDefault();
  const emailChecker=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (data.password===repeatPassword && emailChecker.test(data.email) && data.name.length>0 && data.surname.length>0 ){

   axios.post(url,{
    name:data.name,
     surname:data.surname,

   email:data.email,
     password:data.password
  })
  .then(res=>{
    console.log(res.data)
   })
   navigate("/Check")
 }
}
// const handleLastChange = (e)=>{
//   setLastName(e.target.value)
// }
// const handleEmailChange = (e) => {
//   setEmail(e.target.value)
// }


  return (
  

<div>
<div>
   <div className='main'>

    

     <form className='modal'   onSubmit={(e)=>sumbit(e)}>
      <div className='register'>
     <h1>Dima & Aiqyn</h1>

     <h2>Videos, workbooks and more.
     You’re here, let’s do this.</h2>
     </div>
     <div className='templates'>
<div>
  
      <input placeholder='Enter Your Name' type='text' onChange={(e)=>handle(e)}  name='name' id='name' value={data.name.toString()} required='required' ></input>
      
      </div>
      <div>
      <input placeholder='Enter Your Surname' type='text' name='surname'onChange={(e)=>handle(e)}  id='surname' value={data.surname.toString()} required='required' ></input>
     
      </div>
      <div>

    <input placeholder='Enter Your Email' name='email' type='email' onChange={(e)=>handle(e)}  id='email' value={data.email.toString()} required='required'></input>

      </div>
      <div>

     <input placeholder='Enter Your Password' onChange={(e)=>handle(e)} name='password' type='password'id='password' value={data.password} required='required'></input>

</div> 
<div>

<input placeholder='Repeat Your Password' onChange={handleRepeatPassword} name='repPassword' type='password' required='required'></input>

<PasswordChecklist
    rules={["match"]}
    minLength={5}
    value={data.password}
    valueAgain={repeatPassword}
    onChange={(isValid) => {}}
   />
</div> 
     </div>
     <div className='button'>
     <button name='regIn' >REG IN</button>
     </div>
     </form>
   </div>

</div>
</div>

 
  )
}