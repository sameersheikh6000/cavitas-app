import { Button } from '@mui/material'
import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from 'react-router-dom';
const AdminSupport = () => {
  const navigate = useNavigate();
  return (
    <section className='dashboard__container__content__support'>
      <header className='dashboard__container__content__support__header'>
        <div className='dashboard__container__content__support__header__iconBox'>
          < EmailOutlinedIcon className='dashboard__container__content__support__header__iconBox__icon' />
          <p>SUPPORT</p>
        </div>
        <Button size='small' onClick={() => navigate("/admin/support/view")}>View all</Button>
      </header>
      <div className='dashboard__container__content__support__details'>
        <table className='dashboard__container__content__support__details__table'>
          <thead>
            <tr>
              <th>Support ticket number</th>
              <th>Last status</th>
              <th>Last update</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="number" />
              </td>
              <td>......................</td>
              <td>......................</td>
              <td>
                <Button size='small'>Open Message</Button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" />
              </td>
              <td>......................</td>
              <td>......................</td>
              <td>
                <Button size='small'>Open Message</Button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" />
              </td>
              <td>......................</td>
              <td>......................</td>
              <td>
                <Button size='small'>Open Message</Button>
              </td>
            </tr>
            <tr>
              <td>
                <input type="number" />
              </td>
              <td>......................</td>
              <td>......................</td>
              <td>
                <Button size='small'>Open Message</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AdminSupport