import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const  SwitchDocumentRoute = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  
  
  useEffect(() => {
    if(lang === 'pl' && currentUrl.includes('document/pl')){
      navigate('/dokumenty/pl')
    }
    else{
      navigate('/document/en')
    }
  })
}

export default SwitchDocumentRoute;
