import axios from "axios";
import { API_KEY, USER_STORAGE_KEY, ADMIN_STORAGE_KEY } from "../config/helpers/variables";
import useHandleErrors from "./useHandleErrors";
import { useState } from "react";

function useTickets() {
    const { handleErrors } = useHandleErrors();
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

    const createTicket = async ticket => {
        const formData = new FormData()
        for (const property in ticket) {
          formData.append(
            property, ticket[property]
          )
        }
        const response = await axios.post(
          `${API_KEY}/api/v1/tickets`, formData,
          getHeaders()
        ).then((res) => {
          if (res.data.status > 300) {
            handleErrors(res);
          }
          return res.data
        })
        return response;
    }

    const getTicketsByAdmin = async () => {
        const response = await  axios.get(
            `${API_KEY}/api/v1/tickets`,
            getAdminHeaders()
          ).then((res) => {
            if (res.data.status > 300) {
              handleErrors(res);
            }
            return res.data
          })
          return response;
    }

    const getTicketsByUser = async () => {
        const response = await  axios.get(
            `${API_KEY}/api/v1/tickets`,
            getAdminHeaders()
          ).then((res) => {
            if (res.data.status > 300) {
              handleErrors(res);
            }
            return res.data
          })
          return response;
    }

    return{
        createTicket, getTicketsByAdmin, getTicketsByUser
    }

}

export default useTickets