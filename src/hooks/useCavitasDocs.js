import axios from "axios";
import { USER_STORAGE_KEY, ADMIN_STORAGE_KEY, API_KEY } from "../config/helpers/variables";
import useHandleErrors from "./useHandleErrors";

const useCavitasDocs = () => {
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

    const getCavitasDocsByAdmin = async () => {
        const response = await axios.get(
            `${API_KEY}/api/v1/cavitas_documents`,
            getAdminHeaders()
          ).then((res) => {
            if (res.data.status > 300) {
              handleErrors(res);
            }
            
            return res.data
          })
          return response;
        };

    const getCavitasDocs = async () => {
        const response = await axios.get(
            `${API_KEY}/api/v1/cavitas_documents`,
            getHeaders()
          ).then((res) => {
            if (res.data.status > 300) {
              handleErrors(res);
            }
            
            return res.data
          })
          return response;
        };

    const createCavitasDocs = async (cavitas_docs) => {
        const formData = new FormData()
            for (const property in cavitas_docs) {
                formData.append(
                    property, cavitas_docs[property]
                )
            }
          const response = await axios.post(
            `${API_KEY}/api/v1/cavitas_documents`, formData,
            getAdminHeaders()
          ).then((res) => {
            if (res.status > 300) {
              handleErrors(res);
            }
            return res.data
          })
          return response;

    }

    const updateCavitasDocs =  async (cavitas_docs) => {
        
        const formData = new FormData()
            for (const property in cavitas_docs) {
                formData.append(
                    property, cavitas_docs[property]
                )
            }
       
          const response = await axios.put(
            `${API_KEY}/api/v1/cavitas_documents/${cavitas_docs.id}`, formData,
            getAdminHeaders()
          ).then((res) => {
            if (res.data.status > 300) {
              handleErrors(res);
            }
            return res.data
          })
          return response;

    }

    const deleteCavitasDocs = async (id) => {
        const response = await axios.delete(
            `${API_KEY}/api/v1/cavitas_documents/${id}`,
            getAdminHeaders()
          ).then((res) => {
            if (res.data.status > 300) {
              handleErrors(res);
            }
            return res.data
          })
          return response;
        
    }

    const getCavitasDocsById = async (id) => {
        const response = await axios.get(
            `${API_KEY}/api/v1/cavitas_documents/${id}`,
            getAdminHeaders()
          ).then((res) => {
            if (res.data.status > 300) {
              handleErrors(res);
            }
            return res.data
          })
          return response;
    }
    

    return {
        getCavitasDocsByAdmin, getCavitasDocs, createCavitasDocs, updateCavitasDocs, deleteCavitasDocs, getCavitasDocsById
    }

}

export default useCavitasDocs;