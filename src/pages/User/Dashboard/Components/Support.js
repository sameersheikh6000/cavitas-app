import { Button } from '@mui/material'
import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const Support = () => {
  return (
    <section className='support'>
      <header className='support__header'>
        <div className='support__header__iconBox'>
          < EmailOutlinedIcon lassName='support__header__iconBox__icon' />
          <p>SUPPORT</p>
        </div>
        <Button size='small'>View all</Button>
      </header>
      <div className='support__details'>
        <table className='support__details__table'>
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

export default Support