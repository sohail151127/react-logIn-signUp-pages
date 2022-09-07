import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./signupform.css"

const SignUpForm = () => {
  const [enteredName, setEnteredName] = useState("")
  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredPassword, setEnteredPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const nameHandler = (e) =>{
    setEnteredName(e.target.value)
  }

  const emailHandler = (e) =>{
    setEnteredEmail(e.target.value)
  }

  const passwordHandler = (e) =>{
    setEnteredPassword(e.target.value)
  }

  const confirmPasswordHandler = (e) =>{
    setConfirmPassword(e.target.value)
  }

  const submitHandler = (e) =>{
    e.preventDefault();

    const SignUpData ={
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      password_confirmation: confirmPassword
    }

    
    setEnteredName("")
    setEnteredEmail("")
    setEnteredPassword("")
    setConfirmPassword("")

    let config = {
      method: "post",
      url: "http://testapi.techenablers.info/api/auth/register",
      data: JSON.stringify(SignUpData),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }

    axios(config)
    .then((res)=>{
      console.log(res);
    }).catch((error)=>{
      console.log(error)
    })
  }

  const handle =()=>{
    localStorage.setItem("Name", enteredName)
    localStorage.setItem("Email", enteredEmail)
    localStorage.setItem("Password", enteredPassword)
    localStorage.setItem("ConfirmPassword", confirmPassword)
  }

  return (
    <>
    <div className='background'>
    <div className='border'>
    <div className='reg'>Create an account</div>
    <div className='styling'>
    <form onSubmit={submitHandler} className="row g-3 needs-validation" >

        <div className="col-12">
        <input type="text" value={enteredName} onChange={nameHandler} className="form-control" placeholder="Your Name" aria-label="Your Name" required />
        </div>

        <div className="col-md-12">
        <input type="email" value={enteredEmail} onChange={emailHandler} className="form-control"  placeholder="Email Address" id="inputEmail4" required />
        </div>

        <div className="col-md-12">
        <input type="password" value={enteredPassword} onChange={passwordHandler} className="form-control" placeholder="Password" id="inputPassword4" required />
        </div>

        <div className="col-md-12">
        <input type="password" value={confirmPassword} onChange={confirmPasswordHandler} className="form-control" placeholder="Confirm Password" id="SignUpPassword" required />
        </div>

        <div className="col-12">
        <button type="submit" onClick={handle} className="btn btn-primary">Sign Up</button>
        </div>

        <div className='line'>
          <hr></hr>
        </div>

        <div className='info'>
          If you already have an account, please Log In
        </div>

        <div>

        <Link to="/LogInForm" type="button" className="btn btn-success">Log In</Link>
        </div>

    </form>
    </div>
    </div>

    <div className='infoooo'>
          <div className='local'> Data saved in localStorage:</div>
          <div>{localStorage.getItem("Name")}</div>
          <div>{localStorage.getItem("Email")}</div>
          <div>{localStorage.getItem("Password")}</div>
          <div>{localStorage.getItem("ConfirmPassword")}</div>
    </div>

    </div>
    </>

  )
}

export default SignUpForm;