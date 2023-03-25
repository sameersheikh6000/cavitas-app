import { Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../../../hooks/useUsers';
import DeleteUserConfirmModal from '../../UserInformation/Components/DeleteUserConfirmModal';
const AdminCavitasDocs = () => {
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
          < TextSnippetOutlinedIcon className='dashboard__container__content__cavitasDocs__header__iconBox__icon' />
          <p>Cavitas Documents</p>
        </div>
        <Button size='small' onClick={() => navigate("/admin/CavitasDocuments/")}>VIEW ALL</Button>
      </header>
      <div className='dashboard__container__content__cavitasDocs__details'>
        <table className='dashboard__container__content__cavitasDocs__details__table'>
          <thead>
            <tr>
             
            </tr>
          </thead>
          <tbody>
         
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminCavitasDocs