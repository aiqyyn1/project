import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import '../components/Reg.css'
import PasswordChecklist from "react-password-checklist"
import { useNavigate } from 'react-router-dom';
export default function Reg() {

  const [firstName, setFirstName] = useState('');

  const [emptyFirstCheck, setFirstEmptyCheck] = useState(true);
  const [emptyLastCheck, setEmptyLastCheck] = useState(true)
  const [emptyLastText, setEmptyLastText] = useState('')
  const [emptyFirstText, setEmptyFirstText] = useState('')
  const [checkValidateEmail, setCheckValidateEmail] = useState('');
  const [checkPassword, setCheckPassword] = useState(true);
  const [errorPassword, setErrorPassword] = useState('')
  const [checkEmail, setcheckEmail] = useState(true);

  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  }
  const handleFirstChange = (e) => {
    setFirstName(e.target.value);
  }
  const handleLastChange = (e) => {
    setLastName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  let navigate = useNavigate();
  const routerChange = (e) => {
    e.preventDefault();
    const emailChecker = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (firstName.length === 0) {
      setFirstEmptyCheck(false)
      setEmptyFirstText("Fill in this field")
      navigate('')
    }
    else {
      setFirstEmptyCheck(true)
      setEmptyFirstText("")
    }
    if (lastName.length === 0) {
      setEmptyLastCheck(false);
      setEmptyLastText("Fill in this field")
    }
    else {
      setEmptyLastCheck(true);
      setEmptyLastText("")
    }
    if (!emailChecker.test(email)) {
      setCheckValidateEmail("Not Validated")
      setcheckEmail(false)
      navigate('');
    }
    else {
      setcheckEmail(true)
    }
    if (password !== repeatPassword || password.length === 0 && repeatPassword.length === 0) {
      setCheckPassword(false)
      setErrorPassword('Passwords don"t match')
      navigate('');
    }
    else {
      setCheckPassword(true)
    }
    if (password === repeatPassword && emailChecker.test(email) && firstName.length > 0 && lastName.length > 0) {
      console.log("xarow")
      navigate("/Check")
    }

  }

  return (
    <div>
      <div>
        <div className='main'>
          <form className='modal'   >
            <div className='register'>
              <h1>Dima & Aiqyn</h1>
              <h2>Videos, workbooks and more.
                You’re here, let’s do this.</h2>
            </div>
            <div className='templates'>
              <div>
                <input placeholder='Enter Your Name' type='text' onChange={handleFirstChange} name='name' required='required'></input>
                <div>{emptyFirstCheck ? <div></div> : <div className='firstError'>{emptyFirstText}</div>}</div>
              </div>
              <div>
                <input placeholder='Enter Your Surname' type='text' onChange={handleLastChange} name='surname' required='required'></input>
                <div>{emptyLastCheck ? <div></div> : <div className='firstError'> {emptyLastText}</div>}</div>
              </div>
              <div>
                <span><input placeholder='Enter Your Email' onChange={handleEmailChange} name='email' type='email' required='required'></input></span>
                <div>{checkEmail ? <div></div> : <div className='firstError'>{checkValidateEmail} </div>}</div>
              </div>
              <div>
                <input placeholder='Enter Your Password' onChange={handlePasswordChange} name='password' type='password' required='required'></input>
              </div>
              <div>
                <input placeholder='Repeat Your Password' onChange={handleRepeatPassword} name='repPassword' type='password' required='required'></input>
                <div>{checkPassword ? <div></div> : <div className='firstError'>{errorPassword} </div>}</div>
                <PasswordChecklist
                  rules={["match"]}
                  minLength={5}
                  value={password}
                  valueAgain={repeatPassword}
                  onChange={(isValid) => { }}
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

