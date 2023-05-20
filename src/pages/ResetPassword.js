import React, { useState } from 'react';
import useForgotPassword from '../hooks/useForgotPassword';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { resetPassword } = useForgotPassword();
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [credential, setCredential] = useState({
    token:  '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (credential?.password == credential?.passwordConfirmation) {
      const response = await resetPassword(credential)
    if(response?.status < 300){ 
    setSuccessMessage(response?.message)
    setTimeout(() => {
      navigate('/')
    }, 3000);
    }
    } else if (credential?.password !== credential?.passwordConfirmation) {
      setErrorMessage('Please Check If Both Passwords Are Correct')
    }
  };

  return (
  <>
  <p>Reset Password:</p>
  <form onSubmit={handleSubmit}>
    <label htmlFor="token">Token:</label>
    <input
          required
          id="token"
          onChange={(e) => setCredential({...credential, token: e.target.value})}
          name="token"
          placeholder="token"
          type="token"
          value={credential?.token}
        />
    <p>The code that was emailed to you. This is case-sensitive.</p>
    <label htmlFor="email">Email:</label>
    <input
          required
          id="email"
          onChange={(e) => setCredential({...credential, email: e.target.value})}
          name="email"
          placeholder="email"
          type="email"
          value={credential?.email}
        />
    <label htmlFor="password">New password:</label>
    <input
          required
          id="password"
          onChange={(e) => setCredential({...credential, password: e.target.value})}
          name="password"
          placeholder="password"
          type="password"
          value={credential?.password}
        />
    <p>Set your new password here.</p>
    <label htmlFor="password_confirmation">Confirm new password:</label>
    <input
          required
          id="password_confirmation"
          onChange={(e) => setCredential({...credential, passwordConfirmation: e.target.value})}
          name="password_confirmation"
          placeholder="password confirmation"
          type="password"
          value={credential?.passwordConfirmation}
        />
    <button type="secondary">Reset Password</button>
  </form>
  </>
  );
};

export default ResetPassword;