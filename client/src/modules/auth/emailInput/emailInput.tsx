import React, {FC} from 'react';
import './emailInput.module.scss';
import { emailInputProps } from './utils';

const EmailInput: FC<emailInputProps> = ({ value, onChange }) => {
  return (
    <input 
      type="email" 
      className="email-input" 
      value={value} 
      placeholder="Enter your email" 
      onChange={onChange}
      required
    />
  );
};

export default EmailInput;
