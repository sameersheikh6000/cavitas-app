import React, {useState} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import usePolicyInformation from '../../../../hooks/usePolicyInoformation';
function PolicyInoformationCreate({setSuccessMessage, setErrorMessage, getPolicyInfo }) {

    const {createPolicyInformation} = usePolicyInformation();
    const [open, setOpen] = useState(false);
    const [policyInformation, setPolicyInformation] = useState();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 750,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 14,
        p: 4,
      };

    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    const response = await createPolicyInformation(policyInformation);
    if(response?.status < 300) {
        setSuccessMessage("Policy Created Successfully!");
        getPolicyInfo();
        handleClose();
    } else if(response?.status > 300){
        setErrorMessage(response?.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
    }
  }

  return (
    <div>
        <Button color='primary' variant='outlined' size='small' style={{ color: "white !important" ,margin: "5px" }} onClick={() => handleOpen()}>Create</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='uploadClient__container__body__participation'>
              <p>Create This Policy</p>



            <div className='userProfileView__container__details'>
            <div className='userProfileView__container__details__detailsBox'>
            <div className='userProfileView__container__details__detailsBox__feilds__container'>
                <div><input
                    type="text"
                    placeholder='Company Name'
                    value={policyInformation?.company_name}
                    onChange={(e) => setPolicyInformation({ ...policyInformation, company_name: e.target.value })}
                /></div>
                <div><input
                    type="text"
                    placeholder='Company KRS Number'
                    value={policyInformation?.company_krs_number}
                    onChange={(e) => setPolicyInformation({ ...policyInformation, company_krs_number: e.target.value })}                />
                </div>
                <div><input
                  type="text"
                  placeholder='Company URL Address'
                  value={policyInformation?.company_url_address}
                  onChange={(e) => setPolicyInformation({ ...policyInformation, company_url_address: e.target.value })}
                  />
                </div>
                <div style={{display: "flex", flexDirection: "column", textAlign: "end"}}><input
                  type="date"
                  placeholder='Risk Inception Date'
                  value={policyInformation?.risk_inseption_date}
                  onChange={(e) => setPolicyInformation({ ...policyInformation, risk_inseption_date: e.target.value })}
                />
                <label>Risk Inception Date</label>
                </div>
                <div style={{marginTop: "5px", display: "flex", flexDirection: "column", textAlign: "end"}}><input
                    type="date"
                    placeholder='Risk Expiry Date'
                    onChange={(e) => setPolicyInformation({ ...policyInformation, risk_expiry_date: e.target.value })}
                    value={policyInformation?.risk_expiry_date}
                  />
                  <label>Risk Expiry Date</label>
                  </div>
                  <div style={{marginTop: "5px", display: "flex", flexDirection: "column", textAlign: "end"}}><input
                        type="date"
                        value={policyInformation?.risk_renewal_date}
                        onChange={(e) => setPolicyInformation({ ...policyInformation, risk_renewal_date: e.target.value })}
                        placeholder='Risk Renewal Date' />
                        <label>Risk Renewal Date</label>
                    </div>
                  </div>
            </div>

            <div className='userProfileView__container__details__detailsBox'>
            <div className='userProfileView__container__details__detailsBox__feilds__container'>
              <div><input
                type="text"
                placeholder='No. of Insured Persons'
                value={policyInformation?.no_of_insured_persons}
                onChange={(e) => setPolicyInformation({ ...policyInformation, no_of_insured_persons: e.target.value })}
                />
              </div>
              <div><input
                type="text"
                placeholder='Mandated Broker'
                value={policyInformation?.mandated_broker}
                onChange={(e) => setPolicyInformation({ ...policyInformation, mandated_broker: e.target.value })}
              />
              </div>
              </div>
            </div>
          </div>
              <div className="uploadClient__container__body__participation_delete_user_button_container">
                <Button color='success' variant='contained' size='small' style={{ color: "white" }} onClick={() => handleUpdate()}>Create</Button>
                <Button color='primary' variant="outlined" size='small' style={{ color: "black" }} onClick={() => handleClose()}>cancel</Button>
              </div>
            </div>
          </Box>
        </Modal>
    </div>
  )
}

export default PolicyInoformationCreate
