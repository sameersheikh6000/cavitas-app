import React, { useState, useEffect } from 'react'
import AlertMessage from '../../../components/SnackbarMessages/AlertMessage';
import { useNavigate } from 'react-router-dom';
import useClientInsurance from '../../../hooks/useClientInsurance';
import { Button } from '@mui/material'
import moment from 'moment';
import Page from "../../../components/Page/Page";
import { API_KEY } from '../../../config/helpers/variables';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import InsuredClientRejectModal from './Components/InsuredClientReajectModal';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';


const AdminInsuredClientView = () => {
  const navigate = useNavigate();
  const { getAllClientInsuranceAdmin, updateClientInsuranceAdmin } = useClientInsurance();
  const [clientInfoList, setClientInfoList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null)
  const [file, setFile] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const getClientInsurance = async () => {

    const response = await getAllClientInsuranceAdmin();
    if (response.status < 300) {
      setClientInfoList(response.client_infos);
    } else {
      setErrorMessage('Something went wrong!')
    }
  }

  const handleChange = (e) => {
    setFile( e.target.files[0] )
  }

  const handleUpdate = async (id) => {
    const response = await updateClientInsuranceAdmin()
  }

  useEffect(() => {
    getClientInsurance();
  }, []);

  return (
    <Page>
      <AlertMessage errorMessage={errorMessage} />
      <section className='insuredClientView'>
        <header className='insuredClientView__header'>
          <div className='insuredClientView__header__left'>
            <BusinessCenterOutlinedIcon className='insuredClientView__header__left__icon' />
            <p>Clients to be Insured ({clientInfoList.length})</p>
          </div>
          <div className='insuredClientView__header__right'>
            <input type='text' placeholder='Search' />
            <SearchOutlinedIcon className='insuredClientView__header__right__icon' />
          </div>
        </header>
        <div className='insuredClientView__container'>
          <table >
            <thead>
              <tr>
                <th>id#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Total Employees in Company</th>
                <th>Participation</th>
                <th>Mandatory Employees</th>
                <th>Voluntary Employees</th>
                <th>Employee Family Info</th>
                <th>Payment Type</th>
                <th>Broker Reference</th>
                <th>Broker Name</th>
                <th>File</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {clientInfoList.length > 0 ? clientInfoList.map((row, index) => (
                <tr>
              <td>{row?.id}</td>
                  <td>{row?.corporate_client_name}</td>
                  <td>{row?.details}</td>
                  <td>{row?.number_of_employees_in_company}</td>
                  <td>{row?.participation_mode}</td>
                  <td>{row?.mandatory_number_of_employees}</td>
                  <td>{row?.voluntary_number_of_employees}</td>
                  <td>{row?.employees_family_info}</td>
                  <td>{row?.insurance_payment_type}</td>
                  <td>{row?.broker_reference}</td>
                  <td>{row?.referenced_broker_name}</td>
                  <td>{
                    <a href={`${API_KEY}/api/v1/client_infos/${row?.id}/download_file`}>{row?.file?.filename}</a>
                    }</td>
                  <td>{row?.status}</td>
                  <td>
                  <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={handleOpen}>update</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Text in a modal
                        </Typography>
                        <div className='uploadClient__container__body__participation'>
                          <p>Please upload the group census as spreadsheet (.xls or .csv)</p>
                          <div className='uploadClient__container__body__participation__fileUpload'>
                            <label for="file-input">
                              <FileUploadOutlinedIcon className='uploadClient__container__body__participation__fileUpload__icon' />
                              Upload file
                            </label>
                            <input id="file-input" type="file"
                              onChange={(e) => handleChange(e)}
                              name="file"
                              required={true}
                            />
                          </div>
                          <div className="uploadClient__container__body__participation_submit_button">
                            <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={() => handleUpdate(row?.id)}>submit</Button>
                          </div>
                        </div>
                      </Box>
                    </Modal></td>
                {/* <td style={{ display: "flex", alignItems: 'center', justifyContent: 'space-around' }}>
                  <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={() => navigate("/admin/dashboard")}>Accept</Button>
                  <InsuredClientRejectModal />
                </td> */}
              </tr>
              )) 
              :
                <div>
                  <p>No records.</p>
                </div>}
            </tbody>
          </table>
        </div>
      </section>
    </Page>
  )
}

export default AdminInsuredClientView