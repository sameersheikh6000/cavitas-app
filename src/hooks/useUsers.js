import axios from 'axios';
import { API_KEY, USER_STORAGE_KEY, ADMIN_STORAGE_KEY } from '../config//helpers/variables';
import useHandleErrors from './useHandleErrors';

const useUsers = () => {
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

  const createUser = async (user, type) => {
    if(type === "member"){
      var role = 1
    }
    else if(type === "broker"){
      var role = 2
    }
    else if (type === "employ"){
      var role = 3
    }
    
    const params = {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        company_name: user.company_name,
        company_krs_number: user.company_number,
        company_address: user.company_address,
        company_city: user.company_city,
        company_postal_code: user.company_postal_code,
        company_country: user.company_country,
        password: user.password,
        role: role,
        password_confirmation: user.password_confirmation,
      }
    }
    const response = await axios.post(
      `${API_KEY}/users`,
      {
        ...params
      },
      getHeaders()
    ).then((res) => {
      if (res?.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const getAllUsers = async () => {
    const response = await axios.get(
      `${API_KEY}/users`,
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const deleteUser = async id => {
    const response = await axios.delete(
      `${API_KEY}/users/${id}`,
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const updateUser = async user => {
    debugger
    const params = {
      user: {
        // id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        // email: user.email,
        // company_name: user.company_name,
        // company_number: user.company_number,
        // company_address: user.company_address,
        // company_city: user.company_city,
        // company_postal_code: user.company_postal_code,
        // company_country: user.company_country,
        phone_number: user.phone_number,
        password: user.password,
        password_confirmation: user.confirm_password,
      }
    }
    const response = await axios.put(
      `${API_KEY}/users`,
      {
        ...params
      },
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const getUserById = async (id) => {
    const response = await axios.get(
      `${API_KEY}/users/${id}`,
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };


  const createAdminUser = async user => {
    const params = {
      user: {
        // first_name: user.first_name,
        // last_name: user.last_name,
        email: user.email,
        password: user.password,
        role: 0,
        password_confirmation: user.password_confirmation,
      }
    }
    const response = await axios.post(
      `${API_KEY}/users`,
      {
        ...params
      },
      getAdminHeaders()
    ).then((res) => {
      if (res.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const getAllAdminUsers = async () => {
    const response = await axios.get(
      `${API_KEY}/users`,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const deleteAdminUser = async id => {
    const response = await axios.delete(
      `${API_KEY}/users/${id}`,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const updateAdminUser = async user => {
    const params = {
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        password_confirmation: user.password_confirmation,
      }
    }
    const response = await axios.put(
      `${API_KEY}/users/${params.user.id}`,
      {
        ...params
      },
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const getAdminUserById = async (id) => {
    const response = await axios.get(
      `${API_KEY}/users/${id}`,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };


  return {
    createUser, getAllUsers, deleteUser, updateUser, getUserById, createAdminUser, getAllAdminUsers, deleteAdminUser, updateAdminUser, getAdminUserById,
  };
};
export default useUsers;