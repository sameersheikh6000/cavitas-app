import React, {useEffect, useState} from 'react'
import Page from "../../../components/Page/Page";
import { Button, Card } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import useClientInsurance from '../../../hooks/useClientInsurance';
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';

const SupportView = () => {
  const { getAllClientInsurance } = useClientInsurance();
  const navigate = useNavigate();
  const [clientInfos, setClientInfos] = useState([]);
  const [errorMessage, setErrorMessage] = useState();

  const getAllClientInfos = async () => {
    const response = await getAllClientInsurance()
    debugger
    if (response.status < 300) {
      console.log(response)
      setClientInfos(response?.client_infos)
    } else if (response.status > 300) {
      setErrorMessage(response.message);
    }
  }
useEffect(() => {
  getAllClientInfos()
}, [])
  return (
    <Page>
       <AlertMessage errorMessage={errorMessage} />
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