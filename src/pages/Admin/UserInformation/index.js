import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import Page from '../../../components/Page/Page';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import SuccessMessage from "../../../components/SnackbarMessages/SuccessMessage";
import useClientInsurance from '../../../hooks/useClientInsurance';
import useUsers from '../../../hooks/useUsers';
import DeleteUserConfirmModal from './Components/DeleteUserConfirmModal';
import UpdateUserModal from './Components/UpdateUserModal';


const UserInformation = () => {

  const { getAllUsers, deleteUserByAdmin } = useUsers();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState();
  const [users, setUsers] = useState([])
  

  const getUsersList = async () => {
    const response = await getAllUsers()
    if (response?.status < 300){
      setUsers(response?.users)
    } else if (response?.status > 300) {
      setErrorMessage(response?.message);
    }
  }

  useEffect(() => {
    getUsersList();
  }, [])


  return (
    <Page>
      <SuccessMessage successMessage={successMessage}/>
      <AlertMessage errorMessage={errorMessage} />
      <section className='uploadClient'>
        <header>
         
             <div className='insuredClientView__header__left'>
            <  GroupsIcon   className='insuredClientView__header__left__icon' />
            &nbsp;&nbsp; <h1>Users information</h1>   
                   </div>
        </header>
        <div className='dashboard__container__content__cavitasDocs__details'>
        <table className='dashboard__container__content__cavitasDocs__details__table'>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>User Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Company KRS Number</th>
              <th>User Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? users.map((row, index) => (
              <tr key={index}>
                <td>{row?.company_name}</td>
                <td>{row?.email}</td>
                <td>{row?.first_name}</td>
                <td>{row?.last_name}</td>
                <td>{row?.company_krs_number}</td>

                <td>{row?.role}</td>
                <td style={{display: "flex"}}>
                <UpdateUserModal user_id={row?.id} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} getUsersList={getUsersList} usersList={users}/>
                <DeleteUserConfirmModal user_id={row?.id} getUsersList={getUsersList} setErrorMessage={setErrorMessage} deleteUserByAdmin={deleteUserByAdmin}/>
                </td>
              </tr>
            )) : 
            <div>
              <p>No records.</p>
            </div>
            }
          </tbody>
        </table>
      </div>
      </section>
    </Page>
  )
}

export default UserInformation