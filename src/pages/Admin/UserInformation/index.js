import { Button } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Page from '../../../components/Page/Page';
import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
import useClientInsurance from '../../../hooks/useClientInsurance';
import useUsers from '../../../hooks/useUsers';
import DeleteUserConfirmModal from './Components/DeleteUserConfirmModal';


const UserInformation = () => {

  const navigate = useNavigate();
  const { getAllUsers, deleteUserByAdmin } = useUsers();
  const [errorMessage, setErrorMessage] = useState(null);
  const [users, setUsers] = useState([])
  const [insurance, setInsurance] = useState({
    subject: "",
    description: "",
    file: "",
  });

  const getUsersList = async () => {
    const response = await getAllUsers()
    if (response?.status < 300){
      setUsers(response?.users)
      console.log(users)
    } else if (response?.status > 300) {
      setErrorMessage(response?.message);
    }
  }

  useEffect(() => {
    getUsersList();
  }, [])


  return (
    <Page>
      <AlertMessage errorMessage={errorMessage} />
      <section className='uploadClient'>
        <header>
          <h1>User Information</h1>
        </header>
        <div className='dashboard__container__content__cavitasDocs__details'>
        <table className='dashboard__container__content__cavitasDocs__details__table'>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>User Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? users.map((row, index) => (
              <tr>
                <td>{row?.company_name}</td>
                <td>{row?.email}</td>
                <td>{row?.first_name}</td>
                <td>{row?.last_name}</td>
                <td>{row?.role}</td>
                <td>
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