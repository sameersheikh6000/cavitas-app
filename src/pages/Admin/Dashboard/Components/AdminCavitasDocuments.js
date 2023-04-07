import { Button } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import React, {useState, useEffect} from 'react'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../../../hooks/useUsers';
import DeleteUserConfirmModal from '../../UserInformation/Components/DeleteUserConfirmModal';
const AdminCavitasDocuments = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  const [errorMessage, setErrorMessage] = useState();
  const {getAllUsers, deleteUserByAdmin} = useUsers();

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
    <section className='dashboard__container__content__cavitasDocs'>
      <header className='dashboard__container__content__cavitasDocs__header'>
        <div className='dashboard__container__content__cavitasDocs__header__iconBox'>
          <GroupsIcon  className='dashboard__container__content__cavitasDocs__header__iconBox__icon' />
          <p>Users</p>
        </div>
        <Button size='small' onClick={() => navigate("/admin/UserInformation")}>All Users</Button>
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
  )
}

export default AdminCavitasDocuments