import React, {FC} from 'react'
import { headerProps } from './utils'
import Styles from './header.module.scss'

const Header:FC<headerProps> = ({text}) => {
  return (
    <div className={Styles.header}> 
      <h1>{text}</h1>
    </div>

  
  )
}

export default Header
