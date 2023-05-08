import React from 'react'
import { USER_STORAGE_KEY } from '../../../../config/helpers/variables'

const Welcome = () => {

  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  if(user?.data?.first_name && user?.data?.last_name){
    var name = `${user?.data?.first_name}` + ' ' + `${user?.data?.last_name}`
  }
  else{
    var name = ""
  }
  
  return (
    <section className='dashboard__container__content__welcomePage'>
      {/* <h1 className='dashboard__container__content__welcomePage__heading'>Welcome back, {name}!</h1> */}
         <h3 className='dashboard__container__content__welcomePage__heading'>Welcome to Cavitas dental insurance!</h3>

      <p className='dashboard__container__content__welcomePage__description'>
        
      This protected area is a platform for communication between us. Here you can:    <br />                                                         a) To inform us who you want to include to the insurance cover  <br />
b) To see a summary of your insured clients <br />
c) To access and download valid contract documents <br />
d) To contact us through support tickets <br />

Best regards  <br />
Cavitas
        </p>
      {/* <p className='dashboard__container__content__welcomePage__support'>Need some help? Let's Chat.</p>
      <p className='dashboard__container__content__welcomePage__contact'>XXXXXXX &nbsp; | &nbsp;  support@cavitas.eu</p>
     */}
    
    </section>
  )
}

export default Welcome