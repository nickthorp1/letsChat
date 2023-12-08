import React from 'react'
import Box from '../components/box/Box'
import EmailInput from '../modules/auth/emailInput/emailInput'
import LoginHeader from '../modules/auth/loginHeader/LoginHeader'
import Header from '../modules/commonUI/header/Header'
import PasswordInput from '../modules/auth/passwordInput/PasswordInput'
import AuthForm from '../modules/auth/authForm/AuthForm'

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
