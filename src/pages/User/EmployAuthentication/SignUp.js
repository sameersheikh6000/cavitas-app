import { Button } from '@mui/material'
import React, { useState } from 'react'
import useUsers from '../../../hooks/useUsers';
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import { useNavigate } from 'react-router-dom';

const EmploySignUp = () => {
  const { createUser } = useUsers();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company_name: "",
    company_number: "",
    company_address: "",
    role: "Employ",
    password: "",
    password_confirmation: "",
  });

  const changeHandler = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async e => {

    e.preventDefault();
    for (let prop in user) {
      if (!user[prop]) return alert('Please fill the form correctly')
    }
    const response = await createUser(user, "employ");

    if (response?.status?.code < 300) {
      navigate("/employ-signin");
    } else if (response?.data?.message !== undefined) {
      setErrorMessage(response?.data?.message);
    } else if (response?.data?.status?.message == undefined) {
      setErrorMessage("Something went wrong!");
    }
  };


  return (
    <section className='authentication'>
      <AlertMessage errorMessage={errorMessage} />
      <div className='authentication__container'>

        <div className='authentication__container__imageBox'>
          <img src={require("../../../assets/SignIn-img.png")} alt='' />
        </div>

        <div className='authentication__container__formContainer'>
          <p className='authentication__container__formContainer__registerHeading'>LET'S GET YOU REGISTERED</p>
          <form onSubmit={submitHandler} className='authentication__container__formContainer__registerForm'>
            <div>
              <input
                type="text"
                placeholder='First name *'
                name='first_name'
                value={user.first_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder='Last name *'
                name='last_name'
                value={user.last_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="email"
                placeholder='Email address *'
                name='email'
                value={user.email}
                onChange={changeHandler}
                required={true}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder='Broker company name'
                name='company_name'
                value={user.company_name}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder='Broker company number'
                name='company_number'
                value={user.company_number}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder='Broker company address'
                name='company_address'
                value={user.company_address}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="text"
                placeholder='Broker company city'
                name='company_city'
                value={user.role}
                onChange={changeHandler}
                required={true}
                disabled={true}
              />
              <input
                type="text"
                placeholder='Broker company postal code'
                name='company_postal_code'
                value={user.company_postal_code}
                onChange={changeHandler}
                required={true}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder='Set your password *'
                name='password'
                value={user.password}
                onChange={changeHandler}
                required={true}
              />
              <input
                type="password"
                placeholder='Repeat your password *'
                name='password_confirmation'
                value={user.password_confirmation}
                onChange={changeHandler}
                required={true}
              />
            </div>
            <Button className='authentication__container__formContainer__registerForm__registerButton' type="submit">Register Now</Button>
          </form>
        </div >

      </div >
    </section >
  )
}

export default EmploySignUp