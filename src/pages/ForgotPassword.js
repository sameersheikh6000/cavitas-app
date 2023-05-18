import React, { useState } from 'react';
import useForgotPassword from '../hooks/useForgotPassword';
import { Link, withRouter } from 'react-router-dom';

const ForgotPassword = ({ history }) => {
  const { forgotPassword } = useForgotPassword();
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmail(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    forgotPassword(email);
    setEmail("");
    history.push('/');
  };

  return (
    <>
      <p>Request password reset:</p>
      <form onSubmit={handleSubmit}>
      <input
            required
            id="forgotpasswordemail"
            onChange={handleChange}
            name="email"
            placeholder="email"
            type="email"
            value={email}
          />
      <button>Submit</button>
      </form>
    </>
  );
};

export default withRouter(ForgotPassword);