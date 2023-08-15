import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SwitchAboutRoute = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  
  
  useEffect(() => {
    if(lang === 'pl' && currentUrl.includes('about/pl')){
      navigate('/o-nas/pl')
    }
    else{
      navigate('/about/en')
    }
  })
}

export default SwitchAboutRoute;
