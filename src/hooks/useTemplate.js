import axios from 'axios';
import { API_KEY, USER_STORAGE_KEY, ADMIN_STORAGE_KEY } from '../config//helpers/variables';
import useHandleErrors from './useHandleErrors';

const useTemplate = () => {
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


  const createTemplate = async template => {
    const formData = new FormData()
    for (const property in template) {
      formData.append(
        property, template[property]
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

  const createTemplateAdmin = async template => {
    const formData = new FormData()
    for (const property in template) {
      formData.append(
        property, template[property]
      )
    }
    const response = await axios.post(
      `${API_KEY}/admins/templates`, formData,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const getAllTemplate = async () => {
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

  const getAllTemplateAdmin = async () => {
    const response = await axios.get(
      `${API_KEY}/admins/templates`,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const deleteTemplate = async id => {
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

  const deleteTemplateAdmin = async id => {
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

  const updateTemplate = async template => {
    const formData = new FormData()
    for (const property in template) {
      formData.append(
        property, template[property]
      )
    }
    const params = {
      template: {
        id: template.id
      }
    }
    const response = await axios.put(
      `${API_KEY}/users/templates/${params.template.id}`, formData,
      getHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const updateTemplateAdmin = async template => {
    const formData = new FormData()
    for (const property in template) {
      formData.append(
        property, template[property]
      )
    }
    const params = {
      template: {
        id: template.id,
      }
    }
    const response = await axios.put(
      `${API_KEY}/admins/templates/${params.template.id}`, formData,
      getAdminHeaders()
    ).then((res) => {
      if (res.data.status > 300) {
        handleErrors(res);
      }
      return res.data
    })
    return response;
  };

  const getTemplateById = async (id) => {
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

  const getTemplateByIdAdmin = async (id) => {
    const response = await axios.get(
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

  return {
    createTemplate, getAllTemplate, deleteTemplate, updateTemplate, getTemplateById, createTemplateAdmin, getAllTemplateAdmin, deleteTemplateAdmin, updateTemplateAdmin, getTemplateByIdAdmin,
  };
};
export default useTemplate;