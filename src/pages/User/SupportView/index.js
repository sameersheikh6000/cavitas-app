import React from 'react'
import Page from "../../../components/Page/Page";
import { Button, Card } from '@mui/material';
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
            <p>SUPPORT TICKETS</p>
          </div>
        </header>
        <div className='supportView__details'>
          <table className='supportView__details__table'>
            <thead>
              <tr>
                <th>Ticket#</th>
                <th>Subject</th>
                <th>Description</th>
                <th>File</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
                <td>Test</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Page>
  )
}

export default SupportView