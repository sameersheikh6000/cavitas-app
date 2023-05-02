import axios from "axios";
import useHandleErrors from "./useHandleErrors";
import { ADMIN_STORAGE_KEY, USER_STORAGE_KEY, API_KEY } from "../config/helpers/variables";

function useContactForm() {
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


    const createContact = async (contactForm) => {
      debugger
        const params = {
            contact_form: {
                first_name: contactForm.first_name,
                last_name: contactForm.last_name,
                email: contactForm.email,
                description: contactForm.description,
                identity: contactForm.identity,
                request: contactForm.request,
            } 
        }
        const response = await axios.post(
            `${API_KEY}/api/v1/contact_forms`,
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

    const getAllContactForms = async () => {
      const response = await axios.get(
        `${API_KEY}/api/v1/contact_forms`,
        admin ? getAdminHeaders() : getHeaders()
      ).then((res) => {
        if (res?.status > 300) {
          handleErrors(res);
        }
        return res.data
      })
      return response;
    }

    const getContactFormById = async (id) => {
      const response = await axios.get(
        `${API_KEY}/api/v1/contact_forms/${id}`,
        admin ? getAdminHeaders() : getHeaders()
      ).then((res) => {
        if (res?.status > 300) {
          handleErrors(res);
        }
        return res.data
      })
      return response;
    }

    const updateContactFormStatus = async (id, ticket_status) => {
      const params = {
        contact_form: {
          status: parseInt(ticket_status)
        }
      }
      const response = await axios.put(
        `${API_KEY}/api/v1/contact_forms/${id}`,
        {
          ...params
        },
        getAdminHeaders()
      ).then((res) => {
        if (res?.status > 300) {
          handleErrors(res);
        }
        return res.data
      })
      return response;
    }
    
  return {
    createContact, getAllContactForms, getContactFormById, updateContactFormStatus
  }
}

export default useContactForm;