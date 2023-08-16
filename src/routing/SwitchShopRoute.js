import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const SwitchShopRoute = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  
  
  useEffect(() => {
    if(lang === 'pl' && currentUrl.includes('Shop/pl')){
      navigate('/sklep/pl')
    }
    else{
      navigate('/Shop/en')
    }
  })
}

export default SwitchShopRoute;
