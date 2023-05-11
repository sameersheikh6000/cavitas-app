import { Button } from '@mui/material'
import React, { useState } from 'react'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Link, useNavigate } from 'react-router-dom';
import useAuthenticate from '../../../hooks/useAuthenticate';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
const MemberSignIn = () => {

  const { userLogin } = useAuthenticate();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [viewPassword, setViewPassword] = useState(false);
  const [user, setUser] = useState({
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
    setUser({ ...user, [name]: value });
  };

  const submitHandler = async e => {

    e.preventDefault();
    for (let prop in user) {
      if (!user[prop]) return alert('Please fill the form correctly')
    }
    const response = await userLogin(user);
    if (response?.data?.status?.code < 300) {
      navigate("/dashboard");
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
          <div className='authentication__container__imageBox__top' onClick={() => navigate("/")}>
            <img className='authentication__container__imageBox__top__logo' src={require("../../../assets/Signin-logo.png")} alt='' />
            <img className='authentication__container__imageBox__top__flag' src={require("../../../assets/Signin-flag.png")} alt='' />
          </div>

          <div className='authentication__container__imageBox__bottom'>
            <img className='authentication__container__imageBox__bottom' src={require("../../../assets/MemberLogin-image.png")} alt='' />
          </div>
        </div>

        <div className='authentication__container__formContainer'>
          <p className='authentication__container__formContainer__heading'>Welcome to Cavitas! </p>
         <br /> {/* <p className='authentication__container__formContainer__login'>Log In To</p> */}
          <form className='authentication__container__formContainer__form' onSubmit={submitHandler}>
            <input
              className='authentication__container__formContainer__form__email'
              type='email'
              placeholder='Email'
              name='email'
              value={user.email}
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
                  value={user.password}
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
                  value={user.password}
                  onChange={changeHandler}
                  required={true}
                  autoComplete='off'
                />
              }
              <RemoveRedEyeOutlinedIcon className='authentication__container__formContainer__form__passwordBox__passwordIcon' onClick={handleShowPassword} />
            </div>
            <Button className='authentication__container__formContainer__form__loginButton' type='submit'>Log In</Button>
          </form>
          <Link to="/MemberEnterMail" className='authentication__container__formContainer__forgotPassword'>Forgot your password?</Link>
          <div className='authentication__container__formContainer__registerNow'>
            <p>Don't have account yet?</p>
            <Link to="/member-signup">
              <Button>Register now!</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MemberSignIn