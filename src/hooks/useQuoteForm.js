import axios from "axios";
import { USER_STORAGE_KEY,ADMIN_STORAGE_KEY, API_KEY } from "../config/helpers/variables";
import useHandleErrors from "./useHandleErrors";
import { queryByTestId } from "@testing-library/react";

const useQuoteForm = () => {
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

      const createQuote = async (quoteFrom) => {
        const params = {
          quote_form: {
            name: quoteFrom.name,
            email: quoteFrom.email,
            company_name: quoteFrom.companyName,
            number_of_employ: quoteFrom.numberOfEmploy,
            identity: quoteFrom.identity,
            group_name: quoteFrom.groupName, 
            inception_date: quoteFrom.inceptionDate,
            description: quoteFrom.description
          }
        }
        const response = await axios.post(
          `${API_KEY}/api/v1/quote_forms`,
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
      };

      const getAllQuoteByAdmin = async () => {
        const response = await axios.get(
          `${API_KEY}/api/v1/quote_forms`,
          getAdminHeaders()
        ).then((res) => {
          if (res?.status > 300) {
            handleErrors(res);
          }
          return res.data
        })
        return response;
      }

      const getQuoteDetail = async (id) => {
        debugger
        const response = await axios.get(
          `${API_KEY}/api/v1/quote_forms/${id}`,
          admin ? getAdminHeaders() : getHeaders()
        ).then((res) => {
          if (res?.status > 300) {
            handleErrors(res);
          }
          return res.data
        })
        return response;
      }

      const updateQuoteFormStatus = async (id, status) => {
        const params = {
          quote_form: {
            status: status
          }
        }
        const response = await  axios.put(
            `${API_KEY}/api/v1/quote_forms/${id}`,
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
    }

  return {
    createQuote, getAllQuoteByAdmin, getQuoteDetail, updateQuoteFormStatus
  }
}

export default useQuoteForm