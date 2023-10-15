import React from 'react'
import NavBar from '../navBar/NavBar'
import Styles from './layout.module.scss'

const Layout = ({children}) => {
  return (
    <>
    <NavBar/>
    <div className={Styles.background}>
    {children}
    </div>
    <h1>footer</h1>
    </>
  )
}

export default Layout
