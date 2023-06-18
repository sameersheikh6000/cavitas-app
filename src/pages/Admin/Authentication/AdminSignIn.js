import { Button } from '@mui/material'
import React, { useState } from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useNavigate } from 'react-router-dom';
import useAuthenticate from '../../../hooks/useAuthenticate';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";

const AdminSignIn = () => {
  const { adminLogin } = useAuthenticate();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [viewPassword, setViewPassword] = useState(false);
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    if (viewPassword === false) {
      setViewPassword(true);
    } else {
      setViewPassword(false);
    }
  }

  const changeHandler = event => {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: value });
  };

  const submitHandler = async e => {
    e.preventDefault();
    for (let prop in admin) {
      if (!admin[prop]) return alert('Please fill the form correctly')
    }
    const response = await adminLogin(admin);
    if (response?.data?.status?.code < 300) {
      navigate("/admin");
    } else if (response?.data?.message !== undefined) {
      setErrorMessage(response?.data?.message);

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);

    } else if (response?.data?.status?.message === undefined) {
      setErrorMessage("Something went wrong!");

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
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
          <p className='authentication__container__formContainer__heading'>Welcome to Cavitas Admin! </p>
          <br />   {/* <p className='authentication__container__formContainer__login'>Log In To</p> */}
          <form className='authentication__container__formContainer__form' onSubmit={submitHandler}>
            <input
              className='authentication__container__formContainer__form__email'
              type='email'
              placeholder='Email'
              name='email'
              value={admin.email}
              onChange={changeHandler}
              required={true}
            />
            <div className='authentication__container__formContainer__form__passwordBox'>
              {viewPassword === true ?
                <input
                  className='authentication__container__formContainer__form__passwordBox__password'
                  type='text'
                  name='password'
                  placeholder='Password'
                  value={admin.password}
                  onChange={changeHandler}
                  required={true}
                  autoComplete='off'
                />
                :
                <input
                  className='authentication__container__formContainer__form__passwordBox__password'
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={admin.password}
                  onChange={changeHandler}
                  required={true}
                  autoComplete='off'
                />
              }
              <RemoveRedEyeOutlinedIcon className='authentication__container__formContainer__form__passwordBox__passwordIcon' onClick={handleShowPassword} />
            </div>
            <Button className='authentication__container__formContainer__form__loginButton' type='submit'>Log In</Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AdminSignIn
