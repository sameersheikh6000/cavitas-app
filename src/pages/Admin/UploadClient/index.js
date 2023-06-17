import React, { useState } from 'react'
import Page from '../../../components/Page/Page';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ADMIN_STORAGE_KEY } from '../../../config/helpers/variables';
import useClientInsurance from '../../../hooks/useClientInsurance';

const UploadClient = () => {
  const {createClientInsuranceAdmin} = useClientInsurance();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem(ADMIN_STORAGE_KEY));
  const [mandatoryEmployees, setMandatoryEmployees] = useState(false);
  const [voluntaryEmployees, setVoluntaryEmployees] = useState(false);

  const [client, setClient] = useState({
    corporate_client_name: "",
    number_of_employees_in_company: "",
    inception_date: "",
    file: '',
    details: "",
    status: "",
    referenced_broker_name: "",
    participation_mode: "",
    mandatory: "",
    voluntary: "",
    mandatory_number_of_employees: "",
    voluntary_number_of_employees: "",
    employees_family_info: "",
    insurance_payment_type: "",
    broker_reference: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: name !== "file" ? value : e.target.files[0] });
  }
  console.log({ ...client });

  const handleMandatoryEmployees = () => {
    if (mandatoryEmployees === false) {
      setMandatoryEmployees(true)
    } else {
      setClient({...client, mandatory: "", mandatory_number_of_employees: "" })
      setMandatoryEmployees(false)
    }
  }
  const handleVoluntaryEmployees = () => {
    if (voluntaryEmployees === false) {
      setVoluntaryEmployees(true)
    } else {
      setClient({...client, voluntary: "", voluntary_number_of_employees: "" })
      setVoluntaryEmployees(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      ...client,
    };
    const response = await createClientInsuranceAdmin(data);
    if (response.status < 300) {
      navigate("/admin");
    } else if (response.status > 300) {
      // setErrorMessage(response.message);
    }
  }
  return (
    <Page>
      <section className='uploadClient'>
        <header>
          <h1>Upload new members for the group cover</h1>
            <p>Please describe your group and upload the group census as spreadsheet (.xlsx or .csv) here via the form below
              and follow our communication with you via "Support tickets" on the left side menu.</p>
        </header>
        <div className='uploadClient__container'>
          <div className='uploadClient__container__body'>
            <div className='uploadClient__container__body__generalInfo'>
              <p>General info</p>
              {user?.data?.role === "admin" ?
                <input
                  className='uploadClient__container__body__generalInfo__input1'
                  type='text'
                  placeholder='Name of your corporate client*'
                  name="corporate_client_name"
                  value={client.corporate_client_name}
                  required={true}
                  onChange={handleChange}
                />
                :
                <input
                  className='uploadClient__container__body__generalInfo__input1'
                  type='text'
                  placeholder='Name of the company' />
              }
              <input
                className='uploadClient__container__body__generalInfo__input2'
                type='number'
                minlength="50"
                placeholder='Total number of employees in the company*'
                name="number_of_employees_in_company"
                value={client.number_of_employees_in_company}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div className='uploadClient__container__body__participation'>
              <p>Mode of participation in Cavitas dental insurance cover</p>
              <div className='uploadClient__container__body__participation__head'>
                <input
                  type='radio'
                  onClick={handleMandatoryEmployees}
                  checked={mandatoryEmployees === false ? false : true}
                  name="mandatory"
                  onChange={handleChange}
                  value={1}
                  required={true}
                />
                <label>Mandatory group of employees</label>
              </div>
              {mandatoryEmployees === true &&
                <div className='uploadClient__container__body__participation__buttonBox'>
                  <span>How many employees?</span>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio'
                      name='mandatory_number_of_employees'
                      value={1}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>50 - 100</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio'
                      name='mandatory_number_of_employees'
                      value={2}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>101 - 200</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio'
                      name='mandatory_number_of_employees'
                      value={3}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>202 - 500</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio'
                      name='mandatory_number_of_employees'
                      value={4}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>501 - 1000</label>
                  </div>
                </div>
              }
            </div>
            <div className='uploadClient__container__body__participation'>
              <div className='uploadClient__container__body__participation__head'>
                <input
                  onClick={handleVoluntaryEmployees}
                  checked={voluntaryEmployees === false ? false : true}
                  type='radio'
                  name='voluntary'
                  value={2}
                  required={true}
                  onChange={handleChange}
                />
                <label>Voluntry group of employees</label>
              </div>
              {voluntaryEmployees === true &&
                <div className='uploadClient__container__body__participation__buttonBox'>
                  <span>How many employees?</span>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio'
                      name='voluntary_number_of_employees'
                      value={1}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>100 - 200 (min 70% participation)</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio'
                      name='voluntary_number_of_employees'
                      value={2}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>201 - 500 (min 60% participation)</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio'
                      name='voluntary_number_of_employees'
                      value={3}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>501 - 1000 (min 50% participation)</label>
                  </div>
                </div>
              }
              <div className='uploadClient__container__body__participation'>
                <p>Do you want to add employees' family members to the group cover?</p>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='employees_family_info'
                    value={1}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>NO</label>
                </div>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='employees_family_info'
                    value={2}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>YES - Family members are included in the list</label>
                </div>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='employees_family_info'
                    value={3}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>YES - Please collect family members data from our employees included in the list
                  </label>
                </div>
              </div>
              <div className='uploadClient__container__body__participation'>
                <p>How insurance premium of family members is paid?</p>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='insurance_payment_type'
                    value={1}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>By employer via employee's monthly salary</label>
                </div>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='insurance_payment_type'
                    value={2}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>By the family members themselves
                  </label>
                </div>
              </div>
              <div className='uploadClient__container__body__participation'>
                <p>Do you have a mandated insurance broker through whom you found out about Cavitas dental insurance?</p>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='broker_reference'
                    value={1}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>YES</label>
                </div>
                <input
                  className='uploadClient__container__body__participation__headInput'
                  type='text'
                  name="referenced_broker_name"
                  onChange={handleChange}
                  placeholder='Name of insurance broker company'
                  value={client?.referenced_broker_name}
                />

                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='broker_reference'
                    value={2}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>NO</label>
                </div>
              </div>
              <div className='uploadClient__container__body__participation'>
                <p>Desired Cavitas dental insurance group cover inception date?</p>
                <input
                  className='uploadClient__container__body__participation__headInput'
                  type='date'
                  placeholder='Name of insurance broker company'
                  value={client.inception_date}
                  onChange={handleChange}
                  name="inception_date"
                  required={true}
                />
              </div>
              <div className='uploadClient__container__body__participation'>
                <p>Please upload the group census as spreadsheet (.xls or .csv)</p>
                <div className='uploadClient__container__body__participation__fileUpload'>
                  <label for="file-input">
                    <FileUploadOutlinedIcon className='uploadClient__container__body__participation__fileUpload__icon' />
                    Upload file
                  </label>
                  <input id="file-input" type="file"
                    onChange={handleChange}
                    name="file"
                    required={true}
                  />
                </div>
              </div>
              <div className='uploadClient__container__body__participation'>
                <p>Are there any other details you'd like to tell us about your group?</p>
                <textarea
                  rows="6"
                  className='uploadClient__container__body__participation__headInput'
                  placeholder='Start here...'
                  value={client.details}
                  required={true}
                  onChange={handleChange}
                  name="details"
                />
              </div>
            </div>
            <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default UploadClient
