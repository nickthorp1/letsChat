import React, {FC} from 'react'
import { PasswordInputProps } from './utils'

const PasswordInput:FC<PasswordInputProps> = ({value, onChange}) => {
  return (
    <input 
    type="password" 
    className="password-input" 
    value={value} 
    onChange={onChange}
    placeholder="Enter your password" 
  />
  )
}

export default PasswordInput
