import axios from "axios";
import useHandleErrors from "./useHandleErrors";
import { API_KEY, ADMIN_STORAGE_KEY, USER_STORAGE_KEY } from "../config/helpers/variables";

function useClientInfoReply() {

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

      const getHeaders = () => {
        if (user) {
          return {
            headers: {
              Authorization: user.token,
            },
          };
        }
      };


    const createClientReply = async (client_info_reply) => {
      const formData = new FormData()
      for (const property in client_info_reply) {
        formData.append(
          property, client_info_reply[property]
        )
      }
        const response = await axios.post(
            `${API_KEY}/api/v1/client_info_replies`,formData,
            getAdminHeaders()
          ).then((res) => {
            if (res?.status > 300) {
              handleErrors(res);
            }
            return res.data
          })
          return response;

    }

    const createClientInfoReplyAnswer = async (answer) => {
      

      const formData = new FormData()
      for (const property in answer) {
        formData.append(
          property, answer[property]
        )
      }

      
      const response = await axios.post(
          `${API_KEY}/api/v1/client_info_reply_answers`,formData ,
            getHeaders()
        ).then((res) => {
          if (res?.status > 300) {
            handleErrors(res);
          }
          return res.data
        })
        return response;

  }
    

return {
    createClientReply, createClientInfoReplyAnswer
    }
}

export default useClientInfoReply;