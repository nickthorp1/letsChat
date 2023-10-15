import React from 'react'
import Box from '../components/box/Box'
import EmailInput from '../components/emailInput/emailInput'
import LoginHeader from '../components/loginHeader/LoginHeader'
import Header from '../components/header/Header'
import PasswordInput from '../components/passwordInput/PasswordInput'
import AuthForm from '../components/authForm/AuthForm'

function home() {
  return (
    <div>
      <h1>Home</h1>
      <Header text={`Let's Chat`}/>
      <AuthForm/>  
    </div>
  )
}

export default home
