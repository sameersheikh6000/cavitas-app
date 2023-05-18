import React, { useState } from 'react';
import useForgotPassword from '../hooks/useForgotPassword';
import { useDispatch } from 'react-redux';

const ResetPassword = () => {
  const { resetPassword } = useForgotPassword();
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'token') {
      setToken(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'password_confirmation') {
      setPasswordConfirmation(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== passwordConfirmation) {
      alert("Passwords don't match");
      setPassword("");
      setPasswordConfirmation("");
    } else {
      dispatch(resetPassword({
      token,
      email,
      password,
      password_confirmation: passwordConfirmation
    }));
    setToken("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
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
          onChange={handleChange}
          name="token"
          placeholder="token"
          type="token"
          value={token}
        />
    <p>The code that was emailed to you. This is case-sensitive.</p>
    <label htmlFor="email">Email:</label>
    <input
          required
          id="email"
          onChange={handleChange}
          name="email"
          placeholder="email"
          type="email"
          value={email}
        />
    <label htmlFor="password">New password:</label>
    <input
          required
          id="password"
          onChange={handleChange}
          name="password"
          placeholder="password"
          type="password"
          value={password}
        />
    <p>Set your new password here.</p>
    <label htmlFor="password_confirmation">Confirm new password:</label>
    <input
          required
          id="password_confirmation"
          onChange={handleChange}
          name="password_confirmation"
          placeholder="password confirmation"
          type="password"
          value={passwordConfirmation}
        />
    <button type="secondary">Reset Password</button>
  </form>
  </>
  );
};

export default ResetPassword;