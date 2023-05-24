import axios from "axios";
import { USER_STORAGE_KEY, ADMIN_STORAGE_KEY, API_KEY } from "../config/helpers/variables";
import useHandleErrors from "./useHandleErrors";

const usePolicyInformation = () => {
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

    const getPolicyInformationByAdmin = async () => {
        const response = await axios.get(
            `${API_KEY}/api/v1/policy_informations`,
            getAdminHeaders()
          ).then((res) => {
            if (res.data.status > 300) {
              handleErrors(res);
            }
            
            return res.data
          })
          return response;
        };

    const getPolicyInformation = async () => {
        const response = await axios.get(
            `${API_KEY}/api/v1/policy_informations`,
            getHeaders()
          ).then((res) => {
            if (res.data.status > 300) {
              handleErrors(res);
            }
            
            return res.data
          })
          return response;
        };

    const createPolicyInformation = async (policyInfo) => {
        const params = {
            policy_information: {
                company_address: policyInfo.company_address,
                company_name: policyInfo.company_name,
                company_url_address: policyInfo.company_url_address,
                company_krs_number: policyInfo.company_krs_number,
                risk_renewal_date: policyInfo.risk_renewal_date,
                risk_inseption_date: policyInfo.risk_inseption_date,
                risk_expiry_date: policyInfo.risk_expiry_date,
                mandated_broker: policyInfo.mandated_broker,
                no_of_insured_persons: policyInfo.no_of_insured_persons
            }
          }
          const response = await axios.post(
            `${API_KEY}/api/v1/policy_informations`,
            {
              ...params
            },
            getAdminHeaders()
          ).then((res) => {
            if (res.status > 300) {
              handleErrors(res);
            }
            return res.data
          })
          return response;

    }

    const updatePolicyInformation =  async (policyInfo) => {
        
        const params = {
            policy_information: {
              company_address: policyInfo.company_address,
              company_name: policyInfo.company_name,
              company_url_address: policyInfo.company_url_address,
              company_krs_number: policyInfo.company_krs_number,
              risk_renewal_date: policyInfo.risk_renewal_date,
              risk_inseption_date: policyInfo.risk_inseption_date,
              risk_expiry_date: policyInfo.risk_expiry_date,
              mandated_broker: policyInfo.mandated_broker,
              no_of_insured_persons: policyInfo.no_of_insured_persons
            }
          }
          const response = await axios.put(
            `${API_KEY}/api/v1/policy_informations/${policyInfo.id}`,
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

    const deletePolicyInformation = async (id) => {
        const response = await axios.delete(
            `${API_KEY}/api/v1/policy_informations/${id}`,
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
        createPolicyInformation, updatePolicyInformation, deletePolicyInformation, getPolicyInformation, getPolicyInformationByAdmin
    }

}

export default usePolicyInformation;