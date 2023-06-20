import { Button } from '@mui/material'
import GroupsIcon from '@mui/icons-material/Groups';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import useUsers from '../../../../hooks/useUsers';
import DeleteUserConfirmModal from '../../UserInformation/Components/DeleteUserConfirmModal';
import AlertMessage from '../../../../components/SnackbarMessages/AlertMessage';

const AdminCavitasDocuments = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  const [errorMessage, setErrorMessage] = useState();
  const {getAllUsers, deleteUserByAdmin} = useUsers();

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const today = `${year}-${month}-${day}`;

  const getUsersList = async () => {
    const response = await getAllUsers()
    if (response?.status < 300){
      setUsers(response?.users)
      console.log(users)
    } else if (response?.status > 300) {
      setErrorMessage(response?.message);

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  }


  useEffect(() => {
    getUsersList();
  }, [])
  return (
    <section className='dashboard__container__content__cavitasDocs'>
      <AlertMessage errorMessage={errorMessage} />
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
              <tr
                    key={index}
                    style={{
                      fontWeight: row?.created_at == today ? "bold" : "normal"
                    }}
                  >
                <td>{row?.created_at == today && <span style={{color: "red"}}>NEW</span>}{row?.company_name}</td>
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
