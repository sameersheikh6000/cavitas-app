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

    // let participation_mode ;
    if (insurance.mandatory !== ""){
       insurance.participation_mode = 1
    } else if (insurance.voluntary !== ""){
      insurance.participation_mode = 2
    }
    const params = {
    corporate_client_name: insurance.corporate_client_name,
    number_of_employees_in_company: insurance.number_of_employees_in_company,
    inception_date: insurance.inception_date,
    file: insurance.file,
    details: insurance.details,
    referenced_broker_name: user?.data?.role === 'broker' ? `${user?.data?.first_name}` + ` ` + `${user?.data?.last_name}` : insurance?.referenced_broker_name,
    participation_mode: insurance.participation_mode,
    mandatory_number_of_employees: insurance.mandatory_number_of_employees,
    voluntary_number_of_employees: insurance.voluntary_number_of_employees,
    employees_family_info: insurance.employees_family_info,
    insurance_payment_type: insurance.insurance_payment_type,
    broker_reference: user?.data?.role === 'broker' ? 1 : insurance?.broker_reference,
    email: user?.data?.email,
    }
    const formData = new FormData()
    for (const property in params) {
      formData.append(
        property, params[property]
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
      `${API_KEY}/api/v1/client_infos`,
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
      `${API_KEY}/api/v1/client_infos`,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const getAllSupportForms = async () => {
    const response = await axios.get(
      `${API_KEY}/api/v1/client_infos/all_support_forms`,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const getClientInfoById = async (id) => {
    const response = await axios.get(
      `${API_KEY}/api/v1/client_infos/${id}`,
      admin ? getAdminHeaders() : getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  }


  const updateClientInsuranceAdmin = async (id) => {
    const params = {
      client_info: {
        status: 2
      }
    }
    const response = await axios.put(
      `${API_KEY}/api/v1/client_infos/${id}`,
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

  const updateClientInfoTicketStatusAdmin = async (id, status) => {
    const params = {
      client_info: {
        status: status
      }
    }
    const response = await axios.put(
      `${API_KEY}/api/v1/client_infos/${id}/update_ticket_status`,
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

  const getInsuredClientsByAdmin = async () => {
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
  }

  const getInsuredClients = async () => {
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
  }

  const exportCsv = async (duration) => {
    const params = {
        from: duration?.from,
        to: duration?.to
    }
    const response = await axios.get(
      `${API_KEY}/api/v1/insured_clients/export_csv`,{params},
      getAdminHeaders()
    ).then((res) => {
      if (res.status > 300) {
        handleErrors(res);
      }
      return res
    })
      return response;
  }

  const forSupportForms = async info => {
    const formData = new FormData()
    for (const property in info) {
      formData.append(
        property, info[property]
      )
    }
    const response = await axios.post(
      `${API_KEY}/api/v1/client_infos/support_forms`, formData
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  }


  const createNewTicket = async info => {
    const formData = new FormData()
    for (const property in info) {
      formData.append(
        property, info[property]
      )
    }
    const response = await axios.post(
      `${API_KEY}/api/v1/client_infos/support_ticket`, formData,
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  }

  const deleteAccountRequest = async (deleteAccount) => {
    const formData = new FormData()
    for (const property in deleteAccount) {
      formData.append(
        property, deleteAccount[property]
      )
    }
    const response = await axios.post(
      `${API_KEY}/api/v1/client_infos/support_forms`, formData
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  }

  return {
    createClientInsurance, getAllClientInsurance, createClientInsuranceAdmin, getAllClientInsuranceAdmin, updateClientInsuranceAdmin, getInsuredClients, getInsuredClientsByAdmin, getClientInfoById, exportCsv, forSupportForms, createNewTicket, getAllSupportForms, updateClientInfoTicketStatusAdmin, deleteAccountRequest

  };
};
export default useClientInsurance;
