import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const HomeRedirect = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const navigate = useNavigate();
  useEffect(() => {
      navigate(`/${lang === 'en' ? 'en' : 'pl'}`, { replace: true });
  }, []);
}

export default HomeRedirect;
