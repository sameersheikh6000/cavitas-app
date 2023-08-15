import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const SwitchClaimRoute = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  
  
  useEffect(() => {
    if(lang === 'pl' && currentUrl.includes('claims/pl')){
      navigate('/roszczenia/pl')
    }
    else{
      navigate('/claims/en')
    }
  })
}

export default SwitchClaimRoute;
