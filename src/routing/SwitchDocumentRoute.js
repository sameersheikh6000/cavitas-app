import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const  SwitchDocumentRoute = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  
  
  useEffect(() => {
    if(lang === 'pl' && currentUrl.includes('Privacypolicy/pl')){
      navigate('/Politykaprywatnosci/pl')
    }
    else{
      navigate('/Privacypolicy/en')
    }
  })
}

export default SwitchDocumentRoute;
