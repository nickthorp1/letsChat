import React from 'react'
import NavBar from '../navBar/NavBar'

const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
    {children}
    <h1>footer</h1>
    </>
  )
}

export default Layout
