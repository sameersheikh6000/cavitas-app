import axios from "axios";
import useHandleErrors from "./useHandleErrors";
import { ADMIN_STORAGE_KEY, USER_STORAGE_KEY, API_KEY } from "../config/helpers/variables";


function useEmployData () {
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
      
      const getEmployDataByEmail = async (email) => {
        const params = {
          employ_form_data: {
            email: email
          }
        }
        const response = await axios.get(
          `${API_KEY}/api/v1/employ_form_data/get_data_by_email`,
          {
            params
          }
        ).then((res) => {
          if (res?.status > 300) {
            handleErrors(res);
          }
          return res.data
        })
        return response;
      }
      
    return {
      getEmployDataByEmail
    }
}

export default useEmployData;
