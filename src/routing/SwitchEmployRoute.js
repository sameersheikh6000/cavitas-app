import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const SwitchEmployRoute = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  
  
  useEffect(() => {
    if(lang === 'pl' && currentUrl.includes('employ/pl')){
      navigate('/pracodawca/pl')
    }
    else{
      navigate('/employ/en')
    }
  })
}

export default SwitchEmployRoute;
