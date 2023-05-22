import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../config/helpers/i18n';
import Page from '../../../components/Page/Page';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { USER_STORAGE_KEY } from '../../../config/helpers/variables';
import useClientInsurance from '../../../hooks/useClientInsurance';
import SuccessMessage from '../../../components/SnackbarMessages/SuccessMessage';

const UploadClient = () => {
  const currentUrl = window.location.href;
  const lang = currentUrl.split("/").pop();
  const { t } = useTranslation();

  useEffect(() => {
    const currentUrl = window.location.href;
    let lang = currentUrl.split("/").pop();
    lang && i18n.changeLanguage(lang == "pl" ? lang : "en");
  }, [])
  const {createClientInsurance} = useClientInsurance();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem(USER_STORAGE_KEY));
  console.log(user?.data?.role == 'broker')
  const [mandatoryEmployees, setMandatoryEmployees] = useState(false);
  const [voluntaryEmployees, setVoluntaryEmployees] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [fileName, setFileName] = useState("");
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
    e.target.files[0] && setFileName(e.target.files[0].name)
  }

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
    const response = await createClientInsurance(data);
    if (response?.status < 300) {
      setSuccessMessage("Submited Successfully!")
      navigate("/dashboard");
    } else if (response.status > 300) {
      // setErrorMessage(response.message);
    }
  }
  return (
    <Page>
      <SuccessMessage successMessage={successMessage}/>
      <section className='uploadClient'>
        <header>
          <h1>{t("Uploadinsuredperson.Uploadinsuredperson_title")}</h1>
          {user?.data?.role === "broker" ?
            <p>{t("Uploadinsuredperson.Uploadinsuredperson_heading")}</p>
            :
            <p>Please describe your group and upload the group census as spreadsheet (.xls or .csv) here via the form below
              and follow our communication with you via "Support tickets" on the left side menu.</p>
          }
        </header>
        <div className='uploadClient__container'>
          <div className='uploadClient__container__body'>
            <div className='uploadClient__container__body__generalInfo'>
              <p>{t("Uploadinsuredperson.Question_no1")}</p>
              {user?.data?.role === "broker" ?
                <input
                  className='uploadClient__container__body__generalInfo__input1'
                  type='text'
                  placeholder={`${t("Uploadinsuredperson.Question_no1_part1")}`}
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
                placeholder={`${t("Uploadinsuredperson.Question_no1_part2")}`}
                name="number_of_employees_in_company"
                value={client.number_of_employees_in_company}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div className='uploadClient__container__body__participation'>
            <p>{t("Uploadinsuredperson.Question_no2")}</p>
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
                <label>{t("Uploadinsuredperson.Question_no2_part1")}</label>
              </div>
              {mandatoryEmployees === true &&
                <div className='uploadClient__container__body__participation__buttonBox'>
                  <span>{t("Uploadinsuredperson.Question_no2_part1_part1")}</span>
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
                <label>{t("Uploadinsuredperson.Question_no2_part2")}</label>
              </div>
              {voluntaryEmployees === true &&
                <div className='uploadClient__container__body__participation__buttonBox'>
                  <span>{t("Uploadinsuredperson.Question_no2_part2_part1")}</span>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio'
                      name='voluntary_number_of_employees'
                      value={1}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>{t("Uploadinsuredperson.Question_no2_part2_part2")}</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio'
                      name='voluntary_number_of_employees'
                      value={2}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>{t("Uploadinsuredperson.Question_no2_part2_part3")}</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio'
                      name='voluntary_number_of_employees'
                      value={3}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>{t("Uploadinsuredperson.Question_no2_part2_part4")}</label>
                  </div>
                </div>
              }
              <div className='uploadClient__container__body__participation'>
              <p>{t("Uploadinsuredperson.Question_no3")}</p>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='employees_family_info'
                    value={1}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>{t("Uploadinsuredperson.Question_no3_part1")}</label>
                </div>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='employees_family_info'
                    value={2}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>{t("Uploadinsuredperson.Question_no3_part2")}</label>
                </div>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='employees_family_info'
                    value={3}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>{t("Uploadinsuredperson.Question_no3_part3")}
                  </label>
                </div>
              </div>
              <div className='uploadClient__container__body__participation'>
              <p>{t("Uploadinsuredperson.Question_no4")}</p>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='insurance_payment_type'
                    value={1}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>{t("Uploadinsuredperson.Question_no4_part1")}</label>
                </div>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio'
                    name='insurance_payment_type'
                    value={2}
                    // required={true}
                    onChange={handleChange}
                  />
                  <label>{t("Uploadinsuredperson.Question_no4_part2")}
                  </label>
                </div>
              </div>
              {user?.data?.role !== 'broker' && 
                <div className='uploadClient__container__body__participation'>
                <p>{t("Uploadinsuredperson.Question_no5")}</p>
                  <div className='uploadClient__container__body__participation__head'>
                    <input
                      type='radio'
                      name='broker_reference'
                      value={1}
                      // required={true}
                      onChange={handleChange}
                    />
                    <label>{t("Uploadinsuredperson.Question_no5_part1")}</label>
                  </div>
                  <input
                    className='uploadClient__container__body__participation__headInput'
                    type='text'
                    name="referenced_broker_name"
                    onChange={handleChange}
                    placeholder={`${t("Uploadinsuredperson.Question_no5_part2")}`}
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
                }
                {user?.data?.role !== 'broker' && 
                  setClient({ ...client, referenced_broker_name: `${user?.first_name}`+ ` ` +`${user?.last_name}`, broker_reference: 1})
                }
                
              <div className='uploadClient__container__body__participation'>
              <p>{t("Uploadinsuredperson.Question_no6")}</p>
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
              <p>{t("Uploadinsuredperson.Question_no7")}</p>
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
                <p>{fileName}</p>
                </div>
              </div>
              <div className='uploadClient__container__body__participation'>
              <p>{t("Uploadinsuredperson.Question_no8")}</p>
                <textarea
                  rows="6"
                  className='uploadClient__container__body__participation__headInput'
                  placeholder={`${t("contactform.texthere")}`}
                  value={client.details}
                  required={true}
                  onChange={handleChange}
                  name="details"
                />
              </div>
            </div>
            <Button onClick={(e) => handleSubmit(e)}>{t("Uploadinsuredperson.Submitform")}</Button>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default UploadClient