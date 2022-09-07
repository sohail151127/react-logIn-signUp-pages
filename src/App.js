import React from 'react'
import LogInForm from './components/form/loginform/LogInForm'
import SignUpForm from './components/form/signupform/SignUpForm'
import Navbar from './components/navbar/Navbar'

// import ReactDOM from "react-dom/client";
import {
  // BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="SignUpForm" element={<SignUpForm />} />
      <Route path="LogInForm" element={<LogInForm />} />
    </Routes>
    </>
  )
}

export default App