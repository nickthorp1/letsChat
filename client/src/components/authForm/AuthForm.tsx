import React, { useState } from 'react';
import Style from './authForm.module.scss'
import EmailInput from '../emailInput/emailInput';
import PasswordInput from '../passwordInput/PasswordInput';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with: \nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className={Style.container}>
    <form className={Style.authform} onSubmit={handleSubmit}>
      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default AuthForm;