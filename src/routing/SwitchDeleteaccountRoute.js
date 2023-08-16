import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const SwitchDeleteaccountRoute = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  
  
  useEffect(() => {
    if(lang === 'pl' && currentUrl.includes('deletemyaccount/pl')){
      navigate('/usunmojekonto/pl')
    }
    else{
      navigate('/deletemyaccount/en')
    }
  })
}

export default SwitchDeleteaccountRoute;
