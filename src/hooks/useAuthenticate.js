import axios from 'axios';
import { API_KEY, USER_STORAGE_KEY, ADMIN_STORAGE_KEY } from '../config/helpers/variables';
import useHandleErrors from './useHandleErrors';

const useAuthenticate = () => {
  const { handleErrors } = useHandleErrors();
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  const admin = JSON.parse(sessionStorage.getItem(ADMIN_STORAGE_KEY));

  const getHeaders = () => {
    if (user) {
      return {
        headers: {
          Authorization: user.token,
        },
      };
    }
  };

  const getAdminHeaders = () => {
    if (admin) {
      return {
        headers: {
          Authorization: admin.token,
        },
      };
    }
  };

  const userAuthenticate = () => {
    const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
    return user
  }

  const adminAuthenticate = () => {
    const admin = JSON.parse(sessionStorage.getItem(ADMIN_STORAGE_KEY));
    return admin
  }

  const userLogin = async user => {
    try {
      const params = {
        user: {
          email: user.email,
          password: user.password,
        }
      }
      const response = await axios.post(`${API_KEY}/users/sign_in`, {
        ...params,
      });
      sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ ...response.data, token: response.headers.get("Authorization") }));
      return response;
    } catch (err) {
      handleErrors(err);
    }
  };


  const userLogout = async user => {
   
    try {
      const response = await axios.delete(`${API_KEY}/users/sign_out`,
        getHeaders()
      );
      sessionStorage.removeItem(USER_STORAGE_KEY)
      return response.data;
    } catch (err) {
      handleErrors(err);
    }
  };

  const adminLogin = async user => {
    try {
      const params = {
        user: {
          email: user.email,
          password: user.password,
        }
      }
      const response = await axios.post(`${API_KEY}/users/sign_in`, {
        ...params,
      });
      sessionStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify({ ...response.data, token: response.headers.get("Authorization") }));
      return response;
    } catch (err) {
      handleErrors(err);
    }
  };

  const adminLogout = async user => {
    
    try {
      const response = await axios.delete(`${API_KEY}/users/sign_out`,
        getAdminHeaders()
      );
      sessionStorage.removeItem(ADMIN_STORAGE_KEY)
      return response.data;
    } catch (err) {
      handleErrors(err);
    }
  };


  return { userLogin, adminLogin, adminAuthenticate, userAuthenticate, userLogout, adminLogout };
}

export default useAuthenticate;