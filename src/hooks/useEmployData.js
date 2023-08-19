import axios from "axios";
import useHandleErrors from "./useHandleErrors";
import { API_KEY } from "../config/helpers/variables";


function useEmployData () {
    const { handleErrors } = useHandleErrors();
          
      const getEmployDataByEmail = async (email) => {
        const params = {
          employ_form_detail: {
            email: email
          }
        }
        const response = await axios.get(
          `${API_KEY}/api/v1/employ_form_details/get_data_by_email`,
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
      
      const submitEmployData = async (employData, coInsuredMember) => {
        debugger
        const employ_form_detail = {
           ...employData,
           co_insured_members: coInsuredMember
        }
        const response = await axios.post(
          `${API_KEY}/api/v1/employ_form_details`,
          {
            employ_form_detail
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
      getEmployDataByEmail, submitEmployData
    }
}

export default useEmployData;
