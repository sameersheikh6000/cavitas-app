import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const SwitchMemberRoute = () => {
  const navigate = useNavigate();
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  
  
  useEffect(() => {
    if(lang === 'pl' && currentUrl.includes('member/pl')){
      navigate('/członek/pl')
    }
    else{
      navigate('/member/en')
    }
  })
}

export default SwitchMemberRoute;
