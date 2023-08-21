import axios from 'axios';
import { API_KEY } from '../config/helpers/variables';
import useHandleErrors from './useHandleErrors';

const useForgotPassword = () =>  {
  const { handleErrors } = useHandleErrors();

  const forgotPassword = async (email, lang) => {
    const params = {
      email: email,
      lang: lang
    }
    const response = await axios.post(
      `${API_KEY}/api/v1/forgot_password`,
      {
        ...params
      }
    ).then((res) => {
      if (res?.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  }

  const resetPassword = async (credentials) => {

    const params = {
      credentials: credentials
    }

    const response = await axios.post(
      `${API_KEY}/api/v1/reset_password`,
      {
        ...params
      }
    ).then((res) => {
      if (res?.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;

  }

  return {
    forgotPassword, resetPassword
  }
}

export default useForgotPassword;
