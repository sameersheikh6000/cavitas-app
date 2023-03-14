// import { Button } from '@mui/material'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import Page from '../../../components/Page/Page';
// import AlertMessage from "../../../components/SnackbarMessages/AlertMessage";
// import useClientInsurance from '../../../hooks/useClientInsurance';

// const UploadClient = () => {

//   const navigate = useNavigate();
//   const { createClientInsurance } = useClientInsurance();
//   const [errorMessage, setErrorMessage] = useState(null);
//   const [insurance, setInsurance] = useState({
//     subject: "",
//     description: "",
//     file: "",
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setInsurance({
//       ...insurance, [name]: name !== "file" ? value : e.target.files[0]
//     });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     let data = {
//       ...insurance,
//     };
//     const response = await createClientInsurance(data);
//     if (response.status < 300) {
//       navigate("/dashboard");
//     } else if (response.status > 300) {
//       setErrorMessage(response.message);
//     }
//   }

//   return (
//     <Page>
//       <AlertMessage errorMessage={errorMessage} />
//       <section className='uploadClient'>
//         <header>
//           <h1>Upload new clients</h1>
//           <p>Please upload the group census ass spreadsheet (.xls or .csv) here via form below and follow our communication with you via "Support tickets" on left side menu.</p>
//         </header>
//         <div className='uploadClient__container'>
//           <div className='uploadClient__container__content'>
//             <p>Upload Clients</p>
//             <form className='uploadClient__container__content__form' onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 placeholder='Subject'
//                 name='subject'
//                 onChange={handleChange}
//                 value={insurance.subject}
//                 required={true}
//               />
//               <input
//                 type="text"
//                 placeholder='Description'
//                 name='description'
//                 onChange={handleChange}
//                 value={insurance.description}
//                 required={true}
//               />
//               <input
//                 type="file"
//                 name='file'
//                 onChange={handleChange}
//                 required={true}
//               />
//               <Button type='submit'>Submit</Button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </Page>
//   )
// }

// export default UploadClient


import React, { useState } from 'react'
import Page from '../../../components/Page/Page';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { Button } from '@mui/material';

const UploadClient = () => {

  const [mandatoryEmployees, setMandatoryEmployees] = useState(false);
  const [voluntaryEmployees, setVoluntaryEmployees] = useState(false);

  const handleMandatoryEmployees = () => {
    if (mandatoryEmployees === false) {
      setMandatoryEmployees(true)
    } else {
      setMandatoryEmployees(false)
    }
  }
  const handleVoluntaryEmployees = () => {
    if (voluntaryEmployees === false) {
      setVoluntaryEmployees(true)
    } else {
      setVoluntaryEmployees(false)
    }
  }
  return (
    <Page>
      <section className='uploadClient'>
        <header>
          <h1>Upload new members for the group cover</h1>
          <p>Please describe the group of your corporate client and upload the group census as spreadsheet (.xls or .csv) here via the form below and follow our communication with via "Support tickets" on the left side menu.</p>
        </header>
        <div className='uploadClient__container'>
          <div className='uploadClient__container__body'>
            <div className='uploadClient__container__body__generalInfo'>
              <p>General info</p>
              <input
                className='uploadClient__container__body__generalInfo__input1'
                type='text'
                placeholder='Name of your corporate client*' />
              <input
                className='uploadClient__container__body__generalInfo__input2'
                type='number'
                minlength="50"
                placeholder='Total number of employees in the company*' />
            </div>

            <div className='uploadClient__container__body__participation'>
              <p>Mode of participation in Cavitas dental insurance cover</p>
              <div className='uploadClient__container__body__participation__head'>
                <input
                  type='radio' onClick={handleMandatoryEmployees} checked={mandatoryEmployees === false ? false : true} />
                <label>Mandatory group of employees</label>
              </div>
              {mandatoryEmployees === true &&
                <div className='uploadClient__container__body__participation__buttonBox'>
                  <span>How many employees?</span>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio' />
                    <label>50 - 100</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio' />
                    <label>101 - 200</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio' />
                    <label>202 - 500</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio' />
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
                  type='radio' />
                <label>Voluntry group of employees</label>
              </div>
              {voluntaryEmployees === true &&
                <div className='uploadClient__container__body__participation__buttonBox'>
                  <span>How many employees?</span>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio' />
                    <label>100 - 200 (min 70% participation)</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio' />
                    <label>201 - 500 (min 60% participation)</label>
                  </div>
                  <div className='uploadClient__container__body__participation__buttonBox__button'>
                    <input
                      type='radio' />
                    <label>501 - 1000 (min 50% participation)</label>
                  </div>
                </div>
              }
              <div className='uploadClient__container__body__participation'>
                <p>Do you want to add employees' family members to the group cover?</p>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio' />
                  <label>NO</label>
                </div>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio' />
                  <label>YES - Family members are included in the list</label>
                </div>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio' />
                  <label>YES - Please collect family members data from our employees included in the list
                  </label>
                </div>
              </div>
              <div className='uploadClient__container__body__participation'>
                <p>How insurance premium of family members is paid?</p>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio' />
                  <label>By employer via employee's monthly salary</label>
                </div>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio' />
                  <label>By the family members themselves
                  </label>
                </div>
              </div>
              <div className='uploadClient__container__body__participation'>
                <p>Do you have a mandated insurance broker through whom you found out about Cavitas dental insurance?</p>
                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio' />
                  <label>YES</label>
                </div>
                <input
                  className='uploadClient__container__body__participation__headInput'
                  type='text'
                  placeholder='Name of insurance broker company' />

                <div className='uploadClient__container__body__participation__head'>
                  <input
                    type='radio' />
                  <label>NO</label>
                </div>
              </div>
              <div className='uploadClient__container__body__participation'>
                <p>Desired Cavitas dental insurance group cover inception date?</p>
                <input
                  className='uploadClient__container__body__participation__headInput'
                  type='date'
                  placeholder='Name of insurance broker company' />
              </div>
              <div className='uploadClient__container__body__participation'>
                <p>Please upload the group census as spreadsheet (.xls or .csv)</p>
                <div className='uploadClient__container__body__participation__fileUpload'>
                  <label for="file-input">
                    <FileUploadOutlinedIcon className='uploadClient__container__body__participation__fileUpload__icon' />
                    Upload file
                  </label>
                  <input id="file-input" type="file" />
                </div>
              </div>
              <div className='uploadClient__container__body__participation'>
                <p>Are there any other details you'd like to tell us about your group?</p>
                <textarea
                  rows="6"
                  className='uploadClient__container__body__participation__headInput'
                  placeholder='Start here...' />
              </div>
            </div>
            <Button>Submit</Button>
          </div>
        </div>
      </section>
    </Page>
  )
}

export default UploadClient