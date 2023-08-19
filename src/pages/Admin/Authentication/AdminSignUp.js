import { Button } from '@mui/material'
import React, { useState } from 'react'
import useUsers from '../../../hooks/useUsers';
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const AdminSignUp = () => {
  const { createAdminUser } = useUsers();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
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
    setIsLoading(true)
    const response = await createAdminUser(user);
    if (response?.status?.code < 300) {
      navigate("/admin/signin");
    } else if (response?.data?.message !== undefined) {
      setErrorMessage(response?.data?.message);
      setIsLoading(false)
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);

    } else if (response?.data?.status?.message === undefined) {
      setErrorMessage("Something went wrong!");
      setIsLoading(false)
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
                type="email" placeholder='Email address *'
                name='email'
                value={user.email}
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
            <Button 
              className='authentication__container__formContainer__registerForm__registerButton' 
              type="submit"
              disabled={isLoading}
            >
              {!isLoading ? 
                  'Register Now'
                :
                  <CircularProgress 
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "white",
                    }}
                  />
              }
            </Button>
          </form>
        </div >
      </div >
    </section >
  )
}

export default AdminSignUp
