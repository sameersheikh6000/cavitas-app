import { useNavigate } from "react-router";
import { USER_STORAGE_KEY, ADMIN_STORAGE_KEY } from '../config//helpers/variables';

const useHandleErrors = () => {
  const navigate = useNavigate();
  const adminPath = window.location.pathname.includes("admin")

  const handleErrors = err => {
    // err?.data && alert("Something went wrong!");
    if (err?.response && err?.response?.status === 401 && adminPath) {
      sessionStorage.removeItem(USER_STORAGE_KEY);
      navigate("/admin/signin");
    } else if (err?.response && err?.response?.status === 401) {
      sessionStorage.removeItem(ADMIN_STORAGE_KEY);
      navigate("/signin");
    }
  };
  return { handleErrors };
};

export default useHandleErrors;
