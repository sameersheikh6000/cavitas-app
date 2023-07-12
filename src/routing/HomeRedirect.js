import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

const HomeRedirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
      navigate('/pl', { replace: true });
  }, []);
}

export default HomeRedirect;
