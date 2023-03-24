import { Button } from '@mui/material'
import React from 'react'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import { useNavigate } from 'react-router-dom';
const AdminCavitasDocs = () => {
  const navigate = useNavigate();
  return (
    <section className='dashboard__container__content__cavitasDocs'>
      <header className='dashboard__container__content__cavitasDocs__header'>
        <div className='dashboard__container__content__cavitasDocs__header__iconBox'>
          < TextSnippetOutlinedIcon className='dashboard__container__content__cavitasDocs__header__iconBox__icon' />
          <p>User Information</p>
        </div>
        <Button size='small' onClick={() => navigate("/admin/UserInformation")}>All Users</Button>
      </header>
      <div className='dashboard__container__content__cavitasDocs__details'>
        <table className='dashboard__container__content__cavitasDocs__details__table'>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>User Email</td>
              <td>Password</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
            <tr>
              <td>......................</td>
              <td>......................</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminCavitasDocs