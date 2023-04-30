import axios from "axios";
import useHandleErrors from "./useHandleErrors";
import { API_KEY, USER_STORAGE_KEY, ADMIN_STORAGE_KEY } from "../config/helpers/variables";

function useQuoteReply() {

    const {handleErrors} = useHandleErrors();
    const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
    const admin = JSON.parse(sessionStorage.getItem(ADMIN_STORAGE_KEY));


    const getAdminHeaders = () => {
        if (admin) {
          return {
            headers: {
              Authorization: admin.token,
            },
          };
        }
      };


    const createReply = async (quote, reply_text) => {
        const params = {
            quote_reply: {
                reply_text: reply_text,
                quote_form_id: quote.id,
                reply_to: quote.email
            } 
        }
        const response = await axios.post(
            `${API_KEY}/api/v1/quote_replies`,
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
        createReply
    }
}

export default useQuoteReply;