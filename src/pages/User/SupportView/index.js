import React from 'react'
import Page from "../../../components/Page/Page";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const SupportView = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <section className='supportView'>
        <header className='supportView__header'>
          <div className='supportView__header__iconBox'>
            < EmailOutlinedIcon className='supportView__header__iconBox__icon' />
            <p>SUPPORT</p>
          </div>
        </header>
        <div className='supportView__details'>
          <table className='supportView__details__table'>
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
    </Page>
  )
}

export default SupportView