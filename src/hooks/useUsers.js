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
        company_krs_number: user.company_krs_number,
        company_address: user.company_url_address,
        company_city: user.company_city,
        phone_number: user.phone_number,
        company_postal_code: user.company_postal_code,
        company_country: user.company_country,
        password: user.password,
        company_pesel_number: user.company_pesel_number,
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
      else if(res.status < 300 ){
        sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify({ ...res.data, token: res.headers.get("Authorization") }));
      }
      return res.data
    })
    return response;
  };

  const getAllUsers = async () => {
    const response = await axios.get(
      `${API_KEY}/api/v1/manage_users`,
      getAdminHeaders()
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
    
    const params = {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: user.phone_number,
        password: user.password,
        password_confirmation: user.confirm_password,
        company_krs_number: user.company_krs_number,
        company_pesel_number: user.company_pesel_number,
        company_address: user.company_address,
        company_name: user.company_name
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
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        company_name: user.company_name,
        company_krs_number: user.company_krs_number,
        company_address: user.company_address,
        phone_number: user.phone_number,
        password: user.password,
        password_confirmation: user.password_confirmation,
      }
    }
    const response = await axios.put(
      `${API_KEY}/users`,
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

  const deleteUserByAdmin = async id => {
    if(id !== undefined) {
      const response = await axios.delete(
        `${API_KEY}/api/v1/manage_users/${id}`,
        getAdminHeaders()
      ).then((res) => {
        if (res.data.status > 300) {
          handleErrors(res);
        }
        return res.data
      })
      return response;
    }
  };

  const updateUserByAdmin = async (user) => {
    
    const params = {
      user: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        company_name: user.company_name,
        company_address: user.company_address,
        company_krs_number: user.company_krs_number,
        phone_number: user.phone_number,
        password: user.password,
        company_pesel_number: user.company_pesel_number,
        password_confirmation: user.password_confirmation,
      }
    }
    if (user.id !== undefined ) {
      const response = await axios.put(
        `${API_KEY}/api/v1/manage_users/${user.id}`,
        {
          ...params
        },
        getAdminHeaders(),
        ).then((res) => {
          
          if (res.data.status > 300) {
            handleErrors(res);
          }
          return res.data
        })
        return response;
    }
  }

  const getUserByAdmin = async (id) => {
    debugger
    if(id !== undefined){
        const response = await axios.get(`${API_KEY}/api/v1/manage_users/${id}`,
        admin ? getAdminHeaders() : getHeaders()
        ).then((res) => {
        if (res.data.status > 300) {
          handleErrors(res);
        }
        return res.data
      })
      return response;
    }
  }

  return {
    createUser, getAllUsers, deleteUser, updateUser, getUserById, getAllAdminUsers, deleteAdminUser, updateAdminUser, getAdminUserById, deleteUserByAdmin, updateUserByAdmin, getUserByAdmin
  };
};
export default useUsers;