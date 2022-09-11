import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./loginform.css"

const LogInForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredPassword, setEnteredPassword] = useState("")

  const emailHandler = (e) =>{
    setEnteredEmail(e.target.value) 
  }

  const passwordHandler = (e) =>{
    setEnteredPassword(e.target.value)   
  }

  const submitHandler = (e) =>{
    e.preventDefault();

    const LogInData ={
      email: enteredEmail,
      password: enteredPassword, 
    }

    
    setEnteredEmail("")
    setEnteredPassword("")

    let config = {
      method: "post",
      url: "http://testapi.techenablers.info/api/auth/login",
      data: JSON.stringify(LogInData),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    }
  
    axios(config)
    .then((res)=>{
      console.log(res);
      
      let token= res.data.access_token
      localStorage.setItem('token',token)
      
    }).catch((error)=>{
      console.log(error)
    })

  }
  

  const handle =()=>{
    localStorage.setItem("Email", enteredEmail)
    localStorage.setItem("Password", enteredPassword)
  }
  
  return (
    <>
    <div className='background'>
    <div className='border'>
    <div className='reg'>Log in to my App</div>

<div className='styling'>

<form onSubmit={submitHandler} className="row g-3">

<div className="col-md-12">
<input type="email" value={enteredEmail} onChange={emailHandler} className="form-control" placeholder="Email Address" id="inputEmail4" />
</div>

<div className="col-md-12">
<input type="password" value={enteredPassword} onChange={passwordHandler} className="form-control" placeholder="Password" id="LogInPassword" />
</div>

<div className="col-12">
<button type="submit" onClick={handle} className="btn btn-success">Sign In</button>
</div>

<div className='line'>
    <hr></hr>
</div>

<div className='info'>
    or create an account
</div>

<div>
  
<Link to="/SignUpForm" type="button" className="btn btn-primary">Sign Up</Link>

</div>

</form>

</div>
    </div>

    <div className='abc'>
          <div className='def'> Data saved in localStorage:</div>
          
          <div>{localStorage.getItem("Email")}</div>
          <div>{localStorage.getItem("Password")}</div>
          
    </div>

    </div>
    </>
  )
}

export default LogInForm;