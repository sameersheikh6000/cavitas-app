import axios from 'axios';
import { API_KEY, USER_STORAGE_KEY, ADMIN_STORAGE_KEY } from '../config/helpers/variables';
import useHandleErrors from './useHandleErrors';

const useClientInsurance = () => {
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


  const createClientInsurance = async insurance => {
    const formData = new FormData()
    for (const property in insurance) {
      formData.append(
        property, insurance[property]
      )
    }
    const response = await axios.post(
      `${API_KEY}/api/v1/client_infos`, formData,
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };
  const createClientInsuranceAdmin = async insurance => {
    const formData = new FormData()
    for (const property in insurance) {
      formData.append(
        property, insurance[property]
      )
    }
    const response = await axios.post(
      `${API_KEY}/api/v1/client_infos`, formData,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };


  const getAllClientInsurance = async () => {
    const response = await axios.get(
      `${API_KEY}/api/v1/insured_clients`,
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const getAllClientInsuranceAdmin = async () => {
    const response = await axios.get(
      `${API_KEY}/api/v1/insured_clients`,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const deleteClientInsurance = async id => {
    const response = await axios.delete(
      `${API_KEY}/users/templates/${id}`,
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const deleteClientInsuranceAdmin = async id => {
    const response = await axios.delete(
      `${API_KEY}/admins/templates/${id}`,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const updateClientInsurance = async insurance => {
    const formData = new FormData()
    for (const property in insurance) {
      formData.append(
        property, insurance[property]
      )
    }
    const params = {
      insurance: {
        id: insurance.id
      }
    }
    const response = await axios.put(
      `${API_KEY}/users/templates/${params.insurance.id}`, formData,
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const updateClientInsuranceAdmin = async insurance => {
    const formData = new FormData()
    for (const property in insurance) {
      formData.append(
        property, insurance[property]
      )
    }
    const params = {
      insurance: {
        id: insurance.id
      }
    }
    const response = await axios.put(
      `${API_KEY}/users/templates/${params.insurance.id}`, formData,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };


  const getClientInsuranceById = async (id) => {
    const response = await axios.get(
      `${API_KEY}/users/templates/${id}`,
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const getClientInsuranceByIdAdmin = async (id) => {
    const response = await axios.get(
      `${API_KEY}/users/templates/${id}`,
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
    createClientInsurance, getAllClientInsurance, deleteClientInsurance, updateClientInsurance, getClientInsuranceById, createClientInsuranceAdmin, getAllClientInsuranceAdmin, deleteClientInsuranceAdmin, updateClientInsuranceAdmin, getClientInsuranceByIdAdmin,
  };
};
export default useClientInsurance;