import axios from "axios";
import useHandleErrors from "./useHandleErrors";
import { API_KEY, ADMIN_STORAGE_KEY, USER_STORAGE_KEY } from "../config/helpers/variables";

function useSupportTicketReply() {

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


    const createReply = async (ticket, reply_text) => {
        debugger
        const params = {
            ticket_reply: {
                reply_text: reply_text,
                ticket_id: ticket.id,
                reply_to: ticket.email 
            } 
        }
        const response = await axios.post(
            `${API_KEY}/api/v1/ticket_replies`,
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

    const createTicketReplyAnswer = async (answer) => {
      debugger
      const formData = new FormData()
      for (const property in answer) {
        formData.append(
          property, answer[property]
        )
      }
      const response = await axios.post(
          `${API_KEY}/api/v1/ticket_reply_answers`,formData ,
          admin ? getAdminHeaders() : getHeaders()
        ).then((res) => {
          if (res?.status > 300) {
            handleErrors(res);
          }
          return res.data
        })
        return response;
  }

return {
        createReply, createTicketReplyAnswer
    }
}

export default useSupportTicketReply;