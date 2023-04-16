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
  return {
    createQuote
  }
}

export default useQuoteForm